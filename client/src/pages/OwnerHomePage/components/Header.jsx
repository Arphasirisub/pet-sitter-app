/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
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
  const [experience, setExperience] = useState("");

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
            Pet Sitter, Perfect,
            <br />
            For Your Pet.
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
                value="dog"
                sx={{
                  "&.Mui-checked": {
                    color: "#FF7037", // Checked color
                  },
                  "&:hover": {
                    color: "#FFB899",
                  },
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
                value="cat"
                sx={{
                  "&.Mui-checked": {
                    color: "#FF7037", // Checked color
                  },
                  "&:hover": {
                    color: "#FFB899",
                  },
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
                value="bird"
                sx={{
                  "&.Mui-checked": {
                    color: "#FF7037", // Checked color
                  },
                  "&:hover": {
                    color: "#FFB899",
                  },
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
                value="rabbit"
                sx={{
                  "&.Mui-checked": {
                    color: "#FF7037", // Checked color
                  },
                  "&:hover": {
                    color: "#FFB899",
                  },
                }}
              />
            }
            label="Rabbit"
          />
        </div>

        <div className="bargroup_rating" css={ratingStyle}>
          <span css={text}>Rating:</span>
          <div css={flexRowRating}>
            <FiveStar />
            <FourStar />
            <ThreeStar />
            <TwoStar />
            <OneStar />
          </div>

          <span css={text}>Experience:</span>
          <select
            css={inputStyles}
            id="experience"
            name="experience"
            value={experience}
            onChange={(e) => {
              setExperience(e.target.value);
            }}
          >
            <option value="2years">0-2 Years</option>
            <option value="3years">3-5 Years</option>
            <option value="5years">5+ Years</option>
          </select>

          <button
            css={searchButton}
            onClick={() => {
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
