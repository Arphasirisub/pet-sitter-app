/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  greenStar,
  numberRating,
  fiveRatingbox,
  fourRatingBox,
  threeRatingBox,
  twoRatingBox,
  oneRatingBox,
  starLayout,
} from "./HeaderStyle.jsx";

export function FiveStar() {
  return (
    <button css={fiveRatingbox}>
      <p css={numberRating}>5</p>
      <div css={starLayout}>
        {greenStar}
        {greenStar}
        {greenStar}
        {greenStar}
        {greenStar}
      </div>
    </button>
  );
}

export function FourStar() {
  return (
    <button css={fourRatingBox}>
      <p css={numberRating}>4</p>
      <div css={starLayout}>
        {greenStar}
        {greenStar}
        {greenStar}
        {greenStar}
      </div>
    </button>
  );
}

export function ThreeStar() {
  return (
    <button css={threeRatingBox}>
      <p css={numberRating}>3</p>
      <div css={starLayout}>
        {greenStar}
        {greenStar}
        {greenStar}
      </div>
    </button>
  );
}

export function TwoStar() {
  return (
    <button css={twoRatingBox}>
      <p css={numberRating}>2</p>
      <div css={starLayout}>
        {greenStar}
        {greenStar}
      </div>
    </button>
  );
}

export function OneStar() {
  return (
    <button css={oneRatingBox}>
      <p css={numberRating}>1</p>
      <div css={starLayout}>{greenStar}</div>
    </button>
  );
}
