import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

import { CurvedCross } from "../CurvedCross";

import { hamburgerMenu2, rSmall, crossIcon } from "../../assets";

export const HamburgerMenu = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`hamburger-menu ${className}`} onClick={handleMenuClick}>
      {isMenuOpen ? (
        <div className="index">
          <div className="overlap">
            <img className="rectangle" alt="Rectangle" src={rSmall} />
            <CurvedCross
              className="curved-cross-instance"
              curvedCross={crossIcon}
            />
            <div className="text-wrapper">HOME</div>
            <div className="text-wrapper-2">ABOUT</div>
            <div className="text-wrapper-3">CONTACT US</div>
            <div className="text-wrapper-4">OUR PRODUCTS</div>
            <div className="group" />
            <div className="text-wrapper-5">ShopKart</div>
          </div>
        </div>
      ) : (
        <img
          className={`hamburger-button ${isMenuOpen ? "open" : ""}`}
          alt="Hamburger menu"
          src={hamburgerMenu2}
          onClick={handleMenuClick}
        />
      )}
    </div>
  );
};

HamburgerMenu.propTypes = {
  className: PropTypes.string,
};
