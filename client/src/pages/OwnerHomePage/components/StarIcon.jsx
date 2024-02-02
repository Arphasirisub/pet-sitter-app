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
    <div css={fiveRatingbox}>
      <p css={numberRating}>5</p>
      <div css={starLayout}>
        {greenStar}
        {greenStar}
        {greenStar}
        {greenStar}
        {greenStar}
      </div>
    </div>
  );
}

export function FourStar() {
  return (
    <div css={fourRatingBox}>
      <p css={numberRating}>4</p>
      <div css={starLayout}>
        {greenStar}
        {greenStar}
        {greenStar}
        {greenStar}
      </div>
    </div>
  );
}

export function ThreeStar() {
  return (
    <div css={threeRatingBox}>
      <p css={numberRating}>3</p>
      <div css={starLayout}>
        {greenStar}
        {greenStar}
        {greenStar}
      </div>
    </div>
  );
}

export function TwoStar() {
  return (
    <div css={twoRatingBox}>
      <p css={numberRating}>2</p>
      <div css={starLayout}>
        {greenStar}
        {greenStar}
      </div>
    </div>
  );
}

export function OneStar() {
  return (
    <div css={oneRatingBox}>
      <p css={numberRating}>1</p>
      <div css={starLayout}>{greenStar}</div>
    </div>
  );
}
