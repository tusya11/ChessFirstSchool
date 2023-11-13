import React from "react";
import { useMediaQuery } from "@mui/material";
import imagePlay from "../../assets/plays.jpeg";
import { aboutUsItems } from "./consts";
import "./AboutUsPage.scss";

const AboutUsPage = () => {
  const isXS = useMediaQuery("(max-width:700px)");

  return (
    <div id="about" className="about-us-page__container">
      {!isXS && (
        <div className="about-us-page__content-image">
          <img src={imagePlay} alt="father-and-son-play" />
        </div>
      )}
      <div className="about-us-page__content-block">
        <h2>Школа предлагает следующий подход к обучению:</h2>
        {isXS && (
          <div className="about-us-page__content-image">
            <img src={imagePlay} alt="father-and-son-play" />
          </div>
        )}
        <div className="about-us-page__content-text">
          {aboutUsItems.map((v) => (
            <div className="about-us-page__card" key={v.id}>
              <div className="about-us-page__image">
                <img src={v.image} alt="card-about-us" />
              </div>
              <div className="about-us-page__description">
                <p>{v.title}</p>
                <span>{v.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
