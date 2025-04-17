import React from "react";

const SignupCTA = ({
  formData,
  messengers,
  selectedMessenger,
  isPrivacyChecked,
  isFormValid,
  isLoading,
  isSubmitted,
  handleInputChange,
  handleMessengerSelect,
  handlePrivacyCheck,
  handleSubmit,
}) => {
  const PRIVACY_POLICY_URL = "../../../docs/policy.pdf";
  const OFFER_URL = "../../../docs/offer.pdf";

  const MessengerIcon = ({ icon, title }) => (
    <div
      className="messenger-icon"
      dangerouslySetInnerHTML={{
        __html: `<img src="${icon}" alt="${title} icon" />`,
      }}
    />
  );

  const SuccessMessage = () => (
    <div className="form-success">
      <div className="success-icon">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
            stroke="#4CAF50"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="22 4 12 14.01 9 11.01"
            stroke="#4CAF50"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="success-title">Спасибо за заявку!</h3>
      <p className="success-message">
        Куратор школы свяжется с вами в ближайшее время, чтобы подобрать удобное
        время для проведения пробного занятия.
      </p>
    </div>
  );

  return (
    <section className="signup-cta-section section" id="signup">
      <div className="container signup-cta-container">
        <div className="signup-form-wrapper">
          {isSubmitted ? (
            <SuccessMessage />
          ) : (
            <form className="signup-form" onSubmit={handleSubmit} noValidate>
              <div className="form-header">
                <h3 className="form-title">Записаться на пробное занятие</h3>
                <p className="form-subtitle">
                  Подберем тренера и подходящую программу обучения под ваши
                  навыки и задачи.
                </p>
                <p className="form-description">
                  Куратор школы свяжется с вами, чтобы подобрать удобное время
                  для проведения пробного занятия.
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="telephone" className="form-label">
                  Телефон*
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  className="form-input"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  placeholder="+7 (___) ___-__-__"
                  required
                  aria-required="true"
                />
              </div>

              <div className="form-group messenger-section">
                <p className="form-label messenger-label">
                  Выберите мессенджер для связи*
                </p>
                <div className="messenger-options">
                  {messengers.map((messenger) => (
                    <div
                      key={messenger.id}
                      className={`messenger-option ${
                        selectedMessenger === messenger.id ? "selected" : ""
                      }`}
                      onClick={() => handleMessengerSelect(messenger.id)}
                      role="radio"
                      aria-checked={selectedMessenger === messenger.id}
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleMessengerSelect(messenger.id)
                      }>
                      <MessengerIcon
                        icon={messenger.icon}
                        title={messenger.title}
                      />
                      <span className="messenger-name">{messenger.title}</span>
                      <input
                        type="radio"
                        name="messenger"
                        value={messenger.id}
                        checked={selectedMessenger === messenger.id}
                        onChange={() => handleMessengerSelect(messenger.id)}
                        className="visually-hidden"
                        aria-labelledby={`messenger-label-${messenger.id}`}
                      />
                      <span
                        id={`messenger-label-${messenger.id}`}
                        className="visually-hidden">
                        {messenger.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Согласие с политикой */}
              <div className="form-group privacy-policy">
                <label className="privacy-label">
                  <input
                    type="checkbox"
                    checked={isPrivacyChecked}
                    onChange={handlePrivacyCheck}
                    required
                    aria-required="true"
                  />
                  <span className="privacy-text">
                    Я согласен с{" "}
                    <a
                      href={PRIVACY_POLICY_URL}
                      target="_blank"
                      rel="noopener noreferrer">
                      политикой конфиденциальности
                    </a>
                    {" и "}
                    <a
                      href={OFFER_URL}
                      target="_blank"
                      rel="noopener noreferrer">
                      офертой
                    </a>
                    *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className={`button button--secondary form-submit ${
                  !isFormValid || isLoading ? "button--disabled" : ""
                }`}
                disabled={!isFormValid || isLoading}>
                {isLoading ? "Отправка..." : "Отправить заявку"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignupCTA;
