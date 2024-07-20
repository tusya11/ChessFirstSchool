import React from "react";
import { useMediaQuery } from "@mui/material";
import MainTitleWithContent from "../../new_components/MainTitleWithContent/MainTitleWithContent";
import { possibilities } from "./consts";
import "./BlockOfPossibilities.scss";

const BlockOfPossibilities = () => {
  const isXS = useMediaQuery("(max-width:700px)");

  return (
    <MainTitleWithContent
      title="Занимаясь с&nbsp;нами, ребенок сможет"
      padding={isXS ? "0 15px 60px" : ""}
    >
      <div className="block-of-possibilities__container">
        {possibilities.map((v) => (
          <div key={v.id} className="block-of-possibilities__content">
            <div className="block-of-possibilities__image">
              <img src={v.icon} alt="" />
            </div>
            <div className="block-of-possibilities__main-text">
              <p className="block-of-possibilities__description">
                {v.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MainTitleWithContent>
  );
};

export default BlockOfPossibilities;
