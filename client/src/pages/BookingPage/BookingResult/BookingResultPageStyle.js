/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const buttonBookingResult = {
  width: "150px",
  height: "50px",
  backgroundColor: "#ff7037",
  color: "white",
  borderRadius: 20,
  "&:hover": {
    backgroundColor: "#fff1ec",
    color: "#ff7037",
  },
};
export const bookingResultContainer = {
  width: "100%",
  height: "950px",
  justifyContent: "space-between",
  backgroundColor: "#efeff8",
};

export const bookingResultHeaderText = {
  fontSize: "38px",
  color: "white",
  fontWeight: "bold",
  marginBottom: "5px",
};

export const bookingResultBlackText = {
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "5px",
};

export const bookingResultGreyText = {
  fontSize: "16px",
  color: "#7B7E8F",
  fontWeight: "bold",
  marginBottom: "5px",
};

export const resultHeader = css`
  width: 100%;
  background-color: white;
  box-shadow: 5px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const resultBoxMain = css`
  padding: 30px;
  background-color: black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  text-align: center;
`;

export const resultBoxContent = css`
  padding: 30px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
