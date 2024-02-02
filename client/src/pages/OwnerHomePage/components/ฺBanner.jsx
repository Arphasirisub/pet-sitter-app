/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Banner() {
  return (
    <div
      className="container_banner"
      css={css`
        width: 100%;
        height: 608px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        className="banner_content"
        css={css`
          background-color: rgba(255, 245, 236, 1);
          margin: 0px;
          padding: 0px;
          width: 1280px;
          height: 448px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <h1
          css={css`
            font-weight: 700;
            font-size: 56px;
            text-align: center;
            width: 457px;
            padding: 0;
          `}
        >
          Perfect Pet Sitter For Your Pet
        </h1>
        <button
          css={css`
            background-color: #ff7037;
            width: 168px;
            font-family: "Satoshi", sans-serif;
            font-weight: 700;
            font-size: 16px;
            text-align: center;
            color: white;
            &:hover {
              color: black;
            }
            padding: 12px 24px 12px 24px;
            border-radius: 99px;
            border: none;
            cursor: pointer;
            margin-left: 20px;
            gap: 8px;
          `}
        >
          Find A Pet Sitter
        </button>
      </div>
      <div className="banner_figma">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Banner;
