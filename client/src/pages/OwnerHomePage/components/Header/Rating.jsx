/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  text,
  flexRowRating,
  inputStyles,
  searchButton,
  ratingStyle,
} from "./HeaderStyle.jsx";
import { useSitter } from "../../../../contexts/getSitters";
import {
  FiveStar,
  FourStar,
  ThreeStar,
  TwoStar,
  OneStar,
} from "./StarIcon.jsx";
import { useNavigate } from "react-router-dom";

function RatingDropdown() {
  const { searchInput, handleStateChange, getSitters } = useSitter();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    getSitters();
  };

  return (
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
  );
}
export default RatingDropdown;
