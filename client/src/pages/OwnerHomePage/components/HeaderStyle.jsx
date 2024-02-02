/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const greenStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M8.14319 1.42372C8.53185 0.777902 9.46815 0.777901 9.85681 1.42372L12.0731 5.10651C12.2128 5.33853 12.4405 5.504 12.7043 5.56509L16.8918 6.53491C17.6261 6.70498 17.9154 7.59545 17.4213 8.16466L14.6036 11.4106C14.4261 11.6151 14.3391 11.8828 14.3625 12.1526L14.7342 16.4347C14.7994 17.1857 14.0419 17.736 13.3478 17.442L9.39009 15.7653C9.14076 15.6596 8.85924 15.6596 8.60991 15.7653L4.65216 17.442C3.95813 17.736 3.20065 17.1857 3.26582 16.4347L3.63745 12.1526C3.66087 11.8828 3.57387 11.6151 3.39637 11.4106L0.578707 8.16466C0.0845982 7.59545 0.373929 6.70498 1.10824 6.53491L5.29567 5.56509C5.55948 5.504 5.78723 5.33853 5.92685 5.10652L8.14319 1.42372Z"
      fill="#1CCD83"
    />
  </svg>
);

export const containerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const headingStyles = css`
  margin: 40px 0px 80px 70px;
  text-align: start;
  font-weight: 700;
  font-size: 22px;
  color: #3a3b46;
`;

export const seachLishContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  top: 30px;
  width: 100vw;
`;

export const searchBox = css`
  display: flex;
  position: sticky;
  top: 30px;
  flex-direction: column;
  border-radius: 20px;
  width: 350px;
  height: 490px;
  box-shadow: 5px 5px 5px 6px rgba(237, 237, 237, 0.5);
  padding: 24px;
  /* margin: 0px 0px 50px 0px; */
  background-color: white;
  z-index: 1;
  margin-bottom: 30px;
`;

export const searchInputStyle = css`
  border: solid 1px #dcdfed;
  width: 310px;
  height: 30px;
  border-radius: 8px;
  padding: 6px 20px;
  position: relative;

  :focus {
    outline: none;
  }
`;

export const searchIconStyle = css`
  position: absolute;
  margin-top: -34px;
  margin-left: 320px;
  width: 20px;
  height: 20px;
`;

export const text = css`
  font-weight: 700;
  text-align: start;
  font-size: 14px;
  margin: 15px;
  color: #3a3b46;
`;

export const checkBoxLaout = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -10px;
`;

export const checkBoxText = css`
  font-size: 14px;
  margin-top: 11px;
  margin-right: 15px;
`;

export const flexRowRating = css`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 10px;
`;
export const numberRating = css`
  margin-left: 7px;
  color: #7b7e8f;
  margin-right: 7px;
  font-size: 14px;
`;
export const fiveRatingbox = css`
  display: flex;
  flex-direction: row;
  border: solid 1px rgba(226, 226, 226, 0.5);
  width: 140px;
  height: 30px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(226, 226, 226, 0.5);
    border: 1px solid rgba(226, 226, 226, 0.5);
  }
`;

export const fourRatingBox = css`
  display: flex;
  flex-direction: row;
  border: solid 1px rgba(226, 226, 226, 0.5);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 120px;
  height: 30px;

  &:hover {
    background-color: rgba(226, 226, 226, 0.5);
    border: 1px solid rgba(226, 226, 226, 0.5);
  }
`;

export const threeRatingBox = css`
  display: flex;
  flex-direction: row;
  border: solid 1px rgba(226, 226, 226, 0.5);
  width: 95px;
  height: 30px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(226, 226, 226, 0.5);
    border: 1px solid rgba(226, 226, 226, 0.5);
  }
`;

export const twoRatingBox = css`
  display: flex;
  flex-direction: row;
  border: solid 1px rgba(226, 226, 226, 0.5);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 70px;
  height: 30px;

  &:hover {
    background-color: rgba(226, 226, 226, 0.5);
    border: 1px solid rgba(226, 226, 226, 0.5);
  }
`;

export const oneRatingBox = css`
  display: flex;
  flex-direction: row;
  border: solid 1px rgba(226, 226, 226, 0.5);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 30px;

  &:hover {
    background-color: rgba(226, 226, 226, 0.5);
    border: 1px solid rgba(226, 226, 226, 0.5);
  }
`;

export const starLayout = css`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

export const inputStyles = css`
  width: 144px;
  height: 48px;
  padding: 10px;
  border: solid 1px #dcdfed;
  border-radius: 8px;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export const textLogoStyle = css`
  font-size: 88px;
  font-weight: 900;
`;

export const searchButton = css`
  background-color: #ff7037;
  width: 120px;
  font-family: "Satoshi", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: white;
  &:hover {
    color: black;
  }
  padding: 12px 24px 12px 24px;
  border-radius: 99px;
  border: none;
  cursor: pointer;
  margin-left: 20px;
  gap: 8px;
`;

export const containerStyle = css`
  width: 100%;
  height: 820px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const sectionLogoStyle = css`
  text-align: center;
  display: flex;
  justify-content: space-around;
`;

export const logoScale = css`
  width: 428px;
  height: 441;
`;

export const detailScale = css`
  width: 544px;
  height: 352px;
`;

export const detailHeaderText = css`
  margin: 0;
  font-weight: 900;
  font-size: 88px;
  text-align: center;
`;

export const detailDescriptionText = css`
  font-size: 24px;
  font-weight: 700;
  color: rgba(123, 126, 143, 1);
`;

export const ratingStyle = css`
  text-align: left;
  display: flex;
  justify-content: flex-start;
  width: 72px;
  gap: 24px;
`;

export const sectionBarGroupStyle = css`
  width: 1064px;
  height: 168px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const checkBoxStyle = css`
  text-align: left;
  gap: 12px;
  background: #f6f6f9;
  height: 72px;
  display: flex;
  align-items: center;
`;
