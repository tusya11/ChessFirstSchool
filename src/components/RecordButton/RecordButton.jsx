import React from "react";
import { urlToSignUp } from "../../utils/globalConstants";
import "./RecordButton.scss";

const RecordButton = () => (
  <div className="record-button__container">
    <a href={urlToSignUp} target="_blank" rel="noopener noreferrer">
      <button className="record-btn">Записаться</button>
    </a>
  </div>
);

export default RecordButton;
