import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./SignUpContent.scss";

const SignUpContent = () => {
  return (
    <div className="sign-up-content__container">
      <div className="sign-up-content__content">
        <div className="sign-up-content__header">
          <div className="sign-up-content__empty"></div>
          <div>
            <p>Записаться</p>
          </div>
          <div className="sign-up-content__btn-close">
            <AiOutlineClose />
          </div>
        </div>
        <div className="sign-up-content__body">PUOUOUOUO</div>
      </div>
      <div className="sign-up-content__buttons">BUTTONS</div>
    </div>
  );
};

export default SignUpContent;
