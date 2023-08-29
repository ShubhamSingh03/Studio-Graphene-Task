import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Dropdown } from "../../components/Dropdown";
import { HamburgerMenu } from "../../components/HamburgerMenu";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";
import { TextField } from "../../components/TextField";
import "./style.css";

import {
  hamburgerMenu2x,
  rLarge,
  rSmall,
  starLarge,
  starSmall,
  heroLarge,
  heroSmall,
  star4,
  star41,
  line23,
  line231,
  truckIcon,
  fbIcon,
  liIcon,
  twIcon,
  itIcon,
  lineVertical1,
  starSmall2,
  lineHorizin,
  productList1,
  productList2,
  lineHorizinB,
  starSmall3,
  arrowIconSecondary3,
  productList3,
  truckIcon2,
  fbIcon2,
  liIcon2,
  twIcon2,
  itIcon2,
  lineVertical2,
  lineHorizinC,
  arrowIconPointerR,
  arrowIconPointerL,
  productList4,
  productList5,
  secondaryBtn,
  bgFilter,
  lineHorizinD,
  arrowIconPointerR2,
  arrowIconPointerL2,
} from "../../assets/index";

export const Index = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="index">
      <div
        className="div-2"
        style={{
          height:
            screenWidth < 1440
              ? "2121px"
              : screenWidth >= 1440
              ? "2148px"
              : undefined,
          width:
            screenWidth < 1440
              ? "390px"
              : screenWidth >= 1440
              ? "1440px"
              : undefined,
        }}
      >
        <div
          className="overlap-2"
          style={{
            height:
              screenWidth >= 1440
                ? "790px"
                : screenWidth < 1440
                ? "682px"
                : undefined,
            left:
              screenWidth >= 1440
                ? "0"
                : screenWidth < 1440
                ? "-545px"
                : undefined,
            top:
              screenWidth >= 1440
                ? "0"
                : screenWidth < 1440
                ? "42px"
                : undefined,
            width:
              screenWidth >= 1440
                ? "1444px"
                : screenWidth < 1440
                ? "1074px"
                : undefined,
          }}
        >
          <div
            className="rectangle"
            style={{
              height:
                screenWidth < 1440
                  ? "682px"
                  : screenWidth >= 1440
                  ? "748px"
                  : undefined,
              left:
                screenWidth < 1440
                  ? "486px"
                  : screenWidth >= 1440
                  ? "0"
                  : undefined,
              top:
                screenWidth < 1440
                  ? "0"
                  : screenWidth >= 1440
                  ? "42px"
                  : undefined,
              width:
                screenWidth < 1440
                  ? "470px"
                  : screenWidth >= 1440
                  ? "1440px"
                  : undefined,
            }}
          />
          <img
            className="rectangle-2"
            style={{
              height:
                screenWidth >= 1440
                  ? "749px"
                  : screenWidth < 1440
                  ? "682px"
                  : undefined,
              left:
                screenWidth >= 1440
                  ? "0"
                  : screenWidth < 1440
                  ? "545px"
                  : undefined,
              top:
                screenWidth >= 1440
                  ? "41px"
                  : screenWidth < 1440
                  ? "0"
                  : undefined,
              width:
                screenWidth >= 1440
                  ? "1440px"
                  : screenWidth < 1440
                  ? "390px"
                  : undefined,
            }}
            alt="Rectangle"
            src={
              screenWidth >= 1440
                ? rLarge
                : screenWidth < 1440
                ? rSmall
                : undefined
            }
          />
          {screenWidth < 1440 && (
            <>
              <PrimaryButton className="primary-button-instance" />
              <div className="text-wrapper-8">ShopKart</div>
              <HamburgerMenu
                className="hamburger-menu-instance"
                hamburgerMenu={hamburgerMenu2x}
              />
            </>
          )}
          <div
            className="group"
            style={{
              height:
                screenWidth >= 1440
                  ? "659px"
                  : screenWidth < 1440
                  ? "603px"
                  : undefined,
              top:
                screenWidth >= 1440
                  ? "129px"
                  : screenWidth < 1440
                  ? "79px"
                  : undefined,
              width:
                screenWidth >= 1440
                  ? "1444px"
                  : screenWidth < 1440
                  ? "1074px"
                  : undefined,
            }}
          >
            <div
              className="overlap-group-2"
              style={{
                height:
                  screenWidth >= 1440
                    ? "659px"
                    : screenWidth < 1440
                    ? "603px"
                    : undefined,
                left: screenWidth < 1440 ? "332px" : undefined,
                width:
                  screenWidth >= 1440
                    ? "1440px"
                    : screenWidth < 1440
                    ? "738px"
                    : undefined,
              }}
            >
              <div
                className="rectangle-3"
                style={{
                  height:
                    screenWidth >= 1440
                      ? "354px"
                      : screenWidth < 1440
                      ? "324px"
                      : undefined,
                  left:
                    screenWidth >= 1440
                      ? "447px"
                      : screenWidth < 1440
                      ? "0"
                      : undefined,
                  top:
                    screenWidth >= 1440
                      ? "216px"
                      : screenWidth < 1440
                      ? "197px"
                      : undefined,
                  width:
                    screenWidth >= 1440
                      ? "993px"
                      : screenWidth < 1440
                      ? "738px"
                      : undefined,
                }}
              />
              <img
                className="star"
                style={{
                  height:
                    screenWidth >= 1440
                      ? "372px"
                      : screenWidth < 1440
                      ? "340px"
                      : undefined,
                  left:
                    screenWidth >= 1440
                      ? "1011px"
                      : screenWidth < 1440
                      ? "419px"
                      : undefined,
                  width:
                    screenWidth >= 1440
                      ? "365px"
                      : screenWidth < 1440
                      ? "184px"
                      : undefined,
                }}
                alt="Star"
                src={
                  screenWidth >= 1440
                    ? starLarge
                    : screenWidth < 1440
                    ? starSmall
                    : undefined
                }
              />
              <img
                className="jessica-radanavong"
                style={{
                  height:
                    screenWidth >= 1440
                      ? "655px"
                      : screenWidth < 1440
                      ? "599px"
                      : undefined,
                  left:
                    screenWidth >= 1440
                      ? "899px"
                      : screenWidth < 1440
                      ? "336px"
                      : undefined,
                  width:
                    screenWidth >= 1440
                      ? "432px"
                      : screenWidth < 1440
                      ? "267px"
                      : undefined,
                }}
                alt="Jessica radanavong"
                src={
                  screenWidth >= 1440
                    ? heroLarge
                    : screenWidth < 1440
                    ? heroSmall
                    : undefined
                }
              />
              <div
                className="rectangle-4"
                style={{
                  backgroundColor:
                    screenWidth >= 1440
                      ? "var(--pimary-colour)"
                      : screenWidth < 1440
                      ? "#f07e15"
                      : undefined,
                  height:
                    screenWidth >= 1440
                      ? "354px"
                      : screenWidth < 1440
                      ? "324px"
                      : undefined,
                  left:
                    screenWidth >= 1440
                      ? "447px"
                      : screenWidth < 1440
                      ? "0"
                      : undefined,
                  top:
                    screenWidth >= 1440
                      ? "216px"
                      : screenWidth < 1440
                      ? "197px"
                      : undefined,
                  width:
                    screenWidth >= 1440
                      ? "993px"
                      : screenWidth < 1440
                      ? "738px"
                      : undefined,
                }}
              />
              <img
                className="star-2"
                style={{
                  height:
                    screenWidth >= 1440
                      ? "89px"
                      : screenWidth < 1440
                      ? "82px"
                      : undefined,
                  left:
                    screenWidth >= 1440
                      ? "944px"
                      : screenWidth < 1440
                      ? "369px"
                      : undefined,
                  top:
                    screenWidth >= 1440
                      ? "492px"
                      : screenWidth < 1440
                      ? "450px"
                      : undefined,
                  width:
                    screenWidth >= 1440
                      ? "64px"
                      : screenWidth < 1440
                      ? "48px"
                      : undefined,
                }}
                alt="Star"
                src={
                  screenWidth >= 1440
                    ? star4
                    : screenWidth < 1440
                    ? star41
                    : undefined
                }
              />
              <div
                className="oregon-jacket"
                style={{
                  left:
                    screenWidth >= 1440
                      ? "1300px"
                      : screenWidth < 1440
                      ? "634px"
                      : undefined,
                  top:
                    screenWidth >= 1440
                      ? "486px"
                      : screenWidth < 1440
                      ? "445px"
                      : undefined,
                  width:
                    screenWidth >= 1440
                      ? "117px"
                      : screenWidth < 1440
                      ? "87px"
                      : undefined,
                }}
              >
                OREGON JACKET
              </div>
              <div
                className="text-wrapper-9"
                style={{
                  left:
                    screenWidth >= 1440
                      ? "1300px"
                      : screenWidth < 1440
                      ? "634px"
                      : undefined,
                  top:
                    screenWidth >= 1440
                      ? "505px"
                      : screenWidth < 1440
                      ? "462px"
                      : undefined,
                  width:
                    screenWidth >= 1440
                      ? "31px"
                      : screenWidth < 1440
                      ? "23px"
                      : undefined,
                }}
              >
                $124
              </div>
              <img
                className="line-2"
                style={{
                  left:
                    screenWidth >= 1440
                      ? "0"
                      : screenWidth < 1440
                      ? "213px"
                      : undefined,
                  top:
                    screenWidth >= 1440
                      ? "536px"
                      : screenWidth < 1440
                      ? "490px"
                      : undefined,
                  width:
                    screenWidth >= 1440
                      ? "976px"
                      : screenWidth < 1440
                      ? "180px"
                      : undefined,
                }}
                alt="Line"
                src={
                  screenWidth >= 1440
                    ? line23
                    : screenWidth < 1440
                    ? line231
                    : undefined
                }
              />
            </div>
          </div>
          {screenWidth < 1440 && (
            <>
              <div className="group-2" />
              <div className="lorem-ipsum-dolor">Fresh</div>
              <div className="lorem-ipsum-dolor-2">Look</div>
              <div className="lorem-ipsum-dolor-3">2022</div>
            </>
          )}
          {screenWidth >= 1440 && (
            <>
              <div className="lorem-ipsum-dolor-4">Fresh</div>
              <div className="lorem-ipsum-dolor-5">Look</div>
              <div className="lorem-ipsum-dolor-6">2022</div>
              <div className="rectangle-5" />
              <div className="text-wrapper-10">HOME</div>
              <div className="text-wrapper-11">ABOUT</div>
              <div className="text-wrapper-12">CONTACT US</div>
              <div className="text-wrapper-13">BAG (0)</div>
              <div className="text-wrapper-14">WISHLIST (0)</div>
              <div className="text-wrapper-15">ShopKart</div>
              <div className="text-wrapper-16">Free Delivery</div>
              <div className="text-wrapper-17">Return Policy</div>
              <div className="text-wrapper-18">Login</div>
              <div className="text-wrapper-19">Follow US</div>
              <img className="layer" alt="Layer" src={truckIcon} />
              <img className="vector-2" alt="Vector" src={fbIcon} />
              <img className="vector-3" alt="Vector" src={liIcon} />
              <img className="vector-4" alt="Vector" src={twIcon} />
              <img className="group-3" alt="Group" src={itIcon} />
              <img className="line-3" alt="Line" src={lineVertical1} />
              <div className="overlap-wrapper">
                <div className="overlap-3">
                  <img className="line-4" alt="Line" src={lineHorizin} />
                  <img className="star-3" alt="Star" src={starSmall2} />
                </div>
              </div>
              <PrimaryButton className="instance-node" />
              <Dropdown
                className="dropdown-instance"
                divClassName="dropdown-2"
                divClassName1="dropdown-2"
                divClassName2="dropdown-2"
                divClassNameOverride="dropdown-2"
                text="OUR PRODUCTS"
              />
            </>
          )}
        </div>
        {screenWidth >= 1440 && (
          <>
            <div className="overlap-4">
              <img
                className="zam-nungaray"
                alt="Zam nungaray"
                src={productList1}
              />
              <img
                className="philipp-arlt"
                alt="Philipp arlt"
                src={productList2}
              />
              <div className="lorem-ipsum-dolor-7">New products</div>
              <div className="text-wrapper-20">Apparel</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-3">
                  <img className="line-5" alt="Line" src={lineHorizinB} />
                  <img className="star-4" alt="Star" src={starSmall3} />
                </div>
              </div>
              <SecondaryButton
                className="secondary-button-instance"
                secondaryButton={arrowIconSecondary3}
              />
              <SecondaryButton
                className="secondary-button-2"
                secondaryButton={arrowIconSecondary3}
              />
            </div>
            <img
              className="philipp-arlt-2"
              alt="Philipp arlt"
              src={productList3}
            />
            <div className="text-wrapper-21">Accessories</div>
            <div className="text-wrapper-22">Best sellers</div>
            <div className="text-wrapper-23">50% off</div>
          </>
        )}

        <div
          className="overlap-5"
          style={{
            backgroundColor:
              screenWidth < 1440
                ? "#191919"
                : screenWidth >= 1440
                ? "#000000"
                : undefined,
            height:
              screenWidth < 1440
                ? "42px"
                : screenWidth >= 1440
                ? "66px"
                : undefined,
            left:
              screenWidth < 1440
                ? "0"
                : screenWidth >= 1440
                ? "-9px"
                : undefined,
            top:
              screenWidth < 1440
                ? "0"
                : screenWidth >= 1440
                ? "2082px"
                : undefined,
            width:
              screenWidth < 1440
                ? "390px"
                : screenWidth >= 1440
                ? "1455px"
                : undefined,
          }}
        >
          {screenWidth < 1440 && (
            <>
              <img className="vector-5" alt="Vector" src={fbIcon2} />
              <img className="vector-6" alt="Vector" src={liIcon2} />
              <img className="vector-7" alt="Vector" src={twIcon2} />
              <img className="group-4" alt="Group" src={itIcon2} />
            </>
          )}

          <div
            className="copyright-all"
            style={{
              color:
                screenWidth >= 1440
                  ? "#ffffff"
                  : screenWidth < 1440
                  ? "#616161"
                  : undefined,
              fontSize:
                screenWidth >= 1440
                  ? "12px"
                  : screenWidth < 1440
                  ? "10px"
                  : undefined,
              left:
                screenWidth >= 1440
                  ? "610px"
                  : screenWidth < 1440
                  ? "268px"
                  : undefined,
              top:
                screenWidth >= 1440
                  ? "23px"
                  : screenWidth < 1440
                  ? "13px"
                  : undefined,
            }}
          >
            {screenWidth >= 1440 && (
              <p className="text-wrapper-41">
                Copyright 2022 All Right Reserved By SG
              </p>
            )}

            {screenWidth < 1440 && <>Login</>}
          </div>
          {screenWidth < 1440 && (
            <>
              <div className="text-wrapper-24">Free Delivery</div>
              <div className="text-wrapper-25">Return Policy</div>
              <img className="layer-2" alt="Layer" src={truckIcon2} />
              <img className="line-6" alt="Line" src={lineVertical2} />
            </>
          )}
        </div>
        {screenWidth >= 1440 && (
          <>
            <div className="overlap-6">
              <div className="overlap-7">
                <p className="get-news-about">
                  <br />
                  Get news about articles and updates in your inbox.
                </p>
                <div className="text-wrapper-26">Newslleter</div>
              </div>
              <div className="text-wrapper-27">NAME</div>
              <div className="text-wrapper-28">EMAIL</div>
              <div className="text-wrapper-29">MESSAGE</div>
              <div className="overlap-8">
                <div className="lorem-ipsum-dolor-8">
                  GET <br />
                  IN TOUCH
                </div>
                <div className="button">
                  <div className="overlap-9">
                    <div className="text-wrapper-30">SEND</div>
                  </div>
                </div>
              </div>
              <img className="line-7" alt="Line" src={lineHorizinC} />
              <img className="line-8" alt="Line" src={lineHorizinC} />
              <img className="line-9" alt="Line" src={lineHorizinC} />
            </div>
            <img className="arrow" alt="Arrow" src={arrowIconPointerR} />
            <img className="arrow-2" alt="Arrow" src={arrowIconPointerL} />
          </>
        )}

        <div
          className="overlap-10"
          style={{
            height:
              screenWidth < 1440
                ? "66px"
                : screenWidth >= 1440
                ? "322px"
                : undefined,
            left:
              screenWidth < 1440
                ? "9px"
                : screenWidth >= 1440
                ? "1012px"
                : undefined,
            top:
              screenWidth < 1440
                ? "768px"
                : screenWidth >= 1440
                ? "998px"
                : undefined,
            width:
              screenWidth < 1440
                ? "659px"
                : screenWidth >= 1440
                ? "305px"
                : undefined,
          }}
        >
          {screenWidth < 1440 && (
            <>
              <div className="lorem-ipsum-dolor-9">New products</div>
              <div className="group-5">
                <div className="overlap-group-3">
                  <img className="line-10" alt="Line" src={lineHorizinB} />
                  <img className="star-4" alt="Star" src={starSmall3} />
                </div>
              </div>
            </>
          )}

          {screenWidth >= 1440 && (
            <>
              <SecondaryButton
                className="secondary-button-3"
                secondaryButton={arrowIconSecondary3}
              />
              <img
                className="malicki-m-beser"
                alt="Malicki m beser"
                src={productList4}
              />
              <SecondaryButton
                className="secondary-button-3"
                secondaryButton={arrowIconSecondary3}
              />
            </>
          )}
        </div>
        {screenWidth >= 1440 && (
          <>
            <TextField className="text-field-instance" />
            <TextField className="text-field-2" />
            <TextField className="text-field-3" />
            <TextField className="text-field-4" />
          </>
        )}

        {screenWidth < 1440 && (
          <>
            <div className="text-wrapper-31">Apparel</div>
            <div className="text-wrapper-32">Accessories</div>
            <div className="text-wrapper-33">Best sellers</div>
            <div className="text-wrapper-34">50% off</div>
            <img
              className="zam-nungaray-2"
              alt="Zam nungaray"
              src={productList5}
            />
            <div className="group-wrapper">
              <SecondaryButton className="group-6" />
            </div>
            <SecondaryButton
              className="secondary-button-4"
              secondaryButton={secondaryBtn}
            />
            <div className="overlap-11">
              <img className="element" alt="Element" src={bgFilter} />
              <p className="get-news-about-2">
                <br />
                Get news about articles and updates in your inbox.
              </p>
              <div className="text-wrapper-35">Newslleter</div>
              <div className="text-wrapper-36">NAME</div>
              <div className="text-wrapper-37">EMAIL</div>
              <div className="text-wrapper-38">MESSAGE</div>
              <img className="line-11" alt="Line" src={lineHorizinD} />
              <img className="line-12" alt="Line" src={lineHorizinD} />
              <img className="line-13" alt="Line" src={lineHorizinD} />
              <div className="lorem-ipsum-dolor-10">
                GET <br />
                IN TOUCH
              </div>
              <div className="button-2">
                <div className="overlap-12">
                  <div className="text-wrapper-39">SEND</div>
                </div>
              </div>
              <div className="rectangle-6" />
              <p className="text-wrapper-40">
                Copyright 2022 All Right Reserved By SG
              </p>
            </div>
            <img className="arrow-3" alt="Arrow" src={arrowIconPointerR2} />
            <img className="arrow-4" alt="Arrow" src={arrowIconPointerL2} />
            <TextField className="text-field-5" />
            <TextField className="text-field-6" />
          </>
        )}
      </div>
    </div>
  );
};
