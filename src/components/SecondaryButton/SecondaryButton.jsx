import PropTypes from "prop-types";
import React from "react";
import "./style.css";

import { arrowIconSecondary } from "../../assets/index";

export const SecondaryButton = ({
  className,
  secondaryButton = { arrowIconSecondary },
}) => {
  return (
    <img
      className={`secondary-button ${className}`}
      alt="Secondary button"
      src={secondaryButton}
    />
  );
};

SecondaryButton.propTypes = {
  secondaryButton: PropTypes.string,
};
