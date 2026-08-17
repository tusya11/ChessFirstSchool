import { useState, useEffect, useMemo } from "react";
import { Drawer } from "antd";
import { useMediaQuery } from "@mui/material";
import { holiday_prices } from "../NewPricePage/consts";
import NewPayment from "../../components/NewPayment/NewPayment";
import "./HolidaysWithGrandmasters.scss";

const ChessIcon = () => <span className="chess-icon">♞</span>;
const TrophyIcon = () => <span className="icon">🏆</span>;
const CalendarIcon = () => <span className="icon">📅</span>;
const RubleIcon = () => <span className="icon">₽</span>;

const HolidaysWithGrandmasters = () => {
  const isXS = useMediaQuery("(max-width:700px)");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [imageError, setImageError] = useState({ dmitry: false });
  const [tarif, setTarif] = useState({ id: 1 });

  const pricingOptions = useMemo(
    () => [
      {
        id: 1,
        title: "Онлайн-лекция",
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
    setImageError((prev) => ({ ...prev, dmitry: true }));
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
      id: 2,
      name: "Дмитрий Кряквин",
      title: "Международный гроссмейстер",
      description:
        "Международный гроссмейстер, шахматный литератор и журналист. Чемпион Южного, Уральского и Северо-Кавказского федеральных округов. Участник 18-го личного чемпионата Европы, чемпионатов мира по рапиду и блицу. Занял третье место в номинации «Лучший детский тренер России».",
      teachingStyle:
        "Доступное объяснение сложных шахматных концепций, акцент на практические рекомендации по устранению типовых ошибок, развитие позиционного чутья и тактической зоркости.",
      achievements: [
        "Чемпион Южного федерального округа",
        "Чемпион Уральского федерального округа",
        "Чемпион Северо-Кавказского федерального округа",
        "Участник 18-го личного чемпионата Европы",
        "Участник чемпионатов мира по рапиду и блицу",
        "3-е место в номинации «Лучший детский тренер России»",
      ],
      students: [
        "Чемпионы и призеры детских турниров всероссийского уровня",
        "Мастера ФИДЕ и кандидаты в мастера спорта",
        "Ученики — победители первенств федеральных округов",
      ],
      scheduleCount: "60 минут",
      schedule: [
        {
          date: "23 августа",
          time: "14:00 (мск)",
          title: "Типовые ошибки в миттельшпиле",
          topics: [
            "Ошибки в позиционной оценке и их последствия",
            "Типичные тактические просмотры и как их избежать",
            "Неправильный выбор плана в пешечных структурах",
            "Ошибки при расчёте вариантов",
            "Практические рекомендации по устранению слабых мест",
            "Разбор примеров из партий гроссмейстеров и учеников",
          ],
        },
      ],
      color: "#1565C0",
      photo: null,
      accentColor: "#1E88E5",
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
                Мастер-класс с
                <span className="title-highlight">
                  {" "}
                  Международным Гроссмейстером
                </span>
              </h1>
              <p className="hero-subtitle">
                Мастер-класс от чемпиона Южного, Уральского и Северо-Кавказского
                федеральных округов – Дмитрия Кряквина!
              </p>
              <p className="hero-subtitle-secondary">
                Дмитрий разберет типовые ошибки в миттельшпиле и даст
                практические рекомендации по их устранению.
              </p>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">23.08</div>
                <div className="stat-label">(воскресенье)</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">14:00</div>
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
              <span>
                Часто допускаете ошибки в миттельшпиле и не понимаете их причины
              </span>
            </div>
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>Теряете инициативу из-за неправильного выбора плана</span>
            </div>
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>
                Хотите систематизировать знания и перестать делать типичные
                ошибки
              </span>
            </div>
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>
                Стремитесь повысить свой уровень игры и научиться анализировать
                ошибки
              </span>
            </div>
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs-header">
            <h2>Познакомьтесь с гроссмейстером</h2>
            <p>
              Дмитрий Кряквин – международный гроссмейстер, шахматный литератор
              и журналист, чемпион трёх федеральных округов и призёр в номинации
              «Лучший детский тренер России»
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
                    {!imageError.dmitry && grandmaster.photo ? (
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

        <div className="program-details">
          <div className="details-header">
            <h2>Детали программы</h2>
            <p>Мастер-класс от известного шахматного педагога</p>
          </div>

          <div className="details-grid">
            <div className="detail-card">
              <div className="detail-icon">♟️</div>
              <h3>Типовые ошибки в миттельшпиле</h3>
              <p>
                Изучите основные ошибки, которые допускают шахматисты в
                миттельшпиле, и узнайте, как их избегать
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">📅</div>
              <h3>Удобное время</h3>
              <p>
                Лекция проходит <b>23 августа</b> в 14:00 по московскому времени
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🏆</div>
              <h3>Практическая польза</h3>
              <p>
                Готовые алгоритмы для анализа своих партий и устранения
                системных ошибок в миттельшпиле
              </p>
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
