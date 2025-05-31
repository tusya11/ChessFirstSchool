import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { Spin } from "antd";
import Preview from "../../pages/Preview/Preview";
import RecomendedItems from "../../pages/RecomendedItems/RecomendedItems";
import AboutUsPage from "../../pages/AboutUsPage/AboutUsPage";
import BlockOfPossibilities from "../../pages/BlockOfPossibilities/BlockOfPossibilities";
import FacilitateCourses from "../../pages/FacilitateCourses/FacilitateCourses";
import { recomendedItems } from "../../pages/RecomendedItems/consts";
import Benefit from "../../pages/Benefit/Benefit";
import Bonuses from "../../pages/Bonuses/Bonuses";
import AdditionalBlock from "../../pages/AdditionalBlock/AdditionalBlock";
import ReviewsSection from '../../pages/GroupCoursesPage/parts/ReviewsSection/ReviewsSection'
import { new_prices } from "../../pages/NewPricePage/consts";
import "./Content.scss";

const NewPricePageLazy = React.lazy(() =>
  import("../../pages/NewPricePage/NewPricePage")
);

const NewTeamPageLazy = React.lazy(() =>
  import("../../pages/NewTeamPage/NewTeamPage")
);

const Content = () => {
  const isXS = useMediaQuery("(max-width:700px)");
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  const [search] = useSearchParams();
  const blockTitle = search.get("block");

  useEffect(() => {
    const handleLoad = () => {
      setIsDomLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (blockTitle && isDomLoaded) {
      const foundElement = document.querySelector(`#${blockTitle}`);

      const yOffset = -100;
      const currentScrollPos = window.pageYOffset ?? document?.body?.scrollTop;

      const y =
        foundElement.getBoundingClientRect().top + currentScrollPos + yOffset;

      if (foundElement) {
        window.scrollTo({ top: y, behavior: "smooth" });
      }

      // if (foundElement) {
      //   foundElement.scrollIntoView({
      //     behavior: "smooth",
      //     block: "start",
      //     inline: "end",
      //   });
      // }
    }
  }, [blockTitle, isDomLoaded]);

  return (
    <div className="content__container">
      <Preview />
      <RecomendedItems
        items={recomendedItems}
        padding={isXS ? "30px 20px" : "40px 40px 60px"}
      />
      <AboutUsPage />
      <BlockOfPossibilities />
      <Benefit />
      <FacilitateCourses />
      <Suspense fallback={<Spin />}>
        <NewTeamPageLazy />
      </Suspense>
      <ReviewsSection/>
      <Suspense fallback={<Spin />}>
        <NewPricePageLazy prices={new_prices} hasAdditional={true} titlePt={isXS ? "40px" : "80px"}/>
      </Suspense>
      <Bonuses />
      <AdditionalBlock />
    </div>
  );
};

export default Content;
