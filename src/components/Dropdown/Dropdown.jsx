import PropTypes from "prop-types";
import React from "react";
import "./style.css";

import { line } from "../../assets/index";

export const Dropdown = ({
  className,
  text = "Dopdown",
  divClassName,
  divClassNameOverride,
  divClassName1,
  divClassName2,
}) => {
  return (
    <div className={`dropdown ${className}`}>
      <div className="overlap">
        <div className="dopdown">{text}</div>
        <img className="img" alt="Line" src={line} />
      </div>
      <div className="overlap-group">
        <div className={`text-wrapper-4 ${divClassName}`}>PRODUCT 1</div>
        <div className={`text-wrapper-5 ${divClassNameOverride}`}>
          PRODUCT 2
        </div>
        <div className={`text-wrapper-6 ${divClassName1}`}>PRODUCT 3</div>
        <div className={`text-wrapper-7 ${divClassName2}`}>PRODUCT 4</div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  text: PropTypes.string,
};
