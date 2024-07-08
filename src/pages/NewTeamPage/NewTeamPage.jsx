import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { teamData } from "./consts";
import line from "./assets/line_white.png";
import lineArrow from "../AdditionalBlock/assets/arrow.svg";
import "./NewTeamPage.scss";
import { Drawer } from "antd";

const NewTeamPage = () => {
  const isXS = useMediaQuery("(max-width:700px)");
  const [isShowMore, setIsShowMore] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const firstBlock = [
    {
      id: "first_item",
      title: "Наши тренера",
    },
  ];
  const data = [...firstBlock, ...teamData];

  const handleClickArrow = () => {
    setIsShowMore((prev) => !prev);
  };

  const handleClickOnMember = () => {
    setIsOpenDrawer(true);
  };

  const showCards = (v, index) => {
    if (!isShowMore && index > 6 && !isXS) {
      return null;
    }

    if (!isShowMore && index > 3 && isXS) {
      return null;
    }

    return (
      <div key={v.id} className="new-team-page__content">
        {v.id === "first_item" ? (
          <div className="new-team-page__first-block">
            <p className="new-team-page__title">{v.title}</p>
          </div>
        ) : (
          <div
            className="new-team-page__team-member"
            onClick={handleClickOnMember}
          >
            <div className="new-team-page__image">
              <img src={v.image} alt="" />
            </div>
            <div className="new-team-page__member-description">
              <p>{v.name}</p>
              <span>{v.dignity}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleClose = () => {
    setIsOpenDrawer((prev) => !prev);
  };

  return (
    <>
      {isXS ? (
        <div className="new-team-page__container">
          <div className="new-team-page__blocks-container">
            {data.map((v, index) => (
              <>{showCards(v, index)}</>
            ))}
          </div>
          <div className="new-team-page__last-item-container">
            <div className="new-team-page__last-block">
              <div className="new-team-page__last-block-text">
                <p>{isShowMore ? "Скрыть" : "Смотреть еще"}</p>
              </div>
              <div
                className={`new-team-page__image-line ${
                  isShowMore && "active"
                }`}
                onClick={handleClickArrow}
              >
                <img src={lineArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="new-team-page__container">
          {data.map((v, index) => (
            <>{showCards(v, index)}</>
          ))}
          <div className="new-team-page__last-block">
            <div className="new-team-page__last-block-text">
              <p>{isShowMore ? "Скрыть" : "Смотреть еще"}</p>
            </div>
            <div
              className={`new-team-page__image-line ${isShowMore && "active"}`}
              onClick={handleClickArrow}
            >
              <img src={line} alt="line-white" />
            </div>
          </div>
        </div>
      )}
      <Drawer
        placement={"right"}
        width={"50%"}
        onClose={handleClose}
        open={isOpenDrawer}
        styles={{
          header: {
            display: "flex",
            marginLeft: "auto",
            border: "none",
          },
        }}
      >
        <div>Hello My Friends</div>
      </Drawer>
    </>
  );
};

export default NewTeamPage;
