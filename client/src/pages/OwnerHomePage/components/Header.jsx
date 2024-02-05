/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import { useSitter } from "../../../contexts/getSitters.jsx";
import {
  FiveStar,
  FourStar,
  ThreeStar,
  TwoStar,
  OneStar,
} from "./StarIcon.jsx";
import {
  text,
  flexRowRating,
  inputStyles,
  searchButton,
  sectionLogoStyle,
  logoScale,
  detailScale,
  detailHeaderText,
  detailDescriptionText,
  sectionBarGroupStyle,
  ratingStyle,
  checkBoxStyle,
  containerHeaderStyle,
  catFootStyle,
  pieceCircleStyle,
  messageImgStyle,
  catCircleStyle,
  largeOrangeStarStyle,
  dogCircleStyle,
  grayCirclrStyle,
  halfGreenCircleStyle,
  checkboxStyles,
} from "./HeaderStyle.jsx";
import dogcircle from "../../../PublicPicture/dogcircle.png";
import graycircle from "../../../PublicPicture/graycircle.png";
import largeorangestar from "../../../PublicPicture/largeorangestar.png";
import halfgreencircle from "../../../PublicPicture/halfgreencircle.png";
import catfoot from "../../../PublicPicture/catfoot.png";
import messageimg from "../../../PublicPicture/messageimg.png";
import catcircle from "../../../PublicPicture/catcircle.png";
import piececircle from "../../../PublicPicture/piececircle.png";

function Header() {
  const navigate = useNavigate();

  const { searchInput, handleStateChange, getSitters, setSearchInput } =
    useSitter();

  const handleSubmit = async () => {
    getSitters();
  };
  return (
    <div className="container_header" css={containerHeaderStyle}>
      <div className="section__logogroup" css={sectionLogoStyle}>
        <div className="logogroup_left" css={logoScale}>
          <img css={catFootStyle} src={catfoot} alt="catfoot" />
          <img css={pieceCircleStyle} src={piececircle} alt="pricecircle" />
          <img css={messageImgStyle} src={messageimg} alt="messageimg" />
          <img css={catCircleStyle} src={catcircle} alt="catcircle" />
        </div>

        <div className="logogroup_detail" css={detailScale}>
          <p css={detailHeaderText}>
            Pet Sitter
            <span
              css={css`
                color: rgba(255, 112, 55, 1);
              `}
            >
              ,
            </span>
            <br />
            Perfect
            <span
              css={css`
                color: rgba(118, 208, 252, 1);
              `}
            >
              ,
            </span>
            <br />
            For Your Pet
            <span
              css={css`
                color: rgba(255, 202, 98, 1);
              `}
            >
              .
            </span>
          </p>
          <h3 css={detailDescriptionText}>
            Find your perfect pet sitter with us.
          </h3>
        </div>

        <div className="logogroup_right" css={logoScale}>
          <img
            css={largeOrangeStarStyle}
            src={largeorangestar}
            alt="largeoranhestar"
          />
          <img css={dogCircleStyle} src={dogcircle} alt="dogcircle" />
          <img css={grayCirclrStyle} src={graycircle} alt="graycircle" />
          <img
            css={halfGreenCircleStyle}
            src={halfgreencircle}
            alt="halfgreencircle"
          />
        </div>
      </div>

      <div className="section__bargroup" css={sectionBarGroupStyle}>
        <div className="bargroup_checkbox" css={checkBoxStyle}>
          <span css={text}>Pet Type: </span>
          <FormControlLabel
            control={
              <Checkbox
                id="animalcategory1"
                name="animalcategory1"
                value={searchInput.dog}
                sx={checkboxStyles}
                onChange={(e) => {
                  handleStateChange("dog", e.target.checked);
                }}
              />
            }
            label="Dog"
          />

          <FormControlLabel
            control={
              <Checkbox
                id="animalcategory2"
                name="animalcategory2"
                value={searchInput.cat}
                sx={checkboxStyles}
                onChange={(e) => {
                  handleStateChange("cat", e.target.checked);
                }}
              />
            }
            label="Cat"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="animalcategory3"
                name="animalcategory3"
                value={searchInput.bird}
                sx={checkboxStyles}
                onChange={(e) => {
                  handleStateChange("bird", e.target.checked);
                }}
              />
            }
            label="Bird"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="animalcategory4"
                name="animalcategory4"
                value={searchInput.rabbit}
                sx={checkboxStyles}
                onChange={(e) => {
                  handleStateChange("rabbit", e.target.checked);
                }}
              />
            }
            label="Rabbit"
          />
        </div>

        <div className="bargroup_rating" css={ratingStyle}>
          <span css={text}>Rating:</span>
          <div css={flexRowRating}>
            <div
              onClick={() => {
                handleStateChange("rating", 5);
              }}
            >
              <FiveStar />
            </div>
            <div
              onClick={() => {
                handleStateChange("rating", 4);
              }}
            >
              <FourStar />
            </div>
          </div>
          <div css={flexRowRating}>
            <div
              onClick={() => {
                handleStateChange("rating", 3);
              }}
            >
              <ThreeStar />
            </div>
            <div
              onClick={() => {
                handleStateChange("rating", 2);
              }}
            >
              <TwoStar />
            </div>
            <div
              onClick={() => {
                handleStateChange("rating", 1);
              }}
            >
              <OneStar />
            </div>
          </div>

          <span css={text}>Experience:</span>
          <select
            css={inputStyles}
            id="experience"
            name="experience"
            value={searchInput.experience}
            onChange={(e) => {
              handleStateChange("experience", e.target.value);
            }}
          >
            <option value="">see all</option>
            <option value="0-2">0-2 Years</option>
            <option value="3-5">3-5 Years</option>
            <option value="5-9">5+ Years</option>
          </select>

          <button
            css={searchButton}
            onClick={() => {
              handleSubmit();
              navigate("/list");
            }}
          >
            search
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
