import { makeAutoObservable } from "mobx";

class Modal {
  isOpenModal = false;
  isOpenModalTransaction = false;
  modalInfo = {};

  alertMsg = {
    visible: false,
    message: "",
    status: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setIsOpenModal = (isOpen) => {
    this.isOpenModal = isOpen;
  };

  setIsOpenModalTransaction = (isOpen) => {
    this.isOpenModalTransaction = isOpen;
  };

  setModalInfo = (info) => {
    this.modalInfo = info;
  };

  setAlertMsg = (info) => {
    this.alertMsg = info;
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Modal();
