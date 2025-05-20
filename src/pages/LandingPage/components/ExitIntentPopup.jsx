import { useState, useEffect, useRef, useCallback } from "react";

// Константы для localStorage и времени
const POPUP_TIMESTAMP_KEY = "coolChessPopupLastShownTimestamp";
const SHOW_DELAY_MS = 25000; // 25 секунд
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000; // 3 дня в миллисекундах

const TelegramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="120" cy="120" r="120" fill="#37AEE2" />
    <path
      d="M180.5 72.5L157.5 180.5C155.5 188.5 150.5 190.5 143 186.5L109.5 161.5L93.5 176.5C91 179 89 181 84.5 181L87.5 145.5L157 83.5C160.5 80.5 156 79 152 82L74.5 136.5L40.5 125.5C33 123.5 32.5 118.5 41.5 115.5L170 70.5C176.5 68.5 181.5 72.5 180.5 72.5Z"
      fill="white"
    />
  </svg>
);


const ExitIntentPopup = ({ handleClick_Tg }) => {
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

  const telegramUrl = "tg://resolve?domain=Coolchess_online";

  return (
    <div className={`popup-overlay ${showPopup ? "show" : ""}`}>
      <div className="popup-container">
        <span className="popup-close" onClick={closePopup} aria-label="Закрыть">
          ×
        </span>
        <h2 className="popup-title">Не актуально сейчас?</h2>
        <p className="popup-text">
          Подпишитесь на наши соцсети, чтобы не потерять:
        </p>
        <a
          href={telegramUrl}
          className="button button--sn sn-button"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleClick_Tg();
            closePopup();
          }}>
          <span className="sn-icon">
            <TelegramIcon />
          </span>
          <span></span>
        </a>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
