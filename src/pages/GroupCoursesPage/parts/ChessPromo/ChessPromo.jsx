import { useState, useEffect } from 'react';
import { urlToSummerIntensiveRegisterForm } from '../../../../utils/globalConstants'
// import useScrollTo from './../../hooks/useScrollTo'
import './ChessPromo.scss';

const ChessPromo = () => {
  // const scrollTo = useScrollTo();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [discountExpired, setDiscountExpired] = useState(false);

useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      // Устанавливаем дату окончания акции - 10 июня 00:00
      const targetDate = new Date(currentYear, 5, 10, 0, 0, 0); 

      // Проверяем, прошла ли дата окончания акции
      if (now >= targetDate) {
        setDiscountExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      const diff = targetDate - now;
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      
      return { days, hours, minutes, seconds };
    };

    // Инициализация таймера
    setTimeLeft(updateTimer());

    // Запускаем интервал только если скидка не истекла
    if (!discountExpired) {
      const timerId = setInterval(() => {
        setTimeLeft(updateTimer());
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [discountExpired]);

  const handleClickOnBtn = () => {
    window.open(urlToSummerIntensiveRegisterForm, '_blank', 'noopener,noreferrer')

    // Отправка статистики в Яндекс Метрику
     if (window.ym) {
      window.ym(96915259, "reachGoal",'lead_form')
    }
  }

  return (
    <section className="chess-promo-modern">
      <div className="promo-container">
        <div className="promo-content">
          <h1 className="promo-title">
            <span className="title-accent">Курсы по шахматам</span>
          </h1>
          
          <p className="promo-subtitle">
            Развивайте <span className="text-highlight">стратегическое мышление</span> и интеллект с нашими профессиональными тренерами
          </p>
          
          {!discountExpired && (
            <>
            <div className="discount-badge">
            <div className="badge-content">
              <span className="badge-text">ДО 9 ИЮНЯ</span>
              <span className="badge-discount">СКИДКА 25%</span>
            </div>
          </div>
          
          <div className="countdown-timer">
            <div className="timer-grid">
              <div className="timer-item">
                <div className="timer-value">{timeLeft.days}</div>
                <div className="timer-label">дней</div>
              </div>
              <div className="timer-separator">:</div>
              <div className="timer-item">
                <div className="timer-value">{timeLeft.hours}</div>
                <div className="timer-label">часов</div>
              </div>
              <div className="timer-separator">:</div>
              <div className="timer-item">
                <div className="timer-value">{timeLeft.minutes}</div>
                <div className="timer-label">минут</div>
              </div>
              <div className="timer-separator">:</div>
              <div className="timer-item">
                <div className="timer-value">{timeLeft.seconds}</div>
                <div className="timer-label">секунд</div>
              </div>
            </div>
          </div>
          </>
          )}
          
          {/* TODO: 2 этап - после реализации формы записи, переделать onClick={() => scrollTo('signup-form', 0)} */}
          <button className="cta-button" onClick={handleClickOnBtn}>
            <span className="button-text">ЗАПИСАТЬСЯ СЕЙЧАС</span>
            <span className="button-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChessPromo;