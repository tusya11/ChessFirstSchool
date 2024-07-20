import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Preview from "../../pages/Preview/Preview";
import RecomendedItems from "../../pages/RecomendedItems/RecomendedItems";
import AboutUsPage from "../../pages/AboutUsPage/AboutUsPage";
import BlockOfPossibilities from "../../pages/BlockOfPossibilities/BlockOfPossibilities";
import FacilitateCourses from "../../pages/FacilitateCourses/FacilitateCourses";
import { recomendedItems } from "../../pages/RecomendedItems/consts";
import Benefit from "../../pages/Benefit/Benefit";
// import Classes from "../../pages/Classes/Classes";
// import Price from "../../components/Price/Price";
import Bonuses from "../../pages/Bonuses/Bonuses";
import AdditionalBlock from "../../pages/AdditionalBlock/AdditionalBlock";
import "./Content.scss";
import NewTeamPage from "../../pages/NewTeamPage/NewTeamPage";
import NewPricePage from "../../pages/NewPricePage/NewPricePage";

const Content = () => {
  const isXS = useMediaQuery("(max-width:700px)");

  const [search] = useSearchParams();
  const blockTitle = search.get("block");

  useEffect(() => {
    if (blockTitle) {
      const foundElement = document.querySelector(`#${blockTitle}`);

      const yOffset = -100;
      const currentScrollPos = window.pageYOffset ?? document?.body?.scrollTop;

      const y =
        foundElement.getBoundingClientRect().top + currentScrollPos + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });

      // if (foundElement) {
      //   foundElement.scrollIntoView({
      //     behavior: "smooth",
      //     block: "start",
      //     inline: "end",
      //   });
      // }
    }
  }, [blockTitle]);

  return (
    <div className="content__container">
      <Preview />
      <RecomendedItems
        items={recomendedItems}
        padding={isXS ? "30px 20px" : "40px 20px 60px"}
      />
      <AboutUsPage />
      <BlockOfPossibilities />
      <Benefit />
      <FacilitateCourses />
      <NewTeamPage />
      {/* <Classes /> */}
      {/* <Price /> */}
      <NewPricePage />
      {/* <Price /> */}
      <Bonuses />
      <AdditionalBlock />
    </div>
  );
};

export default Content;
