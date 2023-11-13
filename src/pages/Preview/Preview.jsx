import React from "react";
import { useMediaQuery } from "@mui/material";
import background from "../../assets/preview_back.png";
import boy from "../../assets/main_boy.png";
import RecordButton from "../../components/RecordButton/RecordButton";
import modal from "../../store/modal";
import "./Preview.scss";

const Preview = () => {
  const isXS = useMediaQuery("(max-width:700px)");
  const { setIsOpenModal } = modal;

  const handleClickButton = () => {
    setIsOpenModal(true);
  };

  return (
    <section className="preview__container">
      <div className="preview__block-images">
        {!isXS && (
          <>
            <div className="preview__image-background">
              <img src={background} alt="background-wrapper" />
            </div>
            <div className="preview__image-main">
              <img src={boy} alt="boy-wrapper" />
            </div>{" "}
          </>
        )}
      </div>
      <h1 className="preview__main-text">
        Шахматная <span className="preview__text-color">онлайн</span> школа
      </h1>
      <div className="preview__additional-text">
        Выбирая школу «CoolChess», Вы создаете успешное будущее Ваших детей в
        настоящем!
      </div>
      {isXS && (
        <div className="preview__mobile-btn">
          <RecordButton onClick={handleClickButton} />
        </div>
      )}
    </section>
  );
};

export default Preview;
