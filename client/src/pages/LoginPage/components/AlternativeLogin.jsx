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
          width: 30%; /* Ensure the container takes up the full width */
        `}
      >
        <div
          css={css`
            flex-grow: 1;
            border-top: 1px solid rgb(123, 126, 143);
            margin: 0 10px;
          `}
        ></div>
        <div
          css={css`
            color: rgb(123, 126, 143);
          `}
        >
          Or Continue With
        </div>
        <div
          css={css`
            flex-grow: 1;
            border-top: 1px solid rgb(123, 126, 143);
            margin: 0 10px;
          `}
        ></div>
      </div>

      <div
        css={css`
          width: 30%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
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
