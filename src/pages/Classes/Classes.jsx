import React from "react";
import imageReplays from "../../assets/replays.png";
import { lessons } from "./consts";
import "./Classes.scss";

const Classes = () => (
  <div className="classes__container">
    <div className="classes__image">
      <img src={imageReplays} alt="replays classes" />
    </div>
    <div className="classes__main-text">
      <h2>Как проходят занятия?</h2>
    </div>
    <div className="classes__content">
      {lessons.map((v) => (
        <div className="classes__card" key={v.id}>
          <p className="classes__title">{v.title}</p>
          <span>{v.description}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Classes;
