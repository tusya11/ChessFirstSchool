import React from "react";

const FinalCTA = () => {
  const signupLink = "#signup";

  return (
    <section className="final-cta-section section section--dark-bg">
      {" "}
      <div className="container final-cta-container">
        <h2 className="final-cta-title">Готовы начать?</h2>

        <div className="final-cta-content">
          <p className="final-cta-trial">
            <span role="img" aria-label="Calendar">
              📅
            </span>{" "}
            Пробное занятие — <strong>БЕСПЛАТНО</strong>, без обязательств
          </p>
          <p className="final-cta-limited">
            <span role="img" aria-label="Hourglass">
              ⏳
            </span>{" "}
            Места ограничены — запишитесь прямо сейчас!
          </p>
        </div>

        <div className="final-cta-button-wrap">
          <a
            href={signupLink}
            className="button button--secondary final-cta-button"
          >
            Записаться на бесплатный урок
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
