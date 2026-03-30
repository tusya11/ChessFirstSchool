import { useState, useEffect, useMemo } from "react";
import { Drawer } from "antd";
import { useMediaQuery } from "@mui/material";
import { holiday_prices } from "../NewPricePage/consts";
import NewPayment from "../../components/NewPayment/NewPayment";
import "./HolidaysWithGrandmasters.scss";

// Иконки
const ChessIcon = () => <span className="chess-icon">♞</span>;
const TrophyIcon = () => <span className="icon">🏆</span>;
const CalendarIcon = () => <span className="icon">📅</span>;
const RubleIcon = () => <span className="icon">₽</span>;

const HolidaysWithGrandmasters = () => {
  const isXS = useMediaQuery("(max-width:700px)");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [imageError, setImageError] = useState({ boris: false });
  const [tarif, setTarif] = useState({ id: 1 });

  const pricingOptions = useMemo(
    () => [
      {
        id: 1,
        title: "Одна лекция",
        description: "Живой мастер-класс с возможностью задать вопросы",
        originalPrice: 1000,
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
    setImageError((prev) => ({ ...prev, boris: true }));
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
      name: "Борис Савченко",
      title: "Международный гроссмейстер",
      flag: "⭐️",
      rating: 2735,
      age: 0,
      description:
        "Международный гроссмейстер с максимальным рейтингом 2735, трехкратный чемпион Москвы по классическим шахматам. Чемпион России 2010 года в составе ШСМ-64. Победитель международного турнира «Russian Chess Crown» (2026) и Мемориала Алёхина (2019, Воронеж).",
      teachingStyle:
        "Глубокий анализ эндшпильных позиций, системный подход к завершающей стадии игры, методики принятия решений в цейтноте",
      achievements: [
        "Максимальный рейтинг — 2735",
        "Трехкратный чемпион Москвы по классическим шахматам",
        "Чемпион России 2010 года в составе ШСМ-64",
        "Победитель международного турнира «Russian Chess Crown» - 2026г.",
        "Победитель Мемориала Алёхина — 2019, г. Воронеж",
      ],
      students: [
        "Воспитанники ведущих шахматных школ Москвы",
        "Чемпионы всероссийских и международных турниров",
        "Мастера спорта России",
      ],
      scheduleCount: "1 лекция",
      schedule: [
        {
          date: "18 апреля",
          time: "13:00 (мск)",
          title: "Эндшпиль: как избежать обидных поражений",
          topics: [
            "Почему эндшпиль — место самых обидных поражений на 4-5 часу игры",
            "Как не терять концентрацию в решающей стадии партии",
            "Типичные ошибки в простых и сложных окончаниях",
            "Методики расчета вариантов в цейтноте",
            "Практические упражнения для отработки навыков эндшпиля",
          ],
        },
      ],
      lessonPrice: 1500,
      color: "#1E3A8A",
      photo:
        "https://thumb.tildacdn.com/tild6561-3230-4366-b235-383033343536/-/cover/480x480/center/center/-/format/webp/noroot.png",
      accentColor: "#2563EB",
      tags: ["Эндшпиль", "Техника", "Цейтнот"],
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
                Эксклюзивный мастер-класс от трехкратного чемпиона Москвы и
                победителя «Russian Chess Crown» – Бориса Савченко!
              </p>
              <p className="hero-subtitle-secondary">
                Борис поделится методиками, которые помогут вам уверенно
                чувствовать себя в решающий момент.
              </p>
              {/* Эндшпиль — заключительная стадия игры и место, где совершаются
                самые обидные поражения. Огорчения, слезы, потерянные призовые —
                это ждет вас, если не улучшить навыки игры в конце партии.  */}
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">18.04</div>
                <div className="stat-label">(суббота)</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">13:00</div>
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

        {/* Секция с ценами */}
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

        {/* Для кого эта лекция */}
        <div className="target-audience-section">
          <div className="audience-header">
            <h2>🎯 ЭТА ЛЕКЦИЯ – ДЛЯ ВАС, ЕСЛИ ВЫ:</h2>
          </div>
          <div className="audience-grid">
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>
                Теряете выигранные позиции в эндшпиле на 4-5 часу игры
              </span>
            </div>
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>Допускаете обидные ошибки в простых окончаниях</span>
            </div>
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>Хотите научиться уверенно играть в цейтноте</span>
            </div>
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>Стремитесь системно улучшить технику эндшпиля</span>
            </div>
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs-header">
            <h2>Познакомьтесь с гроссмейстером</h2>
            <p>
              Борис Савченко – международный гроссмейстер с рейтингом 2735,
              победитель крупнейших международных турниров
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
                    {!imageError.boris ? (
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
                    <div className="meta-item lecture-count">
                      <CalendarIcon />
                      <span>
                        Лекций: <strong>{grandmaster.schedule.length}</strong>
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
            <p>Практический мастер-класс от гроссмейстера с рейтингом 2735</p>
          </div>

          <div className="details-grid">
            <div className="detail-card">
              <div className="detail-icon">🎯</div>
              <h3>Секреты эндшпиля</h3>
              <p>
                Уникальные методики игры в заключительной стадии от
                гроссмейстера мирового уровня
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">📅</div>
              <h3>Удобное время</h3>
              <p>
                Лекция проходит <b>18 апреля</b> в 13:00 по московскому времени
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🏆</div>
              <h3>Практическая польза</h3>
              <p>Готовые алгоритмы принятия решений в эндшпиле и цейтноте</p>
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
