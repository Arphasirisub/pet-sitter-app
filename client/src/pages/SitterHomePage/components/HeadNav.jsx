import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const TopBar = () => {
  const topBarStyle = css`
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    width: 1630px;
    height: 72px;
    padding: 16px;
    display: flex;
    align-items: center;
  `;

  const logoStyle = css`
    width: 40px;
    height: 40px;
    border-radius: 999px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  `;

  const navigationStyle = css`
    display: flex;
    gap: 16px;
  `;

  const fontStyle = css`
    text-decoration: none;
    color: #333333;
    font-size: 16px;
    font-weight: 500;
  `;

  const proFilebox = css`
    display: flex;
    width: 1200px;
    height: 72px;
    padding: 16px 60px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  `;
  return (
    <div css={topBarStyle}>
      <img src="/src/PublicPicture/logositter.png" alt="Logo" css={logoStyle} />
      <div css={proFilebox}>
        <p css={fontStyle}>Name Surname</p>
      </div>
    </div>
  );
};

export default TopBar;
