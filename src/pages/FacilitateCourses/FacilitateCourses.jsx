import React from "react";
import { useMediaQuery } from "@mui/material";
import MainTitleWithContent from "../../new_components/MainTitleWithContent/MainTitleWithContent";
import RecomendedItems from "../RecomendedItems/RecomendedItems";
import { facilitateItems } from "./consts";

const FacilitateCourses = () => {
  const isXS = useMediaQuery("(max-width:700px)");

  return (
    <MainTitleWithContent
      title="Как проходят занятия?"
      pt={"50px"}
      padding={isXS ? "0px 15px 60px" : "0px 15px 100px"}
    >
      <RecomendedItems
        items={facilitateItems}
        padding={"0px"}
        isSwiperScroll={isXS}
      />
    </MainTitleWithContent>
  );
};

export default FacilitateCourses;
