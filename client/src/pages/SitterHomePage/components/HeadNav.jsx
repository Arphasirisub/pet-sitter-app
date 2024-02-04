import React, { useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

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
  const [img, setImg] = useState("");
  const param = useParams();
  const getImg = async () => {
    try {
      console.log(param.id);
      const result = await axios.get(
        `http://localhost:4000/sitters/${param.id}`
      );

      setImg(result.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImg();
  }, [param.id]);

  return (
    <div css={topBarStyle}>
      {img && <img src={img.profile_img} alt="Profile" css={logoStyle} />}
      <div css={proFilebox}>
        {img && <p css={fontStyle}>{img.full_name}</p>}
      </div>
    </div>
  );
};

export default TopBar;
