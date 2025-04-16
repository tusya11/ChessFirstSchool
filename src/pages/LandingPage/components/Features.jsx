import React from "react";

import {
  FaBrain,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaTrophy,
  FaGlobeAmericas,
  FaChessKing,
} from "react-icons/fa";

const featuresData = [
  {
    icon: <FaBrain />,
    title: "Развитие интеллекта!",
    description:
      "Пока другие дети тупеют от мультиков, ваш ребенок прокачивает логику, память и концентрацию. Шахматы — это как кроссфит для серого вещества.",
    color: "purple",
  },
  {
    icon: <FaLaptopCode />,
    title: "Полезное время за компьютером",
    description:
      "Давайте честно: вы все равно не оторвете ребенка от экрана. Так пусть хотя бы делает что-то, от чего не тупеет, а становится умнее.",
    color: "yellow",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Тренеры, которые не зануды",
    description:
      "Наши преподы — это не унылые дядьки в свитерах. Это молодые шахматисты, которые умеют объяснить сложные вещи простым языком. Без терминологии, от которой хочется сбежать.",
    color: "green",
  },
  {
    icon: <FaTrophy />,
    title: "Турниры с реальными призами",
    description:
      "Еженедельные турниры с призами. И нет, это не тупые дипломы. Это реальные бесплатные уроки и скидки. Победил — получил. Просто и честно.",
    color: "pink",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Друзья по всему миру",
    description:
      "Ваш ребенок будет общаться с умными детьми из разных стран. Это не только шахматы, но и язык, и коммуникация, и понимание, что мир больше.",
    color: "purple",
  },
  {
    icon: <FaChessKing />,
    title: "Мастер-классы от гроссмейстеров",
    description:
      "Это как если бы ваш ребенок учился футболу у Месси. Наши гроссмейстеры — это топы в мире шахмат, и они будут делиться секретами.",
    color: "yellow",
  },
];

const Features = () => {
  return (
    <section className="features-section section" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Почему родители выбирают CoolChess, а не тупо дают ребенку планшет?
          </h2>
        </div>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className={`feature-icon feature-icon--${feature.color}`}>
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
