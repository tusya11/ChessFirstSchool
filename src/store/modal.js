import { makeAutoObservable } from "mobx";

class Modal {
  isOpenModal = false;

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

  setIsShowAlert = (info) => {
    this.alertMsg = info;
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Modal();
