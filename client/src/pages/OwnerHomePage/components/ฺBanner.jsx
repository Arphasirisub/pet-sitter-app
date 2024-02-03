/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import yellowcircle from "../../../PublicPicture/yellowcircle.png";
import halfbluedonut from "../../../PublicPicture/halfbluedonut.png";
import largegreenstar from "../../../PublicPicture/largegreenstar.png";
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
            <button
              css={figmaButtonStyle}
              onClick={() => {
                navigate("/list");
              }}
            >
              Find A Pet Sitter
            </button>
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
