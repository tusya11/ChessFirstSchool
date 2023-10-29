import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import clsx from "classnames";
import "./SwiperSlide.scss";

//FIXME: нужны ли разноцветные карточки?
// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

const SwiperSlideComponent = ({ item }) => {
  const [isFlipOver, setIsFlipOver] = useState(false);
  // const color = getRandomColor();
  // const color = "rgb(154, 24, 191)";
  const color = "rgb(33, 152, 90)";

  return (
    <div className="swiper-slide">
      <div className={clsx("card", isFlipOver && "rotate")}>
        {isFlipOver ? (
          <div className="card__back">
            <div className="card__back-header">
              <div
                className="card__image_back"
                onClick={() => setIsFlipOver(false)}
              >
                <BiArrowBack />
              </div>
            </div>
            <div className="card__description">{item.description}</div>
          </div>
        ) : (
          <>
            <div className="image" style={{ border: `3px solid ${color}` }}>
              <img src={item.image} alt="card slider" />
            </div>
            <h3>{item.name.toUpperCase()}</h3>
            <p style={{ color: color }}>{item.dignity}</p>
            <button
              style={{ backgroundColor: color }}
              className="button__open"
              onClick={() => setIsFlipOver(true)}
            >
              Открыть
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SwiperSlideComponent;
