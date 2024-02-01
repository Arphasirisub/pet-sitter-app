/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import searchIcon from "../../../PublicPicture/searchIcon.png";
import locationLogo from "../../../PublicPicture/location.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FiveStar,
  FourStar,
  ThreeStar,
  TwoStar,
  OneStar,
} from "./StarIcon.jsx";
import {
  greenStar,
  rightbox,
  containerStyles,
  headingStyles,
  seachLishContainer,
  searchBox,
  searchInputStyle,
  searchIconStyle,
  text,
  checkBoxLaout,
  checkBoxText,
  flexRowRating,
  starLayout,
  inputStyles,
  buttonContainer,
  clearButton,
  searchButton,
  paginationContainer,
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
import axios from "axios";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SearchBody() {
  const navigate = useNavigate();

  const [experience, setExperience] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [dog, setDog] = useState(false);
  const [cat, setCat] = useState(false);
  const [bird, setBird] = useState(false);
  const [rabbit, setRabbit] = useState(false);
  const [sitterData, setSitterData] = useState([]);

  const getSitterDetail = async () => {
    try {
      const result = await axios(
        `http://localhost:4000/sitters?full_name=${searchInput}&province=${searchInput}`
      );
      setSitterData(result.data.data?.data || []);
      console.log(sitterData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSitterDetail();
  }, []);

  const handleSubmit = (e) => {
    const data = { searchInput, dog, cat, bird, rabbit, experience };
    e.preventDefault();
    data;
  };

  const handleClearButtonClick = () => {
    setSearchInput(""),
      setExperience(""),
      setCat(false),
      setDog(false),
      setBird(false),
      setRabbit(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div css={containerStyles}>
        <p css={headingStyles}>Search For Pet Sitter</p>

        <div css={seachLishContainer}>
          <div>
            <div css={searchBox}>
              <label css={text}>Search</label>
              <div>
                <input
                  type="text"
                  css={searchInputStyle}
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                />
                <img css={searchIconStyle} src={searchIcon} />
              </div>

              <p css={text}>Pet Type:</p>
              <div css={checkBoxLaout}>
                <Checkbox
                  {...label}
                  color="default"
                  checked={dog}
                  onChange={(e) => {
                    setDog(e.target.checked);
                  }}
                />
                <label css={checkBoxText}>Dog</label>
                <Checkbox
                  {...label}
                  color="default"
                  checked={cat}
                  onChange={(e) => {
                    setCat(e.target.checked);
                  }}
                />
                <label css={checkBoxText}>Cat</label>
                <Checkbox
                  {...label}
                  color="default"
                  checked={bird}
                  onChange={(e) => {
                    setBird(e.target.checked);
                  }}
                />
                <label css={checkBoxText}>Bird</label>
                <Checkbox
                  {...label}
                  color="default"
                  checked={rabbit}
                  onChange={(e) => {
                    setRabbit(e.target.checked);
                  }}
                />
                <label css={checkBoxText}>Rabbit</label>
              </div>
              <label css={text}>Rating:</label>
              <div css={flexRowRating}>
                <FiveStar />
                <FourStar />
              </div>
              <div css={flexRowRating}>
                <ThreeStar />
                <TwoStar />
                <OneStar />
              </div>

              <p css={text}>Experience:</p>

              <select
                css={inputStyles}
                id="experience"
                name="experience"
                value={experience}
                onChange={(e) => {
                  setExperience(e.target.value);
                }}
              >
                <option value="2years">0-2 Years</option>
                <option value="3years">3-5 Years</option>
                <option value="5years">5+ Years</option>
              </select>

              <div css={buttonContainer}>
                <button css={clearButton} onClick={handleClearButtonClick}>
                  Clear
                </button>
                <button
                  type="submit"
                  css={searchButton}
                  onClick={getSitterDetail}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          {/*-------- Sitter Detail Card --------*/}
          <div css={rightbox}>
            <div
              css={sitterListCotainer}
              onClick={() => {
                navigate("/detail");
              }}
            >
              {sitterData.map((item, index) => {
                console.log("Item:", item);
                return (
                  <div key={index} css={sitterInfoBox}>
                    <img css={imageGalleryStyle} src={item.image_gallery} />
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
        </div>

        <div css={paginationContainer}>
          <Stack spacing={2}>
            <Pagination count={10} />
          </Stack>
        </div>
      </div>
    </form>
  );
}
export default SearchBody;
