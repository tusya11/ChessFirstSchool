import React from "react";
import background from "../../assets/preview_back.png";
import boy from "../../assets/main_boy.png";
import "./Preview.scss";

const Preview = () => {
  return (
    <section className="preview__container">
      <div className="preview__block-images">
        <div className="preview__image-background">
          <img src={background} alt="background-wrapper" />
        </div>
        <div className="preview__image-main">
          <img src={boy} alt="boy-wrapper" />
        </div>
      </div>
      <h1 className="preview__main-text">
        Шахматная
        <span className="preview__text-color">&nbsp;онлайн&nbsp;</span>
        школа
      </h1>
      <div className="preview__additional-text">
        Выбирая школу «CoolChess», Вы создаете успешное будущее Ваших детей в
        настоящем!
      </div>
    </section>
  );
};

export default Preview;
