import { FaCalendarAlt, FaVideo, FaClock, FaUserGraduate, FaChessBoard } from 'react-icons/fa';
// import useScrollTo from '../../hooks/useScrollTo';
import { urlToSummerIntensiveRegisterForm } from '../../../../utils/globalConstants';
import './LearningProcessSection.scss';

const LearningProcessSection = () => {
  // const scrollTo = useScrollTo();
  
  const features = [
    {
      icon: <FaCalendarAlt className="icon" />,
      title: "С 7 июня по 31 августа",
      description: "Четкие сроки обучения помогают сохранять мотивацию и дисциплину"
    },
    {
      icon: <FaVideo className="icon" />,
      title: "8 занятий онлайн в месяц",
      description: "Регулярные занятия с тренером в прямом эфире с возможностью задавать вопросы"
    },
    {
      icon: <FaClock className="icon" />,
      title: "Уроки в записи – доступ в любое время",
      description: "Если пропустили занятие или хотите повторить материал - всегда доступны записи"
    },
    {
      icon: <FaChessBoard className="icon" />,
      title: "Занятия в удобном для вас темпе",
      description: "Нет стресса и спешки - осваивайте материал так, как комфортно вам"
    },
    {
      icon: <FaUserGraduate className="icon" />,
      title: "Персональный тьютор",
      description: "Тьютор будет проверять задания к каждому уроку, давать обратную связь, разбирать ошибки и помогать их исправить"
    }
  ];

  const handlerClickOnBtn = () => {
    window.open(urlToSummerIntensiveRegisterForm, '_blank', 'noopener,noreferrer');

    // Отправка статистики в Яндекс Метрику
    if (window.ym) {
      window.ym(96915259, "reachGoal",'lead_form')
    }
  }

  return (
    <section className="learning-process-section">
      <div className="container">
        <h2 className="section-title animate">Как будет проходить обучение</h2>
        
        <div className="timeline">
          {features.map((item, index) => (
            <div 
              className={`timeline-item animate`} 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }} 
              key={index}
            >
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cta-box animate" style={{ animationDelay: `${0.2 + features.length * 0.1}s` }}>
          <FaChessBoard className="cta-icon" />
          <p>Готовы начать свое шахматное путешествие?</p>
          {/* TODO: 2 этап - после реализации формы записи, переделать onClick={() => scrollTo('signup-form', 0)} */}
          <button className="cta-button" onClick={handlerClickOnBtn}>Записаться на курс</button>
        </div>
      </div>
    </section>
  );
};

export default LearningProcessSection;