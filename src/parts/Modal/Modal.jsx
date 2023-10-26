import React, { useEffect } from "react";
import "./Modal.scss";

const Modal = ({ children }) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.body.style.overflow = "hidden";
    });

    return () => {
      window.removeEventListener("scroll", () => {
        document.body.style.overflow = "initial";
      });
    };
  }, []);

  return (
    <>
      <div className="modal__wrapper"></div>
      <div className="modal__container">
        <div className="modal__content">{children}</div>
      </div>
    </>
  );
};

export default Modal;
