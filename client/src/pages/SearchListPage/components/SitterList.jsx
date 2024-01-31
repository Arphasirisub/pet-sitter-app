/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import locationLogo from "../../../PublicPicture/location.png";
import sitterData from "./data";
import { useNavigate } from "react-router-dom";
import {
    greenStar,
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


function SitterList (){
    const navigate = useNavigate();
    return (
        <div
            css={sitterListCotainer}
            onClick={() => {
              navigate("/detail");
            }}
          >
            {sitterData.map((item, index) => {
              return (
                <div key={index} css={sitterInfoBox}>
                  <img
                    css={imageGalleryStyle}
                    src={item.imagegallery}
                  />
                  <div css={infoLayout}>
                    <div css={nameLayout}>
                      <img css={imgProflie} src={item.profileimg} />
                      <div css={SitterNameContainer}>
                        <p
                          css={css`
                            font-size: 14px;
                            font-weight: 600;
                            margin-top: 2px;
                          `}
                        >
                          {item.sitterName}
                        </p>
                        <p
                          css={css`
                            font-size: 12px;
                            margin-top: -6px;
                          `}
                        >
                          By {item.fullName}
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
                      <p css={addressText}>{item.district},</p>
                      <p css={addressText}>{item.province}</p>
                    </div>
                    <div css={petTypeContainer}>
                      {item.pettype.map((typelist, index) => {
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
    )
}

export default SitterList