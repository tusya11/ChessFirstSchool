import React from "react";
import { useMediaQuery } from "@mui/material";
import framePurple from "../images/frame_purple.png";
import frameBoy from "../images/frame_boy.png";
import framePink from "../images/frame_pink.png";
import frameHorse from "../images/frame_horse.png";
import frameGirl from "../images/frame_girl.png";
import framePawn from "../images/frame_pawn.png";

import "./ImagesContent.scss";

const ImagesContent = () => {
  const isXS = useMediaQuery("(max-width:700px)");
  return (
    <>
      <div className="images-content__container">
        {!isXS && (
          <div className="images-content__frame-purple">
            <img src={framePurple} alt="frame-purple" loading="lazy" />
          </div>
        )}
        <div className="images-content__frame-boy">
          <img src={frameBoy} alt="frame-boy" loading="lazy" />
        </div>
      </div>
      <div className="images-content__container">
        <div className="images-content__frame-horse">
          <img src={frameHorse} alt="frame-horse" loading="lazy" />
        </div>
        <div className="images-content__frame-pink">
          <img src={framePink} alt="frame-pink" loading="lazy" />
        </div>
      </div>
      <div className="images-content__container">
        <div className="images-content__frame-girl">
          <img src={frameGirl} alt="frame-girl" loading="lazy" />
        </div>
        <div className="images-content__frame-pawn">
          <img src={framePawn} alt="frame-pawn" loading="lazy" />
        </div>
      </div>
    </>
  );
};

export default ImagesContent;
