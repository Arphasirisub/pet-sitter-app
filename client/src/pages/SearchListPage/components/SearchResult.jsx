/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import locationLogo from "../../../PublicPicture/location.png";
import React from "react";
import { useSitter } from "../../../contexts/getSitters.jsx";
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
  flip,
} from "./Style.jsx";
import CircularProgress from "@mui/material/CircularProgress";

//<CircularProgress size={50} color="primary" />
function SearchResult() {
  const navigate = useNavigate();
  const { searchResult } = useSitter();

  return (
    <div css={rightbox}>
      <div css={sitterListCotainer}>
        {searchResult.isLoading ? (
          <div css={sitterInfoBox}>
            <CircularProgress size={50} color="warning" />
          </div>
        ) : (
          searchResult.result &&
          searchResult.result.map((item, index) => (
            <div
              key={index}
              css={sitterInfoBox}
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
            >
              <img
                css={imageGalleryStyle}
                src={
                  item.image_gallery && item.image_gallery.length > 0
                    ? item.image_gallery[0]
                    : ""
                }
              />
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
                  <div css={flip}>
                    <div css={starLayout}>
                      {Array.from({ length: item.rating }, (_, index) => (
                        <React.Fragment key={index}>
                          {greenStar || 0}
                        </React.Fragment>
                      ))}
                    </div>
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
                    {item.district || null}, {item.province || null}
                  </p>
                </div>

                <div css={petTypeContainer}>
                  {item.pet_type &&
                    item.pet_type.map((typelist, index) => (
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
                        {typelist || null}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchResult;
