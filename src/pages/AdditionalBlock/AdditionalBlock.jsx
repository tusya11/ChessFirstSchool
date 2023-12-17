import React from "react";
import { items } from "./consts";
import "./AdditionalBlock.scss";

const AdditionalBlock = () => {
  return (
    <div className="additional-block__container">
      <div className="additional-block__text">
        <h2>Пробный урок</h2>
      </div>
      <div className="additional-block__secondary">
        <p>
          На пробном занятии вам помогут настроить техническое оборудование для
          обучения
        </p>
      </div>
      <div className="additional-block__content">
        <div className="additional-block__block">
          {items.map((v) => (
            <div className="additional-block__card" key={v.id}>
              <div className="additional-block__image">{v.icon}</div>
              <div className="additional-block__description">
                {v?.fields ? (
                  <div className="additional-block__links">
                    {v?.fields.map((item) => (
                      <div className="additional-block__link">
                        <span>
                          {item.title}{" "}
                          <a target="_blank" href={item.link} rel="noreferrer">
                            {item.type}
                          </a>
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <p>{v.title}</p>
                    <span>{v.description}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalBlock;
