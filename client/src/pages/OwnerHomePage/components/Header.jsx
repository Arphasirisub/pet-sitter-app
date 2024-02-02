/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import DestuctCheckbox from "./destuctureCheckbox.jsx";
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
  textLogoStyle,
  inputStyles,
  searchButton,
  containerStyle,
  sectionLogoStyle,
  logoScale,
  detailScale,
  detailHeaderText,
  detailDescriptionText,
  sectionBarGroupStyle,
  ratingStyle,
  checkBoxStyle,
} from "./HeaderStyle.jsx";

function Header() {
  const [experience, setExperience] = useState("");
  return (
    <div className="container_header" css={containerStyle}>
      <div className="section__logogroup" css={sectionLogoStyle}>
        <div className="logogroup_left" css={logoScale}>
          A lots Logo
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
          A lots Logo
        </div>
      </div>

      <div className="section__bargroup" css={sectionBarGroupStyle}>
        <div className="bargroup_checkbox" css={checkBoxStyle}>
          <span css={text}>Pet Type: </span>
          <DestuctCheckbox />
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

          <button css={searchButton}>search</button>
        </div>
      </div>
    </div>
  );
}
export default Header;
