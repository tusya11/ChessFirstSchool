import React from "react";
import { bonuses } from "./consts";
import "./Bonuses.scss";

const Bonuses = () => {
  return (
    <div id="bonuses" className="bonuses__container">
      <div className="bonuses__main-text">
        <h2>Бонусы</h2>
      </div>
      <div className="bonuses__content">
        {bonuses.map((v) => (
          <div className="bonuses__card" key={v.id}>
            <div className="bonuses__content-card">
              <div className="bonuses__image-card">{v.image}</div>
              <div className="bonuses__text">
                <p>{v.title}</p>
                <span>{v.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bonuses;
