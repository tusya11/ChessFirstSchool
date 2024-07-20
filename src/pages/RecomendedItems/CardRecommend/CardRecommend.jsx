import React from "react";
import clsx from "classnames";
import { useMediaQuery } from "@mui/material";
import "./CardRecommend.scss";

const CardRecommend = ({ item, className, isHorizontal = false }) => {
  const isXS = useMediaQuery("(max-width:700px)");

  return (
    <div
      className={clsx(
        "card-recommend__content",
        className && className,
        isHorizontal && "scroll"
      )}
    >
      <div className="card-recommend__main">
        <div className="card-recommend__image">
          <img src={item.icon} alt="recommend-card-icon" />
        </div>
        {isXS && (
          <div className="card-recommend__title">
            <p className="card-recommend__title-text">{item.title}</p>
          </div>
        )}
      </div>
      <div className="card-recommend__description">
        {!isXS && (
          <div className="card-recommend__title">
            <p className="card-recommend__title-text">{item.title}</p>
          </div>
        )}
        <span className="card-recommend__description-text">
          {item.description}
        </span>
      </div>
    </div>
  );
};

export default CardRecommend;
