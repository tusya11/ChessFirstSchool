import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Preview from "../../pages/Preview/Preview";
import RecomendedItems from "../../pages/RecomendedItems/RecomendedItems";
import AboutUsPage from "../../pages/AboutUsPage/AboutUsPage";
import BlockOfPossibilities from "../../pages/BlockOfPossibilities/BlockOfPossibilities";
import FacilitateCourses from "../../pages/FacilitateCourses/FacilitateCourses";
import { recomendedItems } from "../../pages/RecomendedItems/consts";
import Benefit from "../../pages/Benefit/Benefit";
import Classes from "../../pages/Classes/Classes";
import Price from "../../components/Price/Price";
import Bonuses from "../../pages/Bonuses/Bonuses";
import AdditionalBlock from "../../pages/AdditionalBlock/AdditionalBlock";
import "./Content.scss";
import NewTeamPage from "../../pages/NewTeamPage/NewTeamPage";

const Content = () => {
  const [search] = useSearchParams();
  const blockTitle = search.get("block");

  useEffect(() => {
    if (blockTitle) {
      const foundElement = document.querySelector(`#${blockTitle}`);

      if (foundElement) {
        foundElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "end",
        });
      }
    }
  }, [blockTitle]);

  return (
    <div className="content__container">
      <Preview />
      <RecomendedItems items={recomendedItems} padding={"20px"} />
      <AboutUsPage />
      <BlockOfPossibilities />
      <Benefit />
      <FacilitateCourses />
      <NewTeamPage />
      {/* <Classes />
      <Price /> */}
      <Bonuses />
      <AdditionalBlock />
    </div>
  );
};

export default Content;
