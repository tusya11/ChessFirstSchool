import React, { useState, useEffect } from 'react';
import useScrollTo from './../../hooks/useScrollTo'
import './HeroSection.scss';

const HeroSection = () => {
  const scrollTo = useScrollTo();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // const targetDate = new Date('May 20, 2024 23:59:59'); //TODO: вернуть, если нужно

      // Устанавливаем дату окончания - 20 мая текущего года в 23:59:59
      const targetDate = new Date(now.getFullYear(), 4, 20, 23, 59, 59); // Месяцы в JS: 0-11 (4 = май)
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

   const hasDiscount = timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0;

  return (
    <section className="hero-section">
      <div className="chess-animation">
        <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {/* Шахматная доска */}
          <rect width="100%" height="100%" fill="#FAF5F1" />
          
          {/* Клетки доски */}
          {[...Array(8)].map((_, i) => (
            [...Array(8)].map((_, j) => (
              (i + j) % 2 === 1 && (
                <rect 
                  key={`${i}-${j}`} 
                  x={`${i * 12.5}%`} 
                  y={`${j * 12.5}%`} 
                  width="12.5%" 
                  height="12.5%" 
                  fill="#464BFF"
                />
              )
            ))
          ))}
          
          {/* Анимированные фигуры */}
          <g className="animated-pieces">
            <path 
              d="M150 250 Q 175 200 200 250 Q 225 200 250 250 L 225 275 L 200 250 L 175 275 Z" 
              fill="#2C2C2C"
              className="knight"
            />
            <circle 
              cx="600" 
              cy="400" 
              r="30" 
              fill="#FFFFFF" 
              stroke="#2C2C2C" 
              strokeWidth="3"
              className="queen"
            />
            <path 
              d="M500 300 L 520 350 L 500 350 L 480 350 Z" 
              fill="#DCE204"
              className="pawn"
            />
          </g>
        </svg>
        <div className="overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="fade-in">Курсы по шахматам</h1>
        <p className="subtitle fade-in">Развивайте стратегическое мышление и интеллект с нашими профессиональными тренерами</p>
        
        {hasDiscount ? (
          <>
            <div className="discount-banner fade-in">ДО 20 МАЯ СКИДКА 50%!</div>
            
            <div className="timer fade-in">
              <div className="timer-item">
                <span>{timeLeft.days.toString().padStart(2, '0')}</span>
                <small>дней</small>
              </div>
              <div className="timer-item">
                <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                <small>часов</small>
              </div>
              <div className="timer-item">
                <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <small>минут</small>
              </div>
              <div className="timer-item">
                <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <small>секунд</small>
              </div>
            </div>
          </>
        ) : (
          <div className="discount-banner fade-in">СКИДКИ ЗАКОНЧИЛИСЬ</div>
        )}

        <button className="cta-button fade-in" onClick={() => scrollTo('signup-form', 0)}>ЗАПИСАТЬСЯ СЕЙЧАС!</button>
      </div>
    </section>
  );
};

export default HeroSection;