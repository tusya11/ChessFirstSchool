import { useState, useEffect, useMemo } from "react";
import { Drawer } from "antd";
import { useMediaQuery } from "@mui/material";
import { holiday_prices } from "../NewPricePage/consts";
import NewPayment from "../../components/NewPayment/NewPayment";
import elenaPhoto from "./images/elena.jpg";
import "./HolidaysWithGrandmasters.scss";

// Иконки
const ChessIcon = () => <span className="chess-icon">♞</span>;
const TrophyIcon = () => <span className="icon">🏆</span>;
const CalendarIcon = () => <span className="icon">📅</span>;
const RubleIcon = () => <span className="icon">₽</span>;

const HolidaysWithGrandmasters = () => {
  const isXS = useMediaQuery("(max-width:700px)");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [imageError, setImageError] = useState({ elena: false });
  const [tarif, setTarif] = useState({ id: 1 });

  const pricingOptions = useMemo(
    () => [
      {
        id: 1,
        title: "Одна лекция",
        description: "Любая лекция на выбор",
        originalPrice: 1000,
      },
      {
        id: 2,
        title: "Две лекции",
        description: "Полный курс из 2-х лекций",
        originalPrice: 1500,
        recommended: true,
      },
      {
        id: 3,
        title: "Видеозапись",
        description: "Запись двух лекций",
        originalPrice: 1000,
      },
    ],
    [],
  );

  const handleImageError = () => {
    setImageError((prev) => ({ ...prev, elena: true }));
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
      name: "Елена Томилова",
      title: "Международный гроссмейстер",
      flag: "⭐️",
      rating: 2450,
      age: 38,
      description:
        "Призер командных чемпионатов страны по классике, блицу и рапиду в составе команд «Киммерия», «Дончанка» и «Боавишта». Победительница Международных турниров в Белграде (2017), Риеке (2018) и Алма-Ате (2019). В 2024 году выиграла женский зачет серии Гран-при Черного моря и завоевала главный приз - автомобиль 'Лада'. Сын Елены, Андрей Кряквин, в нынешнем году стал чемпионом Южного федерального округа по шахматам.",
      teachingStyle: "Акцент на практические знания и подготовку к турнирам",
      achievements: [
        "Чемпионка Уральского федерального округа",
        "Бронзовый призер чемпионата России по блицу (2016)",
        "Финалистка Кубка России 2017 года",
        "Победительница серии Гран-при Черного моря 2024",
        "Мама чемпиона России до 15 лет Андрея Кряквина",
      ],
      scheduleCount: "2 лекции",
      schedule: [
        {
          date: "28 февраля",
          time: "11:00 (мск)",
          title: "Искусство Дебюта: Секреты Выбора и Построения Репертуара!",
          topics: [
            "Как выбрать дебют под свой стиль игры",
            "Принципы построения дебютного репертуара",
            "Типичные ошибки при разыгрывании дебюта",
            "Практические рекомендации от гроссмейстера",
          ],
        },
        {
          date: "1 марта",
          time: "11:00 (мск)",
          title: "Особенности Эндшпилей с Разноцветными Слонами",
          topics: [
            "Ключевые принципы игры в разноцветных слонах",
            "Атакующие возможности и защитные ресурсы",
            "Типичные позиции и планы игры",
            "Практические примеры из партий гроссмейстеров",
          ],
        },
      ],
      lessonPrice: 250,
      color: "#7C3AED",
      photo: elenaPhoto,
      accentColor: "#8B5CF6",
      tags: ["Дебют", "Эндшпиль", "Практика"],
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
                По горячим следам, для всех, кто жаждет побед и стремится к
                новым высотам в шахматах, мы проводим МАКСИМАЛЬНО ПОЛЕЗНЫЙ
                МАСТЕР-КЛАСС от ЖМГ Елены Томиловой – мамы юного чемпиона России
                до 15 лет Андрея Кряквина!
              </p>
              <p className="hero-subtitle-secondary">
                Елена Томилова поделится бесценным опытом и секретами, которые
                помогли ей вырастить чемпиона!
              </p>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">28.02</div>
                <div className="stat-label">(суббота)</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">11:00</div>
                <div className="stat-label">МСК</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">01.03</div>
                <div className="stat-label">(воскресенье)</div>
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
                    {option.id === 3 ? "Приобрести запись" : "Записаться"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Для кого эти лекции */}
        <div className="target-audience-section">
          <div className="audience-header">
            <h2>🎯 ЭТИ ЛЕКЦИИ – ДЛЯ ВАС, ЕСЛИ ВЫ:</h2>
          </div>
          <div className="audience-grid">
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>Хотите улучшить свой дебютный репертуар</span>
            </div>
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>Стремитесь играть сильнее, глубже и продуманнее</span>
            </div>
            <div className="audience-item">
              <div className="audience-marker"></div>
              <span>Мечтаете понимать шахматы на новом уровне</span>
            </div>
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs-header">
            <h2>Познакомьтесь с гроссмейстером</h2>
            <p>Елена Томилова – международный гроссмейстер и мама чемпиона</p>
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
                    {!imageError.elena ? (
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

              <div className="schedule-section">
                <h4>
                  <CalendarIcon />
                  Расписание лекций
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
                style={{ backgroundColor: grandmaster.color }}
              ></div>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="program-details">
          <div className="details-header">
            <h2>Детали программы</h2>
            <p>Практический мастер-класс для шахматистов любого уровня</p>
          </div>

          <div className="details-grid">
            <div className="detail-card">
              <div className="detail-icon">🎯</div>
              <h3>Две тематические лекции</h3>
              <p>
                Дебют и эндшпиль – ключевые стадии партии под руководством
                гроссмейстера
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">📅</div>
              <h3>Удобное время</h3>
              <p>
                Лекции проходят 28 февраля и 1 марта в 11:00 по московскому
                времени
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🏆</div>
              <h3>Практическая польза</h3>
              <p>Готовые схемы и рекомендации для улучшения вашей игры</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">📹</div>
              <h3>Видеозапись</h3>
              <p>
                Возможность приобрести запись лекций, если не успеваете на
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
