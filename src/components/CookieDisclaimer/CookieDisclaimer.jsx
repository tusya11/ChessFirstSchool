import { useEffect, useState } from "react";
import consentPersonalData from "../../docs/consentPersonalData.pdf";
import privacyPolicy from "../../docs/privacy_policy.pdf";
import "./CookieDisclaimer.css";

const CookieDisclaimer = ({
  cookiePolicyUrl = "/cookie-policy",
  companyName = "наш сайт",
  daysToExpire = 365,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, давал ли пользователь уже согласие
    const consent = getCookie("cookie_consent");
    console.log(consent);
    if (!consent) {
      // Показываем баннер с небольшой задержкой для лучшего UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Функция для получения значения cookie
  const getCookie = (name) => {
    const matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          // eslint-disable-next-line
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)",
      ),
    );

    console.log(matches);
    return matches ? decodeURIComponent(matches[1]) : null;
  };

  // Функция для установки cookie
  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie =
      name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
  };

  // Обработчик принятия cookies
  const handleAccept = () => {
    setCookie("cookie_consent", "accepted", daysToExpire);
    setIsVisible(false);

    // Здесь можно инициализировать аналитические сервисы (Google Analytics и т.д.)
    // Например: window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({'event': 'cookie_consent_accepted'});
  };

  const handleReject = () => {
    setCookie("cookie_consent", "rejected", daysToExpire);
    setIsVisible(false);

    // Здесь можно отключить необязательные cookies
    // Например: disableAnalyticsCookies();
  };

  // Обработчик настройки cookies
  const handleSettings = () => {
    // Можно открыть модальное окно с подробными настройками
    // или перенаправить на страницу с политикой cookies
    window.open(cookiePolicyUrl, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-disclaimer-overlay">
      <div className="cookie-disclaimer">
        <div className="cookie-disclaimer__content">
          <div className="cookie-disclaimer__header">
            <h3 className="cookie-disclaimer__title">
              🍪 Мы используем файлы cookie
            </h3>
          </div>

          <div className="cookie-disclaimer__text">
            <p>
              {companyName} использует файлы cookie и аналогичные технологии для
              улучшения работы сайта, персонализации контента, анализа трафика и
              показа релевантной рекламы. Часть файлов cookie необходима для
              корректной работы сайта.
            </p>
            <p>
              Нажимая «Принять всё», вы соглашаетесь с использованием всех
              файлов cookie. Для более детальной настройки используйте кнопку
              «Настроить».
            </p>
            <p className="cookie-disclaimer__links">
              Подробнее в нашей{" "}
              <a
                href={privacyPolicy}
                target="_blank"
                rel="noopener noreferrer"
                className="cookie-disclaimer__link"
              >
                Политике конфиденциальности
              </a>{" "}
              и{" "}
              <a
                href={consentPersonalData}
                target="_blank"
                rel="noopener noreferrer"
                className="cookie-disclaimer__link"
              >
                Согласии на обработку персональных данных
              </a>
              .
            </p>
          </div>

          <div className="cookie-disclaimer__actions">
            <button
              onClick={handleSettings}
              className="cookie-disclaimer__button cookie-disclaimer__button--settings"
              aria-label="Настроить файлы cookie"
            >
              Настроить
            </button>
            <button
              onClick={handleReject}
              className="cookie-disclaimer__button cookie-disclaimer__button--reject"
              aria-label="Отклонить все необязательные файлы cookie"
            >
              Отклонить всё
            </button>
            <button
              onClick={handleAccept}
              className="cookie-disclaimer__button cookie-disclaimer__button--accept"
              aria-label="Принять все файлы cookie"
            >
              Принять всё
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieDisclaimer;
