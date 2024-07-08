import React from "react";
import { bonuses } from "./consts";
import MainTitleWithContent from "../../new_components/MainTitleWithContent/MainTitleWithContent";
import RecomendedItems from "../RecomendedItems/RecomendedItems";
import "./Bonuses.scss";

const Bonuses = () => {
  return (
    <div id="bonuses" className="bonuses__container">
      <MainTitleWithContent title="Бонусы">
        <RecomendedItems items={bonuses} padding={"0px"} />
      </MainTitleWithContent>
    </div>
  );
};

export default Bonuses;
