/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const bookingContainer = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100vw;
`;
export const titleSytle = css`
  display: flex;
  font-weight: 600;
  margin: 40px;
`;

export const boxContainer = css`
  display: flex;
  flex-direction: column;
  border: solid 1px #e8e9f3;
  width: 90%;
  height: 255px;
  border-radius: 15px;
  margin: 15px 40px;

  &:hover{
    border-color: #76d0fc;
  }
`;

export const rowLayout = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px;
`;

export const imageProflie = css`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  margin-left: 10px;
`;
export const ownerNameContainer = css`
  display: flex;
  flex-direction: column;
  margin: 4px 0px 0px -500px;
`;
export const tradeNameStyle = css`
  margin: 0px;
  font-weight: 600;
  font-size: 15px;
`;

export const fontsStyle = css`
  font-size: 13px;
  margin-top: 4px;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const transactionStyle = css`
  margin: 4px;
  font-size: 12px;
  margin-left: 12px;
  color: #c2c5d2;
`;
export const statusStyle = css`
  margin-top: 7px;
  font-size: 12px;
  margin-left: auto;
`;

export const line = css`
  border: solid 0.5px #e8e9f3;
  width: 95%;
  margin-top: -10px;
`;

export const dateTimeRowLayout = css`
  display: flex;
  flex-direction: row;
  margin: 0px 25px 20px 30px;
  justify-content: space-between;
`;

export const dateTimeTitle = css`
  font-size: 13px;
  color: #7b7e8f;
  margin-bottom: 5px;
`;
export const dateTimeFont = css`
  font-size: 13px;
  color: #3a3b46;
  font-weight: 500;
`;

export const perpendicular = css`
  border: solid 0.5px #dcdfed;
  height: 60px;
  width: 0px;
  margin: 0px;
`;

export const detailFont = css`
  font-size: 13px;
  color: #3a3b46;
  font-weight: 500;
  margin-top: 0px;
`;

export const detailBox = css`
  display: flex;
  flex-direction: column;
  margin-right: 180px;
  margin-left: -45px;
`;

export const statusBoxContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 25%;
  background-color: #f6f6f9;
  margin-left: 25px;
  border-radius: 10px;
`;

export const statusBoxFont = css`
  margin: 15px 40px;
  font-size: 13px;
  color: #78797f;
`;
