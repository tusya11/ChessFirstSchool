import { useState, useEffect, useMemo } from "react";
import { Drawer } from "antd";
import { useMediaQuery } from "@mui/material";
import { holiday_prices } from "../NewPricePage/consts";
import NewPayment from "../../components/NewPayment/NewPayment";
import yakovImage from "./images/yakov.jpg";
import "./HolidaysWithGrandmasters.scss";

const ChessIcon = () => <span className="chess-icon">♞</span>;
const TrophyIcon = () => <span className="icon">🏆</span>;
const CalendarIcon = () => <span className="icon">📅</span>;
const RubleIcon = () => <span className="icon">₽</span>;

const HolidaysWithGrandmasters = () => {
  const isXS = useMediaQuery("(max-width:700px)");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [imageError, setImageError] = useState({ yakov: false });
  const [tarif, setTarif] = useState({ id: 1 });

  const pricingOptions = useMemo(
    () => [
      {
        id: 1,
        title: "Одна лекция",
        description: "Живой мастер-класс с возможностью задать вопросы",
        originalPrice: 1200,
      },
      {
        id: 2,
        title: "Видеозапись",
        description: "Запись лекции в высоком качестве",
        originalPrice: 1000,
      },
    ],
    [],
  );

  const handleImageError = () => {
    setImageError((prev) => ({ ...prev, yakov: true }));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const grandmaster = useMemo(
    () => ({
      id: 1,
      name: "Яков Геллер",
      title: "Международный гроссмейстер",
      description:
        "Международный гроссмейстер, заслуженный тренер юношеской сборной России. Лауреат премии Правления РШФ «Лучший детский тренер России» (2010, 2019). Лауреат тренерской премии имени М. И. Дворецкого (2019) и премии FIDE имени Самуэля Решевского (2021). Победитель и призёр международных турниров в России, Германии, Франции, Чехии, Италии и Греции.",
      teachingStyle:
        "Системный подход к оценке позиций, глубокий анализ типовых структур, методики принятия решений в зависимости от соотношения фигур на доске",
      achievements: [
        "Тренер юношеской сборной России с 2009 года",
        "Лауреат премии «Лучший детский тренер России» (2010, 2019)",
        "Лауреат тренерской премии имени М. И. Дворецкого (2019)",
        "Лауреат тренерской премии FIDE имени Самуэля Решевского (2021)",
        "Участник Премьер-лиги командного чемпионата России и Кубка Европы в составе «Лады» (2004-2006)",
        "Участник чемпионатов мира по быстрым шахматам и блицу (2018-2019)",
      ],
      students: [
        "Международные гроссмейстеры и международные мастера",
        "Чемпионы Европы и мира среди юношей",
        "Призеры всероссийских и международных турниров",
      ],
      scheduleCount: "60 минут",
      schedule: [
        {
          date: "12 июля",
          time: "11:00 (мск)",
          title:
            "Закономерности игры в миттельшпиле в зависимости от соотношения фигур",
          topics: [
            "Типовые позиции при равном материале: стратегия и тактика",
            "Игра с лишней пешкой: как реализовать преимущество",
            "Позиции с разноцветными слонами: особенности розыгрыша",
            "Материальный перевес и его реализация в миттельшпиле",
            "Анализ типовых структур из практики гроссмейстеров",
            "Практические упражнения для закрепления материала",
          ],
        },
      ],
      color: "#2D5A27",
      photo: yakovImage,
      accentColor: "#4CAF50",
    }),
    [],
  );

  const handleChooseVariant = (option) => {
    setIsOpenDrawer(true);
    setTarif({
      id: option.id,
      title: option.title,
      price: option.originalPrice,
    });
  };

  return (
    <>
      <div className="holidays-page-modern">
        <header className="hero-section">
          <div className="hero-content">
            <div className="title-container">
              <h1 className="main-title">
                Мастер-класс с Международным
                <span className="title-highlight"> Гроссмейстером</span>
              </h1>
              <p className="hero-subtitle">
                Эксклюзивный мастер-класс от наставника юношеской сборной России
                – Якова Геллера!
              </p>
              <p className="hero-subtitle-secondary">
                Яков разберет ключевые закономерности игры в миттельшпиле в
                зависимости от соотношения фигур на доске.
                <br />
                Вы научитесь правильно оценивать позиции и выбирать верный план
                игры.
              </p>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">12.07</div>
                <div className="stat-label">(воскресенье)</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">11:00</div>
                <div className="stat-label">МСК</div>
              </div>
            </div>
          </div>

          <div className="hero-background">
            <div className="bg-element bg-1"></div>
            <div className="bg-element bg-2"></div>
            <div className="bg-element bg-3"></div>
          </div>
        </header>

        <div className="pricing-section">
          <div className="pricing-header">
            <h2>Стоимость участия</h2>
          </div>

          <div className="pricing-cards">
            {pricingOptions.map((option) => (
              <div
                key={option.id}
                className={`pricing-card ${option.id === 1 ? "recommended" : ""}`}
              >
                {option.id === 1 && (
                  <div className="recommended-badge">Рекомендуем</div>
                )}

                <div className="pricing-card-header">
                  <h3>{option.title}</h3>
                  {option.description && (
                    <p className="pricing-description">{option.description}</p>
                  )}
                </div>

                <div className="pricing-card-body">
                  <div className="price-comparison">
                    <div className="current-price-block">
                      <span className="price-value">
                        {option.originalPrice} <RubleIcon />
                      </span>
                    </div>
                  </div>

                  <button
                    className="pricing-button"
                    onClick={() => handleChooseVariant(option)}
                  >
                    {option.id === 2 ? "Приобрести запись" : "Записаться"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="target-audience-section">
          <div className="audience-header">
            <h2>🎯 ЭТА ЛЕКЦИЯ – ДЛЯ ВАС, ЕСЛИ ВЫ:</h2>
          </div>
          <div className="audience-grid">
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>Не знаете, как строить план в миттельшпиле</span>
            </div>
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>Теряетесь при оценке соотношения фигур на доске</span>
            </div>
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>Хотите научиться реализовывать материальный перевес</span>
            </div>
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>Стремитесь системно улучшить понимание миттельшпиля</span>
            </div>
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs-header">
            <h2>Познакомьтесь с гроссмейстером</h2>
            <p>
              Яков Геллер – международный гроссмейстер, лучший детский тренер
              России, наставник юношеской сборной
            </p>
          </div>
        </div>

        <div className="grandmasters-grid">
          <div
            className="gm-card active"
            style={{
              "--card-color": grandmaster.color,
              "--card-accent": grandmaster.accentColor,
            }}
          >
            <div className="card-header-modern">
              <div className="gm-header-content">
                <div className="gm-avatar-container">
                  <div className="gm-avatar">
                    {!imageError.yakov ? (
                      <img
                        src={grandmaster.photo}
                        alt={`${grandmaster.name} - ${grandmaster.title}`}
                        className="gm-photo"
                        onError={handleImageError}
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="gm-photo-fallback"
                        style={{ backgroundColor: grandmaster.color }}
                      >
                        <div className="avatar-initials">
                          {grandmaster.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="gm-info">
                  <h3 className="gm-name">{grandmaster.name}</h3>
                  <p className="gm-title">{grandmaster.title}</p>
                  <div className="gm-meta">
                    <div className="gm-meta-item lecture-count">
                      <CalendarIcon />
                      <span>
                        Лекций: <strong>{grandmaster.schedule.length}</strong>
                        {grandmaster.scheduleCount &&
                          ` (${grandmaster.scheduleCount})`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body-modern">
              <p className="gm-description-modern">{grandmaster.description}</p>

              <div className="teaching-style">
                <h4>Стиль преподавания</h4>
                <p>{grandmaster.teachingStyle}</p>
              </div>

              <div className="achievements-modern">
                <h4>
                  <TrophyIcon />
                  Основные достижения
                </h4>
                <ul>
                  {grandmaster.achievements.map((achievement, idx) => (
                    <li key={idx}>
                      <div className="achievement-marker"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="achievements-modern">
                <h4>
                  <TrophyIcon />
                  Выдающиеся ученики
                </h4>
                <ul>
                  {grandmaster.students.map((student, idx) => (
                    <li key={idx}>
                      <div className="achievement-marker"></div>
                      <span>{student}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="schedule-section">
                <h4>
                  <CalendarIcon />
                  Расписание лекции
                </h4>
                <div className="schedule-list">
                  {grandmaster.schedule.map((lecture, idx) => (
                    <div key={idx} className="lecture-item">
                      <div className="lecture-header">
                        <span className="lecture-date">{lecture.date}</span>
                        <span className="lecture-time">{lecture.time}</span>
                      </div>
                      <div className="lecture-title">{lecture.title}</div>
                      {lecture.topics && lecture.topics.length > 0 && (
                        <div className="lecture-topics">
                          <div className="topics-title">
                            На лекции вы узнаете:
                          </div>
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
                style={{ backgroundColor: grandmaster.color }}
              ></div>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="program-details">
          <div className="details-header">
            <h2>Детали программы</h2>
            <p>Практический мастер-класс от заслуженного тренера России</p>
          </div>

          <div className="details-grid">
            <div className="detail-card">
              <div className="detail-icon">♝</div>
              <h3>Закономерности миттельшпиля</h3>
              <p>
                Системный подход к оценке позиций в зависимости от соотношения
                фигур от гроссмейстера мирового уровня
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">📅</div>
              <h3>Удобное время</h3>
              <p>
                Лекция проходит <b>12 июля</b> в 11:00 по московскому времени
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🏆</div>
              <h3>Практическая польза</h3>
              <p>Готовые алгоритмы принятия решений в миттельшпиле</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">📹</div>
              <h3>Видеозапись</h3>
              <p>
                Возможность приобрести запись лекции, если не успеваете на
                онлайн
              </p>
            </div>
          </div>

          <div className="final-cta">
            <div className="cta-content">
              <h3>Количество мест ограничено</h3>
              <button
                className="cta-button-modern"
                onClick={() => setIsOpenDrawer(true)}
              >
                Записаться на мастер-класс
              </button>
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
