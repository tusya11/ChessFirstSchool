import React from "react";
import { useMediaQuery } from "@mui/material";
import { cards_1, cards_2 } from "./consts";
import horseIcon from "./assets/horseIcon.svg";
import "./Benefit.scss";

const Benefit = () => {
  const isXS = useMediaQuery("(max-width:700px)");

  return (
    <div id="benefit" className="benefit__container">
      <div className="benefit__all-content">
        <div className="benefit__main-text">
          <h2>Наши преимущества</h2>
        </div>
        <div className="benefit__content">
          {!isXS && (
            <div className="benefit__card">
              {cards_1.map((v) => (
                <div key={v.id} className="benefit__content-card">
                  <div className="benefit__text">
                    <div className="benefit__block-with-icon">
                      <img src={horseIcon} alt="icon-horse" loading="lazy" />
                      <p>{v.title}</p>
                    </div>
                    <span>{v.description}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {isXS && (
            <div className="benefit__card">
              {[...cards_1, ...cards_2].map((v) => (
                <div key={v.id} className="benefit__content-card">
                  <div className="benefit__text">
                    <div className="benefit__block-with-icon">
                      <img src={horseIcon} alt="icon-horse" loading="lazy" />
                      <p>{v.title}</p>
                    </div>
                    <span>{v.description}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!isXS && (
            <div className="benefit__card">
              {cards_2.map((v) => (
                <div key={v.id} className="benefit__content-card">
                  <div className="benefit__text">
                    <div className="benefit__block-with-icon">
                      <img src={horseIcon} alt="icon-horse" loading="lazy" />
                      <p>{v.title}</p>
                    </div>
                    <span>{v.description}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Benefit;
