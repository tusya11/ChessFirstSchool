import "./Promo.scss";

const Promo = () => {
  const TELEGRAM_URL = "https://t.me/Coolchess_online/637";

  return (
    <div className="promo-landing-page landing-page-base">
      <section className="promo-section promo-hero-section section">
        <div className="container promo-container">
          <div className="promo-hero-content">
            <h1 className="promo-title">
              Шахматы для тех, кто хочет вырастить{" "}
              <span className="promo-title-accent">гения, а не тиктокера</span>
            </h1>
            <p className="promo-subtitle">
              Пока другие дети залипают в TikTok, ваш ребенок может прокачивать
              мозг и учиться просчитывать жизнь на 10 ходов вперед.
            </p>
            <p className="promo-subtitle">
              И нет, это не скучно — это интересно.
            </p>
            <p className="promo-subtitle">
              Прочитайте в нашем телеграм-канале какие 5 способностей
              развиваются у ребенка, когда он просто двигает пешку
            </p>
            <div className="promo-buttons">
              <a
                href={TELEGRAM_URL}
                className="button button--secondary promo-button promo-button--telegram"
                target="_blank"
                rel="noopener noreferrer">
                <span className="icon-telegram"></span>
                Прочитать статью
              </a>
            </div>
            <p className="promo-subtitle">
              Шахматы — это не просто игра для стариков в парке. Это самый
              мощный тренажер для мозга, который придумало человечество.
            </p>
            <div className="promo-stats">
              <h3 className="stats-title">Статистика:</h3>
              <ul className="stats-list">
                <li className="stats-item">
                  <span className="stats-bullet" role="img" aria-label="bullet">
                    ⚫
                  </span>{" "}
                  89% гроссмейстеров имеют IQ выше 140
                </li>
                <li className="stats-item">
                  <span className="stats-bullet" role="img" aria-label="bullet">
                    ⚫
                  </span>{" "}
                  Исследования показывают, что регулярная игра в шахматы снижает
                  риск деменции на 47%
                </li>
                <li className="stats-item">
                  <span className="stats-bullet" role="img" aria-label="bullet">
                    ⚫
                  </span>{" "}
                  Дети, играющие в шахматы, показывают результаты по математике
                  на 30% выше сверстников
                </li>
              </ul>
            </div>
            <div className="promo-buttons">
              <a
                href={TELEGRAM_URL}
                className="button button--secondary promo-button promo-button--telegram"
                target="_blank"
                rel="noopener noreferrer">
                <span className="icon-telegram"></span>
                Прочитать статью
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promo;
