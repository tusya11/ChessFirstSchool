// import useScrollTo from '../../hooks/useScrollTo';
import { useState } from 'react';
import RegistrationDrawer from '../RegistrationDrawer/RegistrationDrawer';
import './PricingSection.scss';

const PricingSection = ({ price }) => {
  // const scrollTo = useScrollTo();
  const { total, discountedTotal, discount, oneLessonTotal, discountedTotalNumber } = price;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handlerClickOnBtn = () => {
    setIsDrawerOpen(true);

    // Отправка статистики в Яндекс Метрику
    if (window.ym) {
      window.ym(96915259, 'reachGoal', 'lead_form');
    }
  };

  const handleClose = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <h2 className="section-title">Летний абонемент</h2>
        <p className="section-subtitle">С 7 июня по 31 августа</p>

        <div className="pricing-card">
          <div className="price-tag">
            <div className="current-price">{discountedTotal} ₽</div>
            <div className="old-price">{total} ₽</div>
            <div className="discount-badge">-{discount}%</div>
          </div>

          <div className="price-per-lesson">
            <span>1 урок = </span>
            <span className="lesson-price">{oneLessonTotal} ₽</span>
          </div>

          <ul className="features-list">
            <li className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              Составление индивидуальной программы
            </li>
            <li className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              Индивидуальный курс занятий в записи
            </li>
            <li className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              Личный тьютор
            </li>
            <li className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              Проверка домашних заданий
            </li>
            <li className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              Участие в турнирах
            </li>
            <li className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              Сеанс с опытными мастерами
            </li>
          </ul>
          {/* TODO: 2 этап - после реализации формы записи, переделать onClick={() => scrollTo('signup-form', 0)} */}
          <button className="cta-button" onClick={handlerClickOnBtn}>
            Купить абонемент
          </button>
        </div>
      </div>
      <RegistrationDrawer
        isOpen={isDrawerOpen}
        onClose={handleClose}
        totalSum={discountedTotalNumber}
      />
    </section>
  );
};

export default PricingSection;
