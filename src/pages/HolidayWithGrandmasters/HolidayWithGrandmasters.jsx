import { useMemo, useState } from "react";
import { Drawer } from "antd";
import { useMediaQuery } from "@mui/material";
import { common_prices } from "../NewPricePage/consts";

import NewPayment from "../../components/NewPayment/NewPayment";
import "./HolidaysWithGrandmasters.scss";

const CalendarIcon = () => (
  <span className="icon" aria-hidden="true">
    📅
  </span>
);
const RubleIcon = () => (
  <span className="icon" aria-hidden="true">
    ₽
  </span>
);

const HolidaysWithGrandmasters = () => {
  const isXS = useMediaQuery("(max-width: 700px)");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [tarif, setTarif] = useState({ id: 1 });

  const pricingOptions = useMemo(
    () => [
      {
        id: 1,
        title: "Одна запись",
        description: "Доступ к записи одной лекции",
        descriptionNumber: 1,
        price: "890",
        price_rub: 890,
      },
      {
        id: 2,
        title: "Одна лекция",
        description: "Live-участие + запись этой лекции",
        descriptionNumber: 2,
        price: "1 090",
        price_rub: 1090,
      },
      {
        id: 3,
        title: "Две записи",
        description: "Доступ к записям обеих лекций",
        descriptionNumber: 3,
        price: "1 590",
        price_rub: 1590,
      },
      {
        id: 4,
        title: "Две лекции",
        description: "Live-участие в обеих лекциях + записи обеих лекций",
        descriptionNumber: 4,
        price: "1 890",
        price_rub: 1890,
      },
      {
        id: 5,
        title: "Всё включено",
        description: "Обе live-лекции + обе записи + бонусная запись от МГ",
        descriptionNumber: 5,
        price: "2 490",
        price_rub: 2490,
        recommended: true,
      },
    ],
    [],
  );

  const lectures = useMemo(
    () => [
      {
        id: 1,
        date: "18 октября",
        title: "«Сколько слабостей у соперника?»",
        speaker: "Ярослав Призант",
        rank: "Международный мастер",
        rating: "Рейтинг ФИДЕ до 2553",
        bio: "Лауреат премии «Лучший детский тренер России» (2014, 2015). Тренер самого молодого гроссмейстера России Ивана Землянского, чемпионов мира и Европы Ильи Маковеева и Алины Бивол.",
        color: "#464bff",
      },
      {
        id: 2,
        date: "23 октября",
        title: "По итогам Суперфинала ЧР",
        speaker: "Дмитрий Кряквин",
        rank: "Гроссмейстер",
        rating: "Рейтинг 2600+",
        bio: "Серебряный призёр Кубка Петра Великого (2025), участник Высшей лиги чемпионата России.",
        color: "#0f766e",
      },
    ],
    [],
  );

  const handleChooseVariant = (option) => {
    setTarif({
      id: option.id,
      title: option.title,
      price: option.price_rub,
    });
    setIsOpenDrawer(true);
  };

  return (
    <>
      <div className="holidays-page-modern">
        <header className="hero-section">
          <div className="hero-content">
            <div className="title-container">
              <h1 className="main-title">
                Два вечера с{" "}
                <span className="title-highlight">шахматной элитой</span>
              </h1>
              <p className="hero-subtitle">
                Для тех, кто хочет не просто играть, а понимать игру на глубоком
                уровне.
              </p>
            </div>

            <div className="hero-stats">
              {lectures.map((lecture, index) => (
                <div className="hero-stat-group" key={lecture.id}>
                  {index > 0 && <div className="stat-divider" />}
                  <div className="stat-item">
                    <div className="stat-number">{lecture.date}</div>
                    <div className="stat-label">{lecture.speaker}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-background" aria-hidden="true">
            <div className="bg-element bg-1" />
            <div className="bg-element bg-2" />
            <div className="bg-element bg-3" />
          </div>
        </header>

        <section className="section-header">
          <h2>Две встречи — два глубоких разбора</h2>
          <p>Познакомьтесь с лекторами и выберите формат участия.</p>
        </section>

        <section className="grandmasters-grid">
          {lectures.map((lecture) => (
            <article
              className="gm-card"
              key={lecture.id}
              style={{
                "--card-color": lecture.color,
              }}
            >
              <div className="card-header-modern">
                <div className="gm-header-content">
                  <div className="gm-avatar-container">
                    <div
                      className="gm-avatar"
                      style={{ backgroundColor: lecture.color }}
                      aria-hidden="true"
                    >
                      <span className="avatar-initials">
                        {lecture.speaker
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                  <div className="gm-info">
                    <h3 className="gm-name">{lecture.speaker}</h3>
                    <p className="gm-title">{lecture.rank}</p>
                    <div className="gm-meta">
                      <div className="gm-meta-item lecture-count">
                        <CalendarIcon />
                        <span>{lecture.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body-modern">
                <h4 className="lecture-main-title">{lecture.title}</h4>
                <p className="gm-description-modern">{lecture.rating}</p>
                <div className="teaching-style">
                  <h4>Кто это</h4>
                  <p>{lecture.bio}</p>
                </div>
              </div>

              <div className="card-decoration-modern">
                <div
                  className="decoration-line"
                  style={{ backgroundColor: lecture.color }}
                />
              </div>
            </article>
          ))}
        </section>

        <section className="pricing-section">
          <div className="section-header">
            <h2>Выберите формат участия</h2>
            <p>
              Можно присоединиться к одной лекции или получить доступ ко всей
              программе.
            </p>
          </div>

          <div className="pricing-cards">
            {pricingOptions.map((option, index) => (
              <article
                key={option.id}
                className={`pricing-card ${option.recommended ? "recommended" : ""}`}
                style={{ "--delay": `${index * 60}ms` }}
              >
                {option.recommended && (
                  <div className="recommended-badge">
                    <span aria-hidden="true">★</span> Лучший выбор
                  </div>
                )}

                <div className="pricing-card-header">
                  <h3 className="pricing-title">{option.title}</h3>
                  <p className="pricing-description">{option.description}</p>
                </div>

                <div className="pricing-card-body">
                  <div className="current-price-block">
                    <span className="price-value">
                      {option.price_rub}
                      <RubleIcon />
                    </span>
                  </div>

                  <button
                    className="pricing-button"
                    onClick={() => handleChooseVariant(option)}
                  >
                    Выбрать
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="program-details">
          <div className="section-header">
            <h2>Два вечера для глубокого понимания шахмат</h2>
            <p>
              Выберите удобный формат: live-участие, записи или полный комплект.
            </p>
          </div>

          <div className="details-grid">
            <article className="detail-card">
              <div className="detail-icon">♟️</div>
              <h3>18 октября</h3>
              <p>Ярослав Призант: «Сколько слабостей у соперника?»</p>
            </article>
            <article className="detail-card">
              <div className="detail-icon">♟️</div>
              <h3>23 октября</h3>
              <p>Дмитрий Кряквин: лекция по итогам Суперфинала ЧР.</p>
            </article>
            <article className="detail-card">
              <div className="detail-icon">📹</div>
              <h3>Записи лекций</h3>
              <p>Выберите одну запись или получите доступ к обеим лекциям.</p>
            </article>
            <article className="detail-card">
              <div className="detail-icon">⭐</div>
              <h3>Всё включено</h3>
              <p>Обе live-лекции, обе записи и бонусная запись от МГ.</p>
            </article>
          </div>

          <div className="final-cta">
            <div className="cta-content">
              <h3>Погрузитесь в шахматы глубже</h3>
              <p>
                Выберите подходящий пакет участия и присоединяйтесь к лекциям.
              </p>
              <button
                className="cta-button-modern"
                onClick={() => handleChooseVariant(pricingOptions[4])}
              >
                Выбрать «Всё включено»
              </button>
            </div>
            <div className="cta-decoration">
              <span className="chess-icon">♞</span>
            </div>
          </div>
        </section>
      </div>

      <Drawer
        placement="right"
        width={isXS ? "100%" : "50%"}
        onClose={() => setIsOpenDrawer(false)}
        open={isOpenDrawer}
        styles={{
          header: { display: "flex", marginLeft: "auto", border: "none" },
        }}
        className="new-price-page__drawer"
      >
        <NewPayment payment={common_prices} tarif={tarif} />
      </Drawer>
    </>
  );
};

export default HolidaysWithGrandmasters;
