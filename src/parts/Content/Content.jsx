import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Preview from "../../pages/Preview/Preview";
import RecomendedItems from "../../pages/RecomendedItems/RecomendedItems";
import "./Content.scss";
import AboutUsPage from "../../pages/AboutUsPage/AboutUsPage";
import Team from "../../pages/Team/Team";
import Benefit from "../../pages/Benefit/Benefit";
import Classes from "../../pages/Classes/Classes";
import Price from "../../components/Price/Price";
import Bonuses from "../../pages/Bonuses/Bonuses";
import AdditionalBlock from "../../pages/AdditionalBlock/AdditionalBlock";

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
        });
      }
    }
  }, [blockTitle]);

  return (
    <div className="content__container">
      <Preview />
      <RecomendedItems />
      <AboutUsPage />
      <Benefit />
      <Team />
      <Classes />
      <Price />
      <Bonuses />
      <AdditionalBlock />
    </div>
  );
};

export default Content;
