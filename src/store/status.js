import { makeAutoObservable } from "mobx";

class Status {
  orderDetails = {};

  constructor() {
    makeAutoObservable(this);
  }

  setOrderDetails = (details) => {
    this.orderDetails = details;
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Status();
