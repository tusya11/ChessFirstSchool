import { useState, useEffect, useMemo, useCallback } from "react";
import { Drawer } from "antd";
import { useMediaQuery } from "@mui/material";
import NewPayment from "../../components/NewPayment/NewPayment";
import "./SummerTournamentSeries.scss";

const ChessKingIcon = () => (
  <span className="summer-tournament__icon summer-tournament__icon--chess-king">
    ♔
  </span>
);
const TrophyIcon = () => (
  <span className="summer-tournament__icon summer-tournament__icon--trophy">
    🏆
  </span>
);
const CalendarIcon = () => (
  <span className="summer-tournament__icon summer-tournament__icon--calendar">
    📅
  </span>
);
const ClockIcon = () => (
  <span className="summer-tournament__icon summer-tournament__icon--clock">
    ⏱
  </span>
);
const PrizeIcon = () => (
  <span className="summer-tournament__icon summer-tournament__icon--prize">
    💰
  </span>
);
const CheckmarkIcon = () => (
  <span className="summer-tournament__icon summer-tournament__icon--checkmark">
    ✅
  </span>
);
const InfoIcon = () => (
  <span className="summer-tournament__icon summer-tournament__icon--info">
    ℹ️
  </span>
);

const SummerTournamentSeries = () => {
  const isXS = useMediaQuery("(max-width:700px)");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [tarif, setTarif] = useState({ id: 1 });

  // Функция для получения текущей даты и времени в московском часовом поясе
  const getCurrentDate = () => {
    const now = new Date();
    const moscowTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Europe/Moscow" }),
    );
    return moscowTime;
  };

  // Функция для создания даты турнира
  const createTournamentDate = (
    day,
    month,
    year = 2026,
    hour = 11,
    minute = 0,
  ) => {
    const monthMap = {
      июля: 6,
      августа: 7,
    };
    const monthIndex = monthMap[month];
    return new Date(year, monthIndex, parseInt(day), hour, minute);
  };

  // Функция для определения статуса турнира
  const getTournamentStatus = useCallback((tournamentDate) => {
    const now = getCurrentDate();

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tournamentDay = new Date(
      tournamentDate.getFullYear(),
      tournamentDate.getMonth(),
      tournamentDate.getDate(),
    );

    if (tournamentDay < today) {
      return "past";
    }

    if (tournamentDay.getTime() === today.getTime()) {
      const tournamentEndTime = new Date(tournamentDate);
      tournamentEndTime.setHours(tournamentEndTime.getHours() + 3);

      if (now > tournamentEndTime) {
        return "past";
      } else if (now >= tournamentDate) {
        return "ongoing";
      } else {
        return "upcoming";
      }
    }

    return "upcoming";
  }, []);

  // Базовые данные турниров
  const tournamentsData = useMemo(
    () => [
      { id: 1, date: "5 июля", time: "11:00", day: "вс" },
      { id: 2, date: "12 июля", time: "14:00", day: "вс" },
      { id: 3, date: "19 июля", time: "11:00", day: "вс" },
      { id: 4, date: "26 июля", time: "11:00", day: "вс" },
      { id: 5, date: "2 августа", time: "11:00", day: "вс" },
      { id: 6, date: "9 августа", time: "11:00", day: "вс" },
      { id: 7, date: "16 августа", time: "11:00", day: "вс" },
      { id: 8, date: "23 августа", time: "11:00", day: "вс" },
      { id: 9, date: "30 августа", time: "11:00", day: "вс" },
    ],
    [],
  );

  // Расширяем данные турниров с динамическим статусом
  const tournaments = useMemo(() => {
    const parseDate = (dateStr) => {
      const parts = dateStr.split(" ");
      return { day: parseInt(parts[0]), month: parts[1] };
    };

    return tournamentsData.map((tournament) => {
      const parsed = parseDate(tournament.date);
      const [hour, minute] = tournament.time.split(":").map(Number);

      const tournamentDate = createTournamentDate(
        parsed.day,
        parsed.month,
        2026,
        hour,
        minute,
      );

      const status = getTournamentStatus(tournamentDate);

      return {
        ...tournament,
        status,
        tournamentDate,
        isPast: status === "past",
        isOngoing: status === "ongoing",
        isUpcoming: status === "upcoming",
        isToday:
          status === "ongoing" ||
          (status === "upcoming" &&
            new Date(
              tournamentDate.getFullYear(),
              tournamentDate.getMonth(),
              tournamentDate.getDate(),
            ).getTime() ===
              new Date(
                getCurrentDate().getFullYear(),
                getCurrentDate().getMonth(),
                getCurrentDate().getDate(),
              ).getTime()),
      };
    });
  }, [tournamentsData, getTournamentStatus]);

  // Проверяем, все ли турниры прошли
  const allTournamentsPassed = useMemo(() => {
    return tournaments.every((t) => t.isPast);
  }, [tournaments]);

  // Находим ближайший предстоящий турнир
  const nextTournament = useMemo(() => {
    return tournaments.find(
      (t) => t.status === "upcoming" || t.status === "ongoing",
    );
  }, [tournaments]);

  // Считаем количество прошедших и оставшихся турниров
  const tournamentStats = useMemo(() => {
    const past = tournaments.filter((t) => t.isPast).length;
    const upcoming = tournaments.filter((t) => t.isUpcoming).length;
    const ongoing = tournaments.filter((t) => t.isOngoing).length;
    return { past, upcoming, ongoing, total: tournaments.length };
  }, [tournaments]);

  const pricingOptions = useMemo(
    () => [
      {
        id: 1,
        title: "Один турнир",
        description: "1 турнир",
        secondaryDescription: "Участие в любом турнире серии на выбор",
        descriptionNumber: 1,
        price: "500",
        price_rub: 500,
        label: "Разовый",
      },
      {
        id: 2,
        title: "4 турнира",
        description: "4 турнира",
        secondaryDescription: "Пакет из 4 турниров в любой комбинации",
        descriptionNumber: 4,
        price: "1200",
        price_rub: 1200,
        label: "4 турнира",
      },
      {
        id: 3,
        title: "Вся серия",
        description: "9 турниров",
        secondaryDescription: "Все 9 турниров с максимальной экономией",
        descriptionNumber: 9,
        price: "1900",
        price_rub: 1900,
        label: "Максимум",
        recommended: true,
      },
    ],
    [],
  );

  const paymentOptions = useMemo(
    () => ({ id: 1, itemPrices: pricingOptions }),
    [pricingOptions],
  );

  const prizePools = useMemo(
    () => ({
      leagueA: [
        { place: "1 место", amount: "8 000 ₽" },
        { place: "2 место", amount: "5 500 ₽" },
        { place: "3 место", amount: "3 500 ₽" },
        { place: "4 место", amount: "2 000 ₽" },
        { place: "5–10 места", amount: "1 500 ₽" },
        { place: "🎲 2 случайных приза", amount: "1 500 ₽" },
      ],
      leagueB: [
        { place: "1 место", amount: "4 000 ₽" },
        { place: "2 место", amount: "2 500 ₽" },
        { place: "3 место", amount: "2 000 ₽" },
        { place: "4–10 места", amount: "1 500 ₽" },
      ],
    }),
    [],
  );

  const handleChooseVariant = (option) => {
    setIsOpenDrawer(true);
    setTarif({
      id: option.id,
      title: option.title,
      price: option.price,
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <div className="summer-tournament">
        {/* Hero секция */}
        <header className="summer-tournament__hero">
          <div className="summer-tournament__hero-content">
            <div className="summer-tournament__hero-title-wrapper">
              <div className="summer-tournament__hero-badge">
                <ChessKingIcon />
                <span>Лето 2026</span>
              </div>
              <h1 className="summer-tournament__hero-title">
                Большая шахматная
                <span className="summer-tournament__hero-title-highlight">
                  {" "}
                  серия
                </span>
              </h1>
              <p className="summer-tournament__hero-subtitle">
                ♟️ ЛЕТО В COOLCHESS — 9 турниров в двух лигах!
              </p>
              <p className="summer-tournament__hero-subtitle-secondary">
                С 5 июля по 30 августа 2026 года. Призовой фонд —{" "}
                <strong>50 000 ₽</strong>!
              </p>
            </div>

            <div className="summer-tournament__hero-stats">
              <div className="summer-tournament__hero-stat">
                <div className="summer-tournament__hero-stat-number">9</div>
                <div className="summer-tournament__hero-stat-label">
                  турниров
                </div>
              </div>
              <div className="summer-tournament__hero-stat-divider" />
              <div className="summer-tournament__hero-stat">
                <div className="summer-tournament__hero-stat-number">2</div>
                <div className="summer-tournament__hero-stat-label">лиги</div>
              </div>
              <div className="summer-tournament__hero-stat-divider" />
              <div className="summer-tournament__hero-stat">
                <div className="summer-tournament__hero-stat-number">
                  50 000
                </div>
                <div className="summer-tournament__hero-stat-label">
                  ₽ призовой фонд
                </div>
              </div>
            </div>

            <div className="summer-tournament__hero-cta">
              <button
                className="summer-tournament__button summer-tournament__button--primary"
                onClick={() => setIsOpenDrawer(true)}
              >
                Участвовать
              </button>
            </div>
          </div>

          <div className="summer-tournament__hero-background">
            <div className="summer-tournament__hero-bg-element summer-tournament__hero-bg-element--1" />
            <div className="summer-tournament__hero-bg-element summer-tournament__hero-bg-element--2" />
            <div className="summer-tournament__hero-bg-element summer-tournament__hero-bg-element--3" />
          </div>
        </header>

        {/* Информация о лигах */}
        <section className="summer-tournament__leagues">
          <div className="summer-tournament__section-header">
            <h2 className="summer-tournament__section-title">
              Две лиги для любого уровня
            </h2>
            <p className="summer-tournament__section-subtitle">
              Выберите свою лигу и сражайтесь за призы
            </p>
          </div>

          <div className="summer-tournament__leagues-grid">
            <div className="summer-tournament__league-card summer-tournament__league-card--a">
              <div className="summer-tournament__league-header">
                <span className="summer-tournament__league-icon">♚</span>
                <h3 className="summer-tournament__league-name">Лига А</h3>
              </div>
              <p className="summer-tournament__league-description">
                Для опытных игроков
              </p>
              <div className="summer-tournament__league-requirements">
                <span className="summer-tournament__league-requirement-badge">
                  Рейтинг от 1400 на Lichess
                </span>
              </div>
              <div className="summer-tournament__league-prize">
                <PrizeIcon />
                <span>Призовой фонд: 31 000 ₽</span>
              </div>
              <ul className="summer-tournament__league-features">
                {prizePools.leagueA.map((item, idx) => (
                  <li
                    key={idx}
                    className="summer-tournament__league-feature-item"
                  >
                    <span className="summer-tournament__league-feature-place">
                      {item.place}
                    </span>
                    <span className="summer-tournament__league-feature-amount">
                      {item.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="summer-tournament__league-card summer-tournament__league-card--b">
              <div className="summer-tournament__league-header">
                <span className="summer-tournament__league-icon">♛</span>
                <h3 className="summer-tournament__league-name">Лига Б</h3>
              </div>
              <p className="summer-tournament__league-description">
                Для всех желающих
              </p>
              <div className="summer-tournament__league-requirements">
                <span className="summer-tournament__league-requirement-badge">
                  Без ограничений по рейтингу
                </span>
              </div>
              <div className="summer-tournament__league-prize">
                <PrizeIcon />
                <span>Призовой фонд: 19 000 ₽</span>
              </div>
              <ul className="summer-tournament__league-features">
                {prizePools.leagueB.map((item, idx) => (
                  <li
                    key={idx}
                    className="summer-tournament__league-feature-item"
                  >
                    <span className="summer-tournament__league-feature-place">
                      {item.place}
                    </span>
                    <span className="summer-tournament__league-feature-amount">
                      {item.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Расписание */}
        <section className="summer-tournament__schedule" id="schedule">
          <div className="summer-tournament__section-header">
            <h2 className="summer-tournament__section-title">
              <CalendarIcon /> Расписание турниров
            </h2>
            <p className="summer-tournament__section-subtitle">
              Все турниры проходят в воскресенье (время московское)
            </p>

            {/* Статистика турниров */}
            <div className="summer-tournament__schedule-stats">
              <span className="summer-tournament__schedule-stat">
                <span className="summer-tournament__schedule-stat-number">
                  {tournamentStats.past}
                </span>
                <span className="summer-tournament__schedule-stat-label">
                  проведено
                </span>
              </span>
              {!allTournamentsPassed && tournamentStats.ongoing > 0 && (
                <>
                  <span className="summer-tournament__schedule-stat-divider" />
                  <span className="summer-tournament__schedule-stat summer-tournament__schedule-stat--ongoing">
                    <span className="summer-tournament__schedule-stat-number">
                      {tournamentStats.ongoing}
                    </span>
                    <span className="summer-tournament__schedule-stat-label">
                      идет сейчас
                    </span>
                  </span>
                </>
              )}
              {!allTournamentsPassed && tournamentStats.upcoming > 0 && (
                <>
                  <span className="summer-tournament__schedule-stat-divider" />
                  <span className="summer-tournament__schedule-stat summer-tournament__schedule-stat--upcoming">
                    <span className="summer-tournament__schedule-stat-number">
                      {tournamentStats.upcoming}
                    </span>
                    <span className="summer-tournament__schedule-stat-label">
                      осталось
                    </span>
                  </span>
                </>
              )}
              <span className="summer-tournament__schedule-stat-divider" />
              <span className="summer-tournament__schedule-stat">
                <span className="summer-tournament__schedule-stat-number">
                  {tournamentStats.total}
                </span>
                <span className="summer-tournament__schedule-stat-label">
                  всего
                </span>
              </span>
            </div>

            <div className="summer-tournament__schedule-legend">
              <span className="summer-tournament__schedule-legend-item">
                <span className="summer-tournament__schedule-legend-dot summer-tournament__schedule-legend-dot--past"></span>
                Прошедшие
              </span>
              <span className="summer-tournament__schedule-legend-item">
                <span className="summer-tournament__schedule-legend-dot summer-tournament__schedule-legend-dot--ongoing"></span>
                Идет сейчас
              </span>
              <span className="summer-tournament__schedule-legend-item">
                <span className="summer-tournament__schedule-legend-dot summer-tournament__schedule-legend-dot--upcoming"></span>
                Предстоят
              </span>
            </div>

            {/* Информация о ближайшем турнире или о завершении серии */}
            {allTournamentsPassed ? (
              <div className="summer-tournament__schedule-completed">
                <span className="summer-tournament__schedule-completed-icon">
                  🏁
                </span>
                <p className="summer-tournament__schedule-completed-text">
                  <strong>Серия турниров завершена!</strong>
                  <br />
                  Спасибо всем участникам! Следите за новостями в нашем
                  <a
                    href="https://t.me/Coolchess_online"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram-канале
                  </a>
                </p>
              </div>
            ) : (
              nextTournament && (
                <p className="summer-tournament__schedule-next-info">
                  ⏰ Ближайший турнир: <strong>{nextTournament.date}</strong> в{" "}
                  {nextTournament.time}
                  {nextTournament.isToday && (
                    <span className="summer-tournament__schedule-today-badge">
                      {" "}
                      СЕГОДНЯ!
                    </span>
                  )}
                </p>
              )
            )}
          </div>

          <div className="summer-tournament__schedule-grid">
            {tournaments.map((tournament) => (
              <div
                key={tournament.id}
                className={`summer-tournament__schedule-card ${
                  tournament.isPast
                    ? "summer-tournament__schedule-card--past"
                    : tournament.isOngoing
                      ? "summer-tournament__schedule-card--ongoing"
                      : "summer-tournament__schedule-card--upcoming"
                }`}
              >
                <div className="summer-tournament__schedule-status">
                  {tournament.isPast && (
                    <span className="summer-tournament__schedule-status-badge summer-tournament__schedule-status-badge--past">
                      ✓ Состоялся
                    </span>
                  )}
                  {tournament.isOngoing && (
                    <span className="summer-tournament__schedule-status-badge summer-tournament__schedule-status-badge--ongoing">
                      🔴 Идет сейчас!
                    </span>
                  )}
                  {tournament.isUpcoming && tournament.isToday && (
                    <span className="summer-tournament__schedule-status-badge summer-tournament__schedule-status-badge--today">
                      📅 Сегодня!
                    </span>
                  )}
                  {tournament.isUpcoming && !tournament.isToday && (
                    <span className="summer-tournament__schedule-status-badge summer-tournament__schedule-status-badge--upcoming">
                      ⏳ Скоро
                    </span>
                  )}
                </div>
                <div className="summer-tournament__schedule-number">
                  Турнир #{tournament.id}
                </div>
                <div className="summer-tournament__schedule-date">
                  {tournament.date}
                </div>
                <div className="summer-tournament__schedule-time">
                  {tournament.time}
                </div>
                <div className="summer-tournament__schedule-day">
                  {tournament.day}
                </div>
                {!tournament.isPast &&
                  !allTournamentsPassed &&
                  tournament === nextTournament && (
                    <div className="summer-tournament__schedule-next">
                      ⭐ Следующий турнир
                    </div>
                  )}
                {allTournamentsPassed && (
                  <div className="summer-tournament__schedule-completed-badge">
                    ✅ Завершен
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Формат */}
        <section className="summer-tournament__format">
          <div className="summer-tournament__section-header">
            <h2 className="summer-tournament__section-title">
              <ClockIcon /> Формат турниров
            </h2>
            <p className="summer-tournament__section-subtitle">
              7 туров по швейцарской системе на платформе Lichess
            </p>
          </div>

          <div className="summer-tournament__format-grid">
            <div className="summer-tournament__format-card">
              <div className="summer-tournament__format-icon">♟</div>
              <h3 className="summer-tournament__format-card-title">
                Швейцарская система
              </h3>
              <p className="summer-tournament__format-card-description">
                7 туров в каждом турнире
              </p>
            </div>
            <div className="summer-tournament__format-card">
              <div className="summer-tournament__format-icon">⏱</div>
              <h3 className="summer-tournament__format-card-title">
                Контроль времени
              </h3>
              <p className="summer-tournament__format-card-description">
                5 минут + 3 секунды за ход
              </p>
            </div>
            <div className="summer-tournament__format-card">
              <div className="summer-tournament__format-icon">🌐</div>
              <h3 className="summer-tournament__format-card-title">
                Платформа
              </h3>
              <p className="summer-tournament__format-card-description">
                lichess.org
              </p>
            </div>
          </div>
        </section>

        {/* Условия участия */}
        <section className="summer-tournament__participation">
          <div className="summer-tournament__section-header">
            <h2 className="summer-tournament__section-title">
              Как участвовать
            </h2>
            <p className="summer-tournament__section-subtitle">
              Выполните 3 простых шага
            </p>
          </div>

          <div className="summer-tournament__steps">
            <div className="summer-tournament__step">
              <div className="summer-tournament__step-number">1</div>
              <div className="summer-tournament__step-content">
                <h3 className="summer-tournament__step-title">
                  Заполните форму
                </h3>
                <p className="summer-tournament__step-description">
                  Пройдите регистрацию по ссылке до 21:00 за сутки до турнира
                </p>
                <a
                  href="https://coolchess.s20.online/common/1/form/draw?id=2&baseColor=205EDC&borderRadius=8&css=%2F%2Fcdn.alfacrm.pro%2Flead-form%2Fform.css"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="summer-tournament__step-link"
                >
                  Перейти к форме →
                </a>
              </div>
            </div>

            <div className="summer-tournament__step">
              <div className="summer-tournament__step-number">2</div>
              <div className="summer-tournament__step-content">
                <h3 className="summer-tournament__step-title">
                  Вступите в клуб
                </h3>
                <p className="summer-tournament__step-description">
                  Подайте заявку в клуб на Lichess
                </p>
                <a
                  href="https://lichess.org/team/coolchessonline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="summer-tournament__step-link"
                >
                  Перейти в клуб →
                </a>
              </div>
            </div>

            <div className="summer-tournament__step">
              <div className="summer-tournament__step-number">3</div>
              <div className="summer-tournament__step-content">
                <h3 className="summer-tournament__step-title">Участвуйте</h3>
                <p className="summer-tournament__step-description">
                  Ссылка на турнир придёт на почту перед началом. Вступите по
                  ссылке и играйте!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Цены */}
        <section className="summer-tournament__pricing">
          <div className="summer-tournament__section-header">
            <h2 className="summer-tournament__section-title">
              Стоимость участия
            </h2>
            <div className="summer-tournament__section-subtitle">
              <strong className="summer-tournament__free-badge">
                Ученики CoolChess — бесплатно
              </strong>
              <br />
              <span className="summer-tournament__pricing-description">
                Остальные могут выбрать подходящий пакет
              </span>
            </div>
          </div>

          <div className="summer-tournament__pricing-grid">
            {pricingOptions.map((option) => (
              <div
                key={option.id}
                className={`summer-tournament__pricing-card ${option.recommended ? "summer-tournament__pricing-card--recommended" : ""}`}
              >
                {option.recommended && (
                  <div className="summer-tournament__pricing-card-badge summer-tournament__pricing-card-badge--recommended">
                    🔥 Самый выгодный
                  </div>
                )}
                <div className="summer-tournament__pricing-card-header">
                  <span className="summer-tournament__pricing-card-label">
                    {option.label}
                  </span>
                  <h3 className="summer-tournament__pricing-card-title">
                    {option.title}
                  </h3>
                  <p className="summer-tournament__pricing-card-description">
                    {option.secondaryDescription}
                  </p>
                </div>
                <div className="summer-tournament__pricing-card-price">
                  <span className="summer-tournament__pricing-card-amount">
                    {option.price} ₽
                  </span>
                </div>
                <button
                  className="summer-tournament__pricing-card-button"
                  onClick={() => handleChooseVariant(option)}
                >
                  Выбрать
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Важно */}
        <section className="summer-tournament__important">
          <div className="summer-tournament__important-content">
            <div className="summer-tournament__important-header">
              <InfoIcon />
              <h2 className="summer-tournament__important-title">
                Важно знать
              </h2>
            </div>
            <div className="summer-tournament__important-grid">
              <div className="summer-tournament__important-item">
                <CheckmarkIcon />
                <span>
                  Играем честно — без компьютеров и посторонней помощи
                </span>
              </div>
              <div className="summer-tournament__important-item">
                <CheckmarkIcon />
                <span>При подозрении на читерство — дисквалификация</span>
              </div>
              <div className="summer-tournament__important-item">
                <CheckmarkIcon />
                <span>Регистрация закрывается в 21:00 за сутки до турнира</span>
              </div>
              <div className="summer-tournament__important-item">
                <CheckmarkIcon />
                <span>
                  Участники со знаком «?» возле рейтинга не допускаются
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Призы за серию */}
        <section className="summer-tournament__series-prizes">
          <div className="summer-tournament__section-header">
            <h2 className="summer-tournament__section-title">
              <TrophyIcon /> Итоги серии
            </h2>
            <p className="summer-tournament__section-subtitle">
              Очки за места в каждом турнире суммируются
            </p>
          </div>

          <div className="summer-tournament__series-points">
            <div className="summer-tournament__points-grid">
              {[
                { place: "1 место", points: 10 },
                { place: "2 место", points: 9 },
                { place: "3 место", points: 8 },
                { place: "4 место", points: 7 },
                { place: "5 место", points: 6 },
                { place: "6 место", points: 5 },
                { place: "7 место", points: 4 },
                { place: "8 место", points: 3 },
                { place: "9 место", points: 2 },
                { place: "10 место", points: 1 },
              ].map((item, idx) => (
                <div key={idx} className="summer-tournament__points-item">
                  <span className="summer-tournament__points-place">
                    {item.place}
                  </span>
                  <span className="summer-tournament__points-value">
                    {item.points} очков
                  </span>
                </div>
              ))}
            </div>
            <p className="summer-tournament__points-note">
              * Победитель серии определяется по сумме очков без учёта 2 худших
              результатов
            </p>
          </div>

          <div className="summer-tournament__random-prize">
            <div className="summer-tournament__random-prize-content">
              <span className="summer-tournament__random-prize-icon">🎲</span>
              <p className="summer-tournament__random-prize-text">
                <strong>Случайные призы по 1 500 ₽</strong> — розыгрыш в{" "}
                <a
                  href="https://t.me/Coolchess_online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="summer-tournament__random-prize-link"
                >
                  Telegram-канале
                </a>{" "}
                среди участников, сыгравших ≥4 турниров
              </p>
            </div>
          </div>
        </section>

        {/* Заключительный CTA */}
        <section className="summer-tournament__final-cta">
          <div className="summer-tournament__final-cta-content">
            {allTournamentsPassed ? (
              <>
                <h2 className="summer-tournament__final-cta-title">
                  🏆 Летняя серия завершена!
                </h2>
                <p className="summer-tournament__final-cta-subtitle">
                  Благодарим всех участников за яркие игры!
                  <br />
                  Итоги серии и победители будут объявлены в
                  <a
                    href="https://t.me/Coolchess_online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="summer-tournament__final-cta-link"
                  >
                    Telegram-канале
                  </a>
                </p>
                <div className="summer-tournament__final-cta-buttons">
                  <a
                    href="https://t.me/Coolchess_online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="summer-tournament__button summer-tournament__button--primary"
                  >
                    Смотреть итоги
                  </a>
                </div>
              </>
            ) : (
              <>
                <h2 className="summer-tournament__final-cta-title">
                  🔥 Не упусти шанс стать лучшим в летней серии!
                </h2>
                <p className="summer-tournament__final-cta-subtitle">
                  Призовой фонд — 50 000 ₽. 9 турниров. Две лиги.
                </p>
                <div className="summer-tournament__final-cta-buttons">
                  <button
                    className="summer-tournament__button summer-tournament__button--primary"
                    onClick={() => setIsOpenDrawer(true)}
                  >
                    Участвовать
                  </button>
                  <a
                    href="https://lichess.org/team/coolchessonline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="summer-tournament__button summer-tournament__button--secondary"
                  >
                    Вступить в клуб
                  </a>
                </div>
              </>
            )}
          </div>
          <div className="summer-tournament__final-cta-decoration">
            <ChessKingIcon />
          </div>
        </section>
      </div>

      <Drawer
        placement="right"
        width={isXS ? "100%" : "50%"}
        onClose={() => setIsOpenDrawer(false)}
        open={isOpenDrawer}
        styles={{
          header: {
            display: "flex",
            marginLeft: "auto",
            border: "none",
          },
        }}
        className="summer-tournament-drawer"
      >
        <NewPayment payment={paymentOptions} tarif={tarif} />
      </Drawer>
    </>
  );
};

export default SummerTournamentSeries;
