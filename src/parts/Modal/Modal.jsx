import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "@mui/material/Modal";
import "./Modal.scss";

const ModalContent = ({ isOpen, onClose, children }) => (
  <Modal
    open={isOpen}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div className="modal__wrapper">
      <div className="modal__header">
        <div className="modal__empty"></div>
        <div>
          <p>Записаться</p>
        </div>
        <div className="modal__btn-close" onClick={onClose}>
          <AiOutlineClose />
        </div>
      </div>
      {children}
    </div>
  </Modal>
);

export default ModalContent;
