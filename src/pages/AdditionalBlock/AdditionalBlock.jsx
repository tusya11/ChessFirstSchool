import React from "react";
import { additionalItems, links } from "./consts";
import MainTitleWithContent from "../../new_components/MainTitleWithContent/MainTitleWithContent";
import arrow from "./assets/arrow.svg";
import "./AdditionalBlock.scss";

const AdditionalBlock = () => {
  const handleClickLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="additional-block__container">
      <MainTitleWithContent
        title="Как проходит пробный урок"
        paddingUnderTitle="10px"
      >
        <div className="additional-block__content">
          <div className="additional-block__main-text">
            <p className="additional-block__title">
              На пробном занятии вам&nbsp;помогут настроить техническое
              оборудование для&nbsp;обучения
            </p>
          </div>
          <div className="additional-block__block-content">
            {additionalItems.map((item) => (
              <div key={item.id} className="additional-block__item-content">
                <div className="additional-block__image-container">
                  <img src={item.image} alt="block-with-img" />
                </div>
                <div className="additional-block__with-main-content">
                  <p className="additional-block__primary">{item.title}</p>
                  <p className="additional-block__secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="additional-block__links-container">
            <div className="additional-block__links-content">
              <div className="additional-block__download-zoom">
                <p>Скачать Zoom</p>
              </div>
              <div className="additional-block__links">
                {links.map((v) => (
                  <div key={v.id} className="additional-block__link-block">
                    <a target="_blank" href={v.link} rel="noreferrer">
                      {v.title}
                    </a>
                    <div
                      className="additional-block__arrow-down"
                      onClick={() => handleClickLink(v.link)}
                    >
                      <img src={arrow} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MainTitleWithContent>
    </div>
  );
};

export default AdditionalBlock;
