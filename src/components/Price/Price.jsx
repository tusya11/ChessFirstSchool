import React from "react";
import { prices } from "./consts";
import { declOfNum } from "../../utils/declOfNum";
import { TEXT_FORMS } from "../../utils/globalConstants";
import modal from "../../store/modal";
import "./Price.scss";

const Price = () => {
  const { setIsOpenModalTransaction, setModalInfo } = modal;

  const handleClickPrice = (v, item) => {
    const { time, title } = v;
    setIsOpenModalTransaction(true);
    setModalInfo({ ...item, time, title });
  };

  return (
    <div id="price" className="price__container">
      <div className="price__main-text">
        <h2>Стоимость</h2>
      </div>
      <div className="price__content">
        {prices.map((v) => (
          <div className="price__card" key={v.id}>
            <div className="price__header-card">
              <div className="price__image">{v.image}</div>
              <p>{v.title}</p>
            </div>
            <div className="price__content-price">
              {v.prices_data.map((item) => (
                <div
                  key={item.id}
                  className="price__block"
                  onClick={() => handleClickPrice(v, item)}
                >
                  <div className="price__quantity">
                    <p>{item.quantity}</p>
                    &nbsp;
                    <span>
                      {declOfNum(item.quantity, TEXT_FORMS["LESSONS"])}
                    </span>
                  </div>
                  <span className="price__cost">{item.price_rub} ₽</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
