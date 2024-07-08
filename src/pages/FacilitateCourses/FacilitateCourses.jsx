import React from "react";
import MainTitleWithContent from "../../new_components/MainTitleWithContent/MainTitleWithContent";
import RecomendedItems from "../RecomendedItems/RecomendedItems";
import { facilitateItems } from "./consts";

const FacilitateCourses = () => {
  return (
    <MainTitleWithContent title="Как проходят занятия?" pt={"50px"}>
      <RecomendedItems items={facilitateItems} padding={"0px"} />
    </MainTitleWithContent>
  );
};

export default FacilitateCourses;
