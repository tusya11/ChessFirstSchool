import React from "react";
import "./MainTitleWithContent.scss";

const MainTitleWithContent = ({
  title,
  pt,
  children,
  padding,
  paddingUnderTitle = "30px",
  paddingLeftTitle,
}) => {
  return (
    <div
      className="main-title-with-content__container"
      style={{
        paddingTop: pt,
        padding: padding,
      }}
    >
      <div
        className="main-title-with-content__title"
        style={{
          paddingBottom: paddingUnderTitle,
          paddingLeft: paddingLeftTitle,
        }}
      >
        <h3 className="main-title-with-content__main-text">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default MainTitleWithContent;
