/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const headingLayout = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1080px;
`;
export const headingContainer = css`
  font-weight: 700;
  font-size: 24px;
`;

export const upgateButton = css`
  width: 110px;
  height: 40px;
  border-radius: 60px;
  background-color: #ff7038;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;

export const basicInfoContainer = css`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  margin-top: 25px;
  margin-bottom: 40px;
  padding: 25px 30px 30px 60px;
`;

export const headingStyle = css`
  font-weight: 600;
  font-size: 18px;
  color: #aeb1c3;
`;

export const imgContainer = css`
  display: flex;
  position: relative;
`;

export const profileImg = css`
  width: 230px;
  height: 230px;
  margin-top: 30px;
  border-radius: 100%;
`;

export const importButtonStyle = css`
  position: absolute;
  margin-left: -60px;
  margin-top: 200px;
  cursor: pointer;
`;

export const inputContainer = css`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  justify-content: space-between;
  width: 1000px;
`;

export const inputLayout = css`
  display: flex;
  flex-direction: column;
`;

export const input = css`
  width: 450px;
  height: 45px;
  border: 1px solid #e4e5f1;
  border-radius: 7px;
  margin-top: 10px;
  padding-left: 10px;

  &:focus {
    border: 1px solid #ff7038;
    outline: none;
  }
`;

export const dropdownInput = css`
  width: 465px;
  height: 50px;
  border: 1px solid #e4e5f1;
  border-radius: 7px;
  margin-top: 10px;
  &:focus {
    border: 1px solid #ff7038;
    outline: none; 
  }
`;

export const introductionTextarea = css`
  width: 1000px;
  height: 180px;
  border: 1px solid #e4e5f1;
  border-radius: 7px;
  margin-top: 10px;
  padding: 10px 0px 0px 10px;
  &:focus {
    border: 1px solid #ff7038;
    outline: none;
  }
`;

export const introductionTitle = css`
  margin-top: 30px;
`;
