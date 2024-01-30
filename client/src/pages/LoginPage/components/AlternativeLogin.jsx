/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"; // Import React
import facebook from "../../../PublicPicture/facebook.png";
import google from "../../../PublicPicture/google.png";
import FacebookLogin from "./FacebookLogin";

export function AlternativeLogin() {
  return (
    <>
      <div
        css={css`
          display: flex;
          align-items: center;
          text-align: center;
        `}
      >
        <div
          css={css`
            flex-grow: 1;
            border-top: 1px solid rgb(123, 126, 143); /* Change the color as needed */
            margin: 0 10px;
          `}
        ></div>
        <span
          css={css`
            color: rgb(123, 126, 143);
          `}
        >
          Or Continue With
        </span>
        <div
          css={css`
            flex-grow: 1;
            border-top: 1px solid rgb(123, 126, 143); /* Change the color as needed */
            margin: 0 10px;
          `}
        ></div>
      </div>
      <div
        css={css`
          width: 30%;
          display: flex;
          justify-content: space-between;
          &:hover {
            cursor: pointer;
          }
        `}
      >
        <img src={facebook} alt="Facebook" />

        <img src={google} alt="Google" />
      </div>
    </>
  );
}
