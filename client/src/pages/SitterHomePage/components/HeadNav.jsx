import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import marieimg from "../../../PublicPicture/marieimg.png";

const TopBar = () => {
  const containerHeadNavStyle = css`
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    width: 1200px;
    height: 72px;
    padding: 0px 60px;
    display: flex;
    align-items: center;
    gap: 8px;
  `;

  const logoStyle = css`
    width: 40px;
    height: 40px;
    border-radius: 999px;
  `;

  const nameStyle = css`
    color: rgba(58, 59, 70, 1);
    font-size: 16px;
    font-weight: 500;
  `;

  return (
    <div className="container_headnav" css={containerHeadNavStyle}>
      <img src={marieimg} alt="Logo" css={logoStyle} />
      <p css={nameStyle}>Name Surname</p>
    </div>
  );
};

export default TopBar;
