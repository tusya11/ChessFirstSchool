import React, { useState } from 'react';
import privacyPolicy from '../../../../docs/privacy_policy.pdf'
import './CTAFormSection.scss';

const CTAFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  return (
    <section className="cta-section" id="signup-form">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Не упусти свой шанс! Запишись прямо сейчас!</h2>
          
          <div className="benefits-reminder">
            <p>При записи до 31 августа вы получаете:</p>
            <ul>
              <li>Скидку 42% на летний абонемент</li>
              <li>Бесплатное входное тестирование</li>
              <li>Дополнительный урок в подарок</li>
            </ul>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Номер телефона"
                required
              />
            </div>
            
            <div className="consent-checkbox">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <label htmlFor="consent">
                Я соглашаюсь с <a href={privacyPolicy} target='_blank' rel='noreferrer'>политикой конфиденциальности</a>
              </label>
            </div>
            
            <button type="submit" className="submit-btn">
              Записаться на курс
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTAFormSection;