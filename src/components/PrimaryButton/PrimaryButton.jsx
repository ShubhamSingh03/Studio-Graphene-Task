import React from "react";
import { line, arrowIcon } from "../../assets/index";
import "./style.css";

export const PrimaryButton = ({ className }) => {
  return (
    <div className={`primary-button ${className}`}>
      <div className="frame">
        <div className="div-wrapper">
          <div className="text-wrapper">See more</div>
        </div>
        <img className="vector" alt="Vector" src={arrowIcon} />
      </div>
      <img className="line" alt="Line" src={line} />
    </div>
  );
};
