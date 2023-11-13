import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import SwiperSlideComponent from "../Slider/SwiperSlide/SwiperSlide";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperComponent.scss";
import { useMediaQuery } from "@mui/material";

const SwiperComponent = ({ data }) => {
  const isXS = useMediaQuery("(max-width:700px)");

  return (
    <div className="swiper-component__container">
      <div className="swiper__container">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          loop={true}
          slidesPerView={isXS ? 1 : 3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper__container mySwiper"
        >
          {data.map((v) => (
            <SwiperSlide key={v.id}>
              <SwiperSlideComponent item={v} />
              {/* <CardPerson card={v} /> */}
            </SwiperSlide>
          ))}
          <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
              <AiOutlineArrowLeft />
            </div>
            <div className="swiper-button-next slider-arrow">
              <AiOutlineArrowRight />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
