import React from "react";
import { useMediaQuery } from "@mui/material";
import { approachToLearning } from "./consts";
import "./AboutUsPage.scss";
import MainTitleWithContent from "../../new_components/MainTitleWithContent/MainTitleWithContent";

const AboutUsPage = () => {
  const isXS = useMediaQuery("(max-width:700px)");

  return (
    <div className="about-us-page__container" id="about">
      <MainTitleWithContent
        title="Наш подход к обучению"
        padding={isXS ? "0 0 40px 15px" : ""}
      >
        <div
          className="about-us-page__block-scroll"
          style={{ overflow: "auto" }}
        >
          {approachToLearning.map((item) => (
            <div key={item.id} className="about-us-page__block">
              <div className="about-us-page__content-image">
                <img src={item.image} alt="content-about-us-page" />
              </div>
              <div className="about-us-page__content-block">
                <p>{item.title}</p>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </MainTitleWithContent>
    </div>
  );
};

export default AboutUsPage;
