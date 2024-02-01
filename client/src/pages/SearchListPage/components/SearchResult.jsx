/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import locationLogo from "../../../PublicPicture/location.png";
// import { useState, useEffect } from "react";
// import axios from "axios";
import {
  greenStar,
  rightbox,
  starLayout,
  sitterListCotainer,
  sitterInfoBox,
  SitterNameContainer,
  infoLayout,
  nameLayout,
  locationLayout,
  petTypeIcon,
  petTypeContainer,
  imgProflie,
  dogIconStyle,
  catIconStyle,
  rabbitIconStyle,
  birdIconStyle,
  addressText,
  imageGalleryStyle,
} from "./Style.jsx";

function SearchResult({sitterData,setSitterData}) {

  const navigate = useNavigate();

  return (
    <div css={rightbox}>
      <div css={sitterListCotainer}>
        {sitterData.map((item, index) => {
          return (
            <div
              key={index}
              css={sitterInfoBox}
              onClick={() => {
                navigate("/detail");
              }}
            >
              <img css={imageGalleryStyle} src={item.image_gallery[0]} />
              <div css={infoLayout}>
                <div css={nameLayout}>
                  <img css={imgProflie} src={item.profile_img} />
                  <div css={SitterNameContainer}>
                    <p
                      css={css`
                        font-size: 14px;
                        font-weight: 600;
                        margin-top: 2px;
                      `}
                    >
                      {item.trade_name}
                    </p>
                    <p
                      css={css`
                        font-size: 12px;
                        margin-top: -6px;
                      `}
                    >
                      By {item.full_name}
                    </p>
                  </div>

                  <div css={starLayout}>
                    {greenStar}
                    {greenStar}
                    {greenStar}
                    {greenStar}
                    {greenStar}
                  </div>
                </div>

                <div css={locationLayout}>
                  <img
                    css={css`
                      width: 20px;
                      height: 20px;
                    `}
                    src={locationLogo}
                  />
                  <p css={addressText}>
                    {item.district}, {item.province}
                  </p>
                </div>

                <div css={petTypeContainer}>
                  {item.pet_type.map((typelist, index) => {
                    return (
                      <div
                        key={index}
                        css={[
                          petTypeIcon,
                          typelist === "Dog"
                            ? dogIconStyle
                            : typelist === "Bird"
                            ? birdIconStyle
                            : typelist === "Rabbit"
                            ? rabbitIconStyle
                            : typelist === "Cat"
                            ? catIconStyle
                            : null,
                        ]}
                      >
                        {typelist}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
