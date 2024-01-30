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
      `}
    >
      <div className="navbar__logo">
        <img src={sitterlogo} alt="sitterlogo" />
      </div>
      <div className="navbar__button">
        <button
          className="navbar__button--login"
          css={css`
            margin: 0 20px 0 0;
          `}
        >
          <Link
            to="/login"
            css={css`
              color: black;
            `}
          >
            Login
          </Link>
        </button>
        <button className="navbar__button--findpet">Find A Pet Sitter</button>
      </div>
    </div>
  );
}
export default Navbar;
