import React, { useState, useEffect, useRef, useCallback } from "react";

// Константы для localStorage и времени
const POPUP_TIMESTAMP_KEY = "coolChessPopupLastShownTimestamp";
const SHOW_DELAY_MS = 25000; // 25 секунд
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000; // 3 дня в миллисекундах

// Иконка WhatsApp
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24">
    <path
      d="M17.6 6.32C16.8 5.5 15.8 4.85 14.7 4.4C13.6 3.95 12.3 3.7 11 3.7C9.7 3.7 8.5 3.95 7.3 4.4C6.2 4.85 5.2 5.5 4.3 6.32C3.5 7.14 2.9 8.1 2.4 9.2C2 10.3 1.7 11.5 1.7 12.8C1.7 14.4 2.1 15.9 2.8 17.3L1.7 22.2L6.7 21.1C8.1 21.8 9.5 22.2 11.1 22.2C12.4 22.2 13.6 21.9 14.7 21.5C15.8 21 16.8 20.4 17.6 19.6C18.4 18.8 19.1 17.8 19.5 16.7C20 15.6 20.2 14.3 20.2 13C20.2 11.7 19.9 10.5 19.5 9.4C19 8.1 18.4 7.14 17.6 6.32Z"
      fill="#25D366"
    />
    <path
      d="M11 20.3C9.6 20.3 8.3 19.9 7.1 19.2L6.8 19L3.9 19.7L4.6 16.9L4.4 16.6C3.6 15.4 3.2 14.1 3.2 12.7C3.2 11.6 3.4 10.6 3.8 9.7C4.2 8.8 4.7 8 5.4 7.3C6.1 6.6 6.9 6.1 7.8 5.7C8.7 5.3 9.8 5.1 10.9 5.1C12 5.1 13.1 5.3 14 5.7C14.9 6.1 15.7 6.6 16.4 7.3C17.1 8 17.6 8.8 18 9.7C18.4 10.6 18.6 11.6 18.6 12.7C18.6 13.8 18.4 14.9 18 15.8C17.6 16.7 17.1 17.5 16.4 18.2C15.7 18.9 14.9 19.4 14 19.8C13.1 20.1 12.1 20.3 11 20.3ZM15.1 14.2C15 14.1 14.8 14.1 14.5 14C14.2 13.9 13.4 13.5 13.2 13.4C12.9 13.3 12.7 13.3 12.6 13.5C12.4 13.7 12.1 14.1 12 14.3C11.9 14.5 11.8 14.5 11.5 14.4C11.2 14.3 10.7 14.1 10.1 13.6C9.6 13.2 9.3 12.7 9.1 12.4C9 12.1 9.1 12 9.2 11.9C9.3 11.8 9.4 11.6 9.5 11.5C9.6 11.4 9.6 11.2 9.7 11.1C9.8 10.9 9.7 10.8 9.7 10.7C9.6 10.6 9.3 9.8 9.1 9.4C9 9 8.8 9 8.7 9C8.6 9 8.4 9 8.2 9C8 9 7.7 9.1 7.5 9.4C7.3 9.7 6.9 10.1 6.9 10.9C6.9 11.7 7.4 12.5 7.5 12.7C7.6 12.9 9.3 15.5 11.9 16.1C14.5 16.7 14.5 16.4 15 16.4C15.5 16.4 16.2 16 16.4 15.5C16.6 15 16.6 14.6 16.5 14.5C16.4 14.4 16.3 14.3 15.1 14.2Z"
      fill="white"
    />
  </svg>
);

const ExitIntentPopup = ({ handleClick_WA }) => {
  const [showPopup, setShowPopup] = useState(false);
  // Используем ref для хранения ID таймера и функции очистки слушателя
  const timerIdRef = useRef(null);
  const removeExitIntentListenerRef = useRef(null);
  // Ref чтобы предотвратить многократное срабатывание показа
  const isPopupTriggeredRef = useRef(false);

  // --- Функции показа и скрытия ---

  // Единая функция для показа попапа
  const triggerShowPopup = useCallback(() => {
    // Предотвращаем повторный вызов, если уже показан или триггер сработал
    if (isPopupTriggeredRef.current) return;
    isPopupTriggeredRef.current = true; // Ставим флаг, что триггер сработал

    // Очищаем таймер и слушатель немедленно, чтобы второй триггер не сработал
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
      timerIdRef.current = null;
    }
    if (removeExitIntentListenerRef.current) {
      removeExitIntentListenerRef.current();
      removeExitIntentListenerRef.current = null;
    }

    setShowPopup(true);
    // Сохраняем текущее время показа
    localStorage.setItem(POPUP_TIMESTAMP_KEY, Date.now().toString());
  }, []);

  // Функция для закрытия попапа
  const closePopup = () => {
    setShowPopup(false);
    // Сохраняем время закрытия (это тоже считается "показом" для кулдауна)
    localStorage.setItem(POPUP_TIMESTAMP_KEY, Date.now().toString());
  };

  // --- Логика установки триггеров ---
  useEffect(() => {
    let isSubscribed = true; // Флаг для предотвращения обновления состояния после размонтирования

    // Проверяем, показывался ли попап за последние 3 дня
    const lastShownTimestamp = localStorage.getItem(POPUP_TIMESTAMP_KEY);
    const now = Date.now();

    if (lastShownTimestamp) {
      const timeSinceLastShown = now - parseInt(lastShownTimestamp, 10);
      if (timeSinceLastShown < THREE_DAYS_MS) {
        return; // Не показываем попап, если кулдаун не прошел
      }
    }

    // 1. Устанавливаем обработчик для определения попытки покинуть страницу
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && isSubscribed) {
        triggerShowPopup();
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    // Сохраняем функцию очистки
    const removeListener = () =>
      document.removeEventListener("mouseleave", handleMouseLeave);
    removeExitIntentListenerRef.current = removeListener; // Сохраняем в ref

    // 2. Устанавливаем таймер для показа попапа
    timerIdRef.current = setTimeout(() => {
      if (isSubscribed) {
        triggerShowPopup();
      }
    }, SHOW_DELAY_MS);

    // Функция очистки при размонтировании компонента
    return () => {
      isSubscribed = false; // Компонент размонтирован
      // Очищаем таймер, если он еще активен
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
      // Удаляем слушатель, если он еще активен
      if (removeExitIntentListenerRef.current) {
        removeExitIntentListenerRef.current();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerShowPopup]); // Добавляем triggerShowPopup в зависимости, т.к. он используется внутри

  // Если попап не должен отображаться, возвращаем null
  if (!showPopup) {
    return null;
  }

  const whatsAppApiUrl =
    "https://api.whatsapp.com/send/?phone=79185445984&text&type=phone_number&app_absent=0";

  return (
    <div className={`popup-overlay ${showPopup ? "show" : ""}`}>
      <div className="popup-container">
        <span className="popup-close" onClick={closePopup} aria-label="Закрыть">
          ×
        </span>
        <h2 className="popup-title">У вас есть бесплатный пробный урок!</h2>
        <p className="popup-text">
          Не упустите шанс — запишитесь прямо сейчас:
        </p>
        <a
          href={whatsAppApiUrl}
          className="button button--whatsapp wa-button"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleClick_WA();
            closePopup();
          }}>
          <span className="whatsapp-icon">
            <WhatsAppIcon />
          </span>
          <span>Записаться</span>
        </a>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
