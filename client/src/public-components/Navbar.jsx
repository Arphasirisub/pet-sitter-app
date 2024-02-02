/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import sitterlogo from "../PublicPicture/sitter-logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div
      className="navbar"
      css={css`
        display: flex;
        justify-content: space-between;
        padding: 0 80px 0 80px;
        margin: 15px 0 15px 0;
        height: 80px;
      `}
    >
      <div className="navbar__logo">
        <img src={sitterlogo} alt="sitterlogo" />
      </div>
      <div className="navbar__button">
        <button
          className="navbar__button--login"
          css={css`
            margin: 0 32px 0 0;
            border: none;
            background: none;
          `}
        >
          <Link
            to="/login"
            css={css`
              font-family: "Satoshi", sans-serif;
              font-weight: 500;
              color: black;
              text-decoration: none;
            `}
          >
            Login
          </Link>
        </button>
        <button
          className="navbar__button--findpet"
          css={css`
            background-color: #ff7037;
            font-family: "Satoshi", sans-serif;
            font-weight: 700;
            color: white;
            &:hover {
              color: black;
            }
            padding: 12px 24px 12px 24px;
            border-radius: 99px;
            border: none;
            cursor: pointer;
          `}
        >
          Find A Pet Sitter
        </button>
      </div>
    </div>
  );
}
export default Navbar;
