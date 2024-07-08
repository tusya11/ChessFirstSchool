import React from "react";
import MainTitleWithContent from "../../new_components/MainTitleWithContent/MainTitleWithContent";
import { possibilities } from "./consts";
import "./BlockOfPossibilities.scss";

const BlockOfPossibilities = () => {
  return (
    <MainTitleWithContent title="Занимаясь с нами, ребенок сможет" pt={"50px"}>
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
