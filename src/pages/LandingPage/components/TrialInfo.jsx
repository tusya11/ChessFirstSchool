import React from "react";

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4f46e5"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const trialBenefits = [
  "Познакомитесь с преподавателем (и поймете, что он не зануда)",
  "Оцените формат онлайн-обучения (спойлер: это удобно)",
  "Определим уровень подготовки (даже если ноль)",
  "Подберем подходящую программу (индивидуально под вашего ребенка)",
];

const TrialInfo = () => {
  const signupLink = "#signup";

  return (
    <section className="trial-info-section section section--accent-bg">
      {" "}
      <div className="container trial-info-container">
        <div className="trial-info-header">
          <h2 className="trial-info-title">
            ХОТИТЕ, ЧТОБЫ ВАШ РЕБЕНОК БЫЛ УМНЕЕ СОСЕДСКОГО?
          </h2>
          <p className="trial-info-subtitle">
            Запишитесь на <strong>бесплатный урок</strong> прямо сейчас —
            выберите удобное время и проверьте, подойдет ли это вашему ребенку.
          </p>
        </div>

        {/* Список преимуществ */}
        <div className="trial-info-benefits">
          <ul className="benefits-list">
            {trialBenefits.map((benefit, index) => (
              <li className="benefits-item" key={index}>
                <span className="benefits-icon">
                  <CheckIcon />
                </span>
                <span className="benefits-text">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="trial-info-cta">
          <a
            href={signupLink}
            className="button button--secondary trial-info-button">
            ЗАПИСАТЬСЯ НА ПРОБНЫЙ УРОК
          </a>
          <p className="trial-info-note">
            <span role="img" aria-label="Calendar">
              📅
            </span>{" "}
            Пробное занятие — <strong>БЕСПЛАТНО</strong> и без обязательств
            <br />
            <span role="img" aria-label="Hourglass">
              ⏳
            </span>{" "}
            Места ограничены — запишитесь прямо сейчас!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrialInfo;
