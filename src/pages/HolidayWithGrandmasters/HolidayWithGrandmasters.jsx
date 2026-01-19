import { useState, useEffect, useMemo } from "react";
import { Drawer } from "antd";
import { useMediaQuery } from "@mui/material";
import { holiday_prices } from "../NewPricePage/consts";
import NewPayment from "../../components/NewPayment/NewPayment";
import arturPhoto from "./images/artur.jpg";
import elenaPhoto from "./images/elena.jpg";
import "./HolidaysWithGrandmasters.scss";

// Иконки
const ChessIcon = () => <span className="chess-icon">♞</span>;
const TrophyIcon = () => <span className="icon">🏆</span>;
const CalendarIcon = () => <span className="icon">📅</span>;
const RubleIcon = () => <span className="icon">₽</span>;

const HolidaysWithGrandmasters = () => {
  const isXS = useMediaQuery("(max-width:700px)");
  const [activeTab, setActiveTab] = useState(0);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [imageError, setImageError] = useState({ artur: false, elena: false });
  const [tarif, setTarif] = useState({ id: 1 });

  const pricingOptions = useMemo(
    () => [
      {
        id: 1,
        title: "1 лекция",
        originalPrice: 700,
      },
      {
        id: 2,
        title: "3 лекции",
        originalPrice: 1500,
      },
    ],
    []
  );

  const handleImageError = (gmId) => {
    if (gmId === 1) {
      setImageError((prev) => ({ ...prev, artur: true }));
    } else {
      setImageError((prev) => ({ ...prev, elena: true }));
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const grandmasters = useMemo(
    () => [
      {
        id: 1,
        name: "Елена Томилова",
        title: "Международный гроссмейстер",
        flag: "⭐️",
        rating: 2450,
        age: 38,
        description:
          "Призер командных чемпионатов страны по классике, блицу и рапиду в составе команд «Киммерия», «Дончанка» и «Боавишта». Победительница Международных турниров в Белграде (2017), Риеке (2018) и Алма-Ате (2019). В 2024 году выиграла женский зачет серии Гран-при Черного моря и завоевала главный приз - автомобиль 'Лада'. Сын Елены, Андрей Кряквин, в нынешнем году стал чемпионом Южного федерального округа по шахматам.",
        teachingStyle: "Акцент на тактическое видение и эндшпильную технику",
        achievements: [
          "Чемпионка Уральского федерального округа",
          "Бронзовый призер чемпионата России по блицу (2016)",
          "Финалистка Кубка России 2017 года",
          "Победительница серии Гран-при Черного моря 2024",
        ],
        scheduleCount: "1 лекция",
        schedule: [
          {
            date: "27 декабря",
            time: "12:00 (по мск)",
            title: "Ладейные окончания с лишней пешкой",
            topics: [
              "Технические позиции",
              "Типичные планы игры",
              "Ключевые идеи в ладейных окончаниях",
            ],
          },
        ],
        lessonPrice: 200,
        color: "#7C3AED",
        photo: elenaPhoto,
        accentColor: "#8B5CF6",
        tags: ["Тактика", "Эндшпиль", "Ладейные окончания"],
      },
      {
        id: 2,
        name: "Артур Габриелян",
        title: "Международный гроссмейстер",
        flag: "♟️",
        rating: 2594,
        age: 35,
        description:
          "Среди учеников Артура Габриеляна – неоднократные чемпионы и призеры страны среди юношей, игроки сборной России на детской Олимпиаде 2015 года, постоянные участники Высших лиг детских чемпионатов России.",
        teachingStyle: "Упор на стратегическое мышление и позиционную игру",
        achievements: [
          "Неоднократный чемпион Ставропольского края",
          "Финалист Кубка России 2012 года",
          "Максимальный рейтинг ФИДЕ 2594",
          "Подготовил чемпионов и призеров страны среди юношей",
        ],
        scheduleCount: "2 лекции",
        schedule: [
          {
            date: "28 декабря",
            time: "12:00 (по мск)",
            title: "Возможности короля",
            topics: [
              "Король атакует",
              "Король защищается",
              "Король помогает выиграть",
            ],
          },
          {
            date: "29 декабря",
            time: "16:00 (по мск)",
            title: "Невидимый ход",
            topics: [
              "Ходы, не видимые из-за недостатка знаний",
              "Ходы, не видимые из-за психологических причин",
            ],
          },
        ],
        lessonPrice: 250,
        color: "#2563EB",
        photo: arturPhoto,
        accentColor: "#3B82F6",
        tags: ["Стратегия", "Позиционная игра", "Работа с королем"],
      },
    ],
    []
  );

  const handleChooseVariant = (option) => {
    setIsOpenDrawer(true);
    setTarif({ id: option.id });
  };

  return (
    <>
      <div className="holidays-page-modern">
        <header className="hero-section">
          <div className="hero-content">
            <div className="title-container">
              <div className="title-decoration">
                <ChessIcon />
              </div>
              <h1 className="main-title">
                Каникулы с Международными
                <span className="title-highlight"> Гроссмейстерами</span>
              </h1>
              <p className="hero-subtitle">
                Уникальная программа обучения от лучших шахматистов. <br />
                Групповые лекции, разбор партий и практические занятия.
              </p>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Турнира</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Гроссмейстера</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Лекции</div>
              </div>
            </div>
          </div>

          <div className="hero-background">
            <div className="bg-element bg-1"></div>
            <div className="bg-element bg-2"></div>
            <div className="bg-element bg-3"></div>
          </div>
        </header>

        {/* Секция с ценами */}
        <div className="pricing-section">
          <div className="pricing-header">
            <h2>Стоимость участия</h2>
          </div>

          <div className="pricing-cards">
            {pricingOptions.map((option) => (
              <div
                key={option.id}
                className={`pricing-card ${option.recommended ? "recommended" : ""}`}
              >
                {option.recommended && (
                  <div className="recommended-badge">Популярный</div>
                )}

                <div className="pricing-card-header">
                  <h3>{option.title}</h3>
                </div>

                <div className="pricing-card-body">
                  <div className="price-comparison">
                    <div className="current-price-block">
                      <span className="price-value">
                        {option.originalPrice} <RubleIcon />
                      </span>
                      <div className="price-note">полная стоимость</div>
                    </div>
                  </div>

                  <button
                    className="pricing-button"
                    onClick={() => handleChooseVariant(option)}
                  >
                    Приобрести
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs-header">
            <h2>Познакомьтесь с гроссмейстерами</h2>
            <p>Узнайте больше о преподавателях и их программах</p>
          </div>
          <div className="tabs">
            {grandmasters.map((gm, index) => (
              <button
                key={gm.id}
                className={`tab ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
                style={{ "--tab-color": gm.color }}
              >
                <div className="tab-flag">{gm.flag}</div>
                <span>{gm.name}</span>
                <span className="tab-lecture-count">{gm.scheduleCount}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grandmasters-grid">
          {grandmasters.map((gm, index) => (
            <div
              key={gm.id}
              className={`gm-card ${activeTab === index ? "active" : ""}`}
              style={{
                "--card-color": gm.color,
                "--card-accent": gm.accentColor,
              }}
              onClick={() => setActiveTab(index)}
            >
              <div className="card-header-modern">
                <div className="gm-header-content">
                  <div className="gm-avatar-container">
                    <div className="gm-avatar">
                      {(gm.id === 1 && !imageError.artur) ||
                      (gm.id === 2 && !imageError.elena) ? (
                        <img
                          src={gm.photo}
                          alt={`${gm.name} - ${gm.title}`}
                          className="gm-photo"
                          onError={() => handleImageError(gm.id)}
                          loading="lazy"
                        />
                      ) : (
                        // Фолбэк если изображение не загрузилось
                        <div
                          className="gm-photo-fallback"
                          style={{ backgroundColor: gm.color }}
                        >
                          <div className="avatar-initials">
                            {gm.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="gm-info">
                    <h3 className="gm-name">{gm.name}</h3>
                    <p className="gm-title">{gm.title}</p>
                    <div className="gm-meta">
                      <div className="meta-item lecture-count">
                        <CalendarIcon />
                        <span>
                          Лекций: <strong>{gm.schedule.length}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body-modern">
                <p className="gm-description-modern">{gm.description}</p>

                <div className="teaching-style">
                  <h4>Стиль преподавания</h4>
                  <p>{gm.teachingStyle}</p>
                </div>

                <div className="achievements-modern">
                  <h4>
                    <TrophyIcon />
                    Основные достижения
                  </h4>
                  <ul>
                    {gm.achievements.map((achievement, idx) => (
                      <li key={idx}>
                        <div className="achievement-marker"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="schedule-section">
                  <h4>
                    <CalendarIcon />
                    Расписание лекций
                  </h4>
                  <div className="schedule-list">
                    {gm.schedule.map((lecture, idx) => (
                      <div key={idx} className="lecture-item">
                        <div className="lecture-header">
                          <span className="lecture-date">{lecture.date}</span>
                          <span className="lecture-time">{lecture.time}</span>
                        </div>
                        <div className="lecture-title">{lecture.title}</div>
                        {lecture.topics && lecture.topics.length > 0 && (
                          <div className="lecture-topics">
                            <div className="topics-title">Темы лекции:</div>
                            <ul>
                              {lecture.topics.map((topic, topicIdx) => (
                                <li key={topicIdx}>{topic}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card-decoration-modern">
                <div
                  className="decoration-line"
                  style={{ backgroundColor: gm.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="program-details">
          <div className="details-header">
            <h2>Детали программы</h2>
            <p>Новогодняя программа для шахматистов любого уровня</p>
          </div>

          <div className="details-grid">
            <div className="detail-card">
              <div className="detail-icon">🎯</div>
              <h3>Групповые лекции</h3>
              <p>
                3 лекции от гроссмейстеров: Артур — 2 лекции, Елена — 1 лекция
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">📅</div>
              <h3>Декабрьские каникулы</h3>
              <p>Лекции проходят 27, 28 и 29 декабря в удобное время</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🏆</div>
              <h3>Практическая польза</h3>
              <p>
                Каждая лекция посвящена конкретным темам с практическим
                применением
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">👥</div>
              <h3>Вопросы и ответы</h3>
              <p>
                Каждая лекция включает сессию вопросов и ответов с
                гроссмейстером
              </p>
            </div>
          </div>

          <div className="final-cta">
            <div className="cta-content">
              <h3>Количество мест ограничено</h3>
              {/* <p>Успейте записаться до 10 декабря и получите скидку 20%</p> */}
              {/* <button
                className="cta-button-modern"
                onClick={() => setIsOpenDrawer(true)}
              >
                Записаться на программу
              </button> */}
            </div>
            <div className="cta-decoration">
              <ChessIcon />
            </div>
          </div>
        </div>
      </div>
      <Drawer
        placement={"right"}
        width={isXS ? "100%" : "50%"}
        onClose={() => setIsOpenDrawer((prev) => !prev)}
        open={isOpenDrawer}
        styles={{
          header: {
            display: "flex",
            marginLeft: "auto",
            border: "none",
          },
        }}
        className="new-price-page__drawer"
      >
        <NewPayment payment={holiday_prices} tarif={tarif} />
      </Drawer>
    </>
  );
};

export default HolidaysWithGrandmasters;
