import React from "react";
import "./SwiperSlide.scss";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const SwiperSlideComponent = ({ item }) => {
  const color = getRandomColor();
  // const color = "rgb(154, 24, 191)";

  return (
    <div className="swiper-slide">
      <div className="card">
        <div className="image" style={{ border: `3px solid ${color}` }}>
          <img src={item.image} alt="card slider" />
        </div>
        <h3>{item.name.toUpperCase()}</h3>
        <p style={{ color: color }}>{item.dignity}</p>
      </div>
    </div>
  );
};

export default SwiperSlideComponent;
