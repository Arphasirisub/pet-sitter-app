/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import sitterlogowhite from "../PublicPicture/sitter-logo-white.svg";

function Footer() {
  return (
    <div
      className="footer"
      css={css`
        background: #000000;
        width: 100%;
        height: 280px;
        text-align: center;
      `}
    >
      <div className="footer__logo">
        <img
          src={sitterlogowhite}
          alt="sitterlogo"
          css={css`
            padding: 80px 0px 0px 0px;
          `}
        />
      </div>
      <div className="footer__text">
        <span
          css={css`
            color: white;
          `}
        >
          Find your perfect pet sitter with us.
        </span>
      </div>
    </div>
  );
}
export default Footer;
