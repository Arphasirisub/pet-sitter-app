/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import yellowcircle from "../../../PublicPicture/yellowcircle.png";
import halfbluedonut from "../../../PublicPicture/halfbluedonut.png";
import largegreenstar from "../../../PublicPicture/largegreenstar.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  bannerContentStyle,
  bannerTopicTextStyle,
  bannerfigmaStyle,
  containerBannerStyle,
  figmaButtonStyle,
  figmaDescriptionStyle,
  figmaLeftStyle,
  figmaRightStyle,
  halfBlueDonutStyle,
  largeGreenStarStyle,
  yellowCircleStyle,
} from "./BannerStyle";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className="container_banner" css={containerBannerStyle}>
      <div className="banner_content" css={bannerContentStyle}>
        <div className="banner_figma" css={bannerfigmaStyle}>
          <div className="figma_left" css={figmaLeftStyle}>
            <img
              css={halfBlueDonutStyle}
              src={halfbluedonut}
              alt="halfbluedonut"
            />
          </div>

          <div className="figma_des" css={figmaDescriptionStyle}>
            <h1 css={bannerTopicTextStyle}>Perfect Pet Sitter For Your Pet</h1>
            <Button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={() => {
                navigate("/list");
              }}
              css={css`
                background-color: #ff7037;
                font-family: "Satoshi", sans-serif;
                font-weight: 700;
                font-size: 16px;
                text-align: center;
                color: white;
                font-size: 12px;
                padding: 10px; /* Adjust padding for responsiveness */
                border-radius: 20px; /* Adjust border-radius for responsiveness */
                transition: background-color 0.3s ease;

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
            </Button>
          </div>

          <div className="figma_right" css={figmaRightStyle}>
            <img
              css={yellowCircleStyle}
              src={yellowcircle}
              alt="yellowcircle"
            />
            <img
              css={largeGreenStarStyle}
              src={largegreenstar}
              alt="largegreenstar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
