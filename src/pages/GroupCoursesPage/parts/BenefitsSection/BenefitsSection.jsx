import './BenefitsSection.scss';
import {
  FaChess,
  FaUsers,
  FaGraduationCap,
  FaVideo,
  FaTrophy,
  FaUserTie,
  FaChessQueen,
} from 'react-icons/fa';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaChess className="icon" />,
      title: 'Цена – 525₽ за 60 минут!',
      description: 'Это самая выгодная цена!',
    },
    {
      icon: <FaUsers className="icon" />,
      title: 'Занятия в Группе – Это Весело и Эффективно!',
      description:
        'Учись вместе с друзьями, находи новых друзей и развивай свои шахматные навыки в динамичной обстановке, которая добавляет азарта и развивает скорость мышления!',
    },
    {
      icon: <FaGraduationCap className="icon" />,
      title: 'Обучение с нуля!',
      description:
        'Наши опытные тренеры найдут подход к каждому, независимо от твоего текущего уровня.',
    },
  ];

  const bonuses = [
    {
      icon: <FaVideo className="icon" />,
      title: 'Видеозаписи Всех Занятий!',
      description:
        'Пересматривай видео в любое удобное время и закрепляй полученные знания. Если пропустил занятие - не беда!',
    },
    {
      icon: <FaTrophy className="icon" />,
      title: 'Закрытые Турниры Только для Учеников!',
      description:
        'Проверь свои силы и примени полученные знания на практике в настоящей борьбе, получи ценный опыт и выиграй крутые призы!',
    },
    {
      icon: <FaUserTie className="icon" />,
      title: 'Личный Тьютор для Каждого!',
      description:
        'Получай индивидуальные консультации и поддержку от нашего опытного шахматиста. Разбери свои партии и получи персональные рекомендации.',
    },
    {
      icon: <FaChessQueen className="icon" />,
      title: 'Сеанс Одновременной Игры с Мастером!',
      description:
        'Брось вызов самому себе и попробуй сыграть против опытного шахматиста одновременно с другими участниками!',
    },
  ];

  return (
    <section className="benefits-section">
      <div className="container">
        <h2 className="section-title animate">Почему стоит выбрать нас?</h2>

        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div
              className="benefit-card animate"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              key={index}
            >
              <div className="icon-container">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bonuses-section">
          <h3 className="bonus-title animate">БОНУСЫ:</h3>

          <div className="bonuses-grid">
            {bonuses.map((item, index) => (
              <div
                className="bonus-card animate"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                key={index}
              >
                <div className="icon-container">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
