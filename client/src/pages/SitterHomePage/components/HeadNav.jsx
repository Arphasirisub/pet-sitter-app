import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import marieimg from "../../../PublicPicture/marieimg.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const TopBar = () => {
  const containerHeadNavStyle = css`
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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

  const [img, setImg] = useState("");
  const getImg = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/sitters/sitterProflie`
      );

      setImg(result.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImg();
  }, []);

  return (
    <div className="container_headnav" css={containerHeadNavStyle}>
      {img && <img src={img.profile_img} alt="Profile" css={logoStyle} />}
      {img && <p css={nameStyle}>{img.full_name}</p>}
    </div>
  );
};

export default TopBar;
