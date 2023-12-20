import React from "react";
import "./CardRecommend.scss";

const CardRecommend = ({ item }) => {
  return (
    <div className="card-recommend__content">
      <div
        className="card-recommend__items"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        {/* <div className="card-recommend__icon">
          <img src={item.image} alt="icon-recomended" />
        </div> */}
        <div className="card-recommend__text">
          <p>{item.title}</p>
          <span>{item.description}</span>
        </div>
        <div className="card-recommend__text_box-shadow"></div>
      </div>
    </div>
  );
};

export default CardRecommend;
