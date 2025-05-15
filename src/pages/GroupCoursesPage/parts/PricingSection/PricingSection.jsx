// import useScrollTo from '../../hooks/useScrollTo';
import { urlToSummerIntensiveRegisterForm } from '../../../../utils/globalConstants';
import './PricingSection.scss';

const PricingSection = () => {
  // const scrollTo = useScrollTo();

  const handlerClickOnBtn = () => {
    window.open(urlToSummerIntensiveRegisterForm, '_blank', 'noopener,noreferrer');
  }

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <h2 className="section-title">Летний абонемент</h2>
        <p className="section-subtitle">С 7 июня по 31 августа</p>
        
        <div className="pricing-card">
          <div className="price-tag">
            <div className="current-price">8 400 ₽</div>
            <div className="old-price">16 800 ₽</div>
            <div className="discount-badge">-50%</div>
          </div>
          
          <div className="price-per-lesson">
            <span>1 урок = </span>
            <span className="lesson-price">350 ₽</span>
          </div>
          
          <ul className="features-list">
            <li className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Входное тестирование
            </li>
            <li className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Составление индивидуальной программы
            </li>
            <li className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Индивидуальный курс занятий в записи
            </li>
            <li className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Личный тьютор
            </li>
            <li className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Проверка домашних заданий
            </li>
            <li className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Участие в турнирах
            </li>
            <li className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Сеанс с опытными мастерами
            </li>
          </ul>
          {/* TODO: 2 этап - после реализации формы записи, переделать onClick={() => scrollTo('signup-form', 0)} */}
          <button className="cta-button" onClick={handlerClickOnBtn}>
            Записаться на летний курс
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;