import PropTypes from "prop-types";
import React from "react";
import "./style.css";

import { crossIcon } from "../../assets";

export const CurvedCross = ({ className, curvedCross = { crossIcon } }) => {
  return (
    <img
      className={`curved-cross ${className}`}
      alt="Curved cross"
      src={curvedCross}
    />
  );
};

CurvedCross.propTypes = {
  curvedCross: PropTypes.string,
};
