/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Checkbox from "@mui/material/Checkbox";
import searchIcon from "../../../PublicPicture/searchIcon.png";
import { useEffect } from "react";
// import useSearchData from "./SearchDataFunc.jsx";
import {
  FiveStar,
  FourStar,
  ThreeStar,
  TwoStar,
  OneStar,
} from "./StarIcon.jsx";
import {
  searchBox,
  searchInputStyle,
  searchIconStyle,
  text,
  checkBoxLaout,
  checkBoxText,
  flexRowRating,
  inputStyles,
  buttonContainer,
  clearButton,
  searchButton,
  sticky,
} from "./Style.jsx";
import axios from "axios";
import axios from "axios";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SearchBox({ searchData, setSearchData, setSitterData, sitterData }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(searchData.experience);

    const result = await axios(
      `http://localhost:4000/sitters?full_name=${searchData.searchInput}&experience=${searchData.experience}&rating=${searchData.rating}&dog=${searchData.dog}&cat=${searchData.cat}&bird=${searchData.bird}&rabbit=${searchData.rabbit}`
    );
    console.log(result);
    setSitterData(result.data.data);
  };

  const handleClearButtonClick = () => {
    setSearchData({
      experience: "",
      searchInput: "",
      dog: false,
      cat: false,
      bird: false,
      rabbit: false,
      rating: 0,
    });
    setSitterData([]);
  };

  const handleStateChange = (fieldName, value) => {
    setSearchData((prevSearchData) => ({
      ...prevSearchData,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    console.log(searchData);
  }, [searchData]);

  return (
    <form css={sticky} onSubmit={handleSubmit}>
      <div>
        <div css={searchBox}>
          <label css={text}>Search</label>
          <div>
            <input
              type="text"
              css={searchInputStyle}
              value={searchData.searchInput}
              onChange={(e) => {
                handleStateChange("searchInput", e.target.value);
              }}
            />
            <img css={searchIconStyle} src={searchIcon} alt="Search Icon" />
          </div>

          <p css={text}>Pet Type:</p>
          <div css={checkBoxLaout}>
            <Checkbox
              {...label}
              color="default"
              checked={searchData.dog}
              onChange={(e) => {
                handleStateChange("dog", e.target.checked);
              }}
            />
            <label css={checkBoxText}>Dog</label>
            <Checkbox
              {...label}
              color="default"
              checked={searchData.cat}
              onChange={(e) => {
                handleStateChange("cat", e.target.checked);
              }}
            />
            <label css={checkBoxText}>Cat</label>
            <Checkbox
              {...label}
              color="default"
              checked={searchData.bird}
              onChange={(e) => {
                handleStateChange("bird", e.target.checked);
              }}
            />
            <label css={checkBoxText}>Bird</label>
            <Checkbox
              {...label}
              color="default"
              checked={searchData.rabbit}
              onChange={(e) => {
                handleStateChange("rabbit", e.target.checked);
              }}
            />
            <label css={checkBoxText}>Rabbit</label>
          </div>
          <label css={text}>Rating:</label>
          <div css={flexRowRating}>
            <div
              onClick={() => {
                handleStateChange("rating", 5);
              }}
            >
              <FiveStar />
            </div>
            <div
              onClick={() => {
                handleStateChange("rating", 4);
              }}
            >
              <FourStar />
            </div>
          </div>
          <div css={flexRowRating}>
            <div
              onClick={() => {
                handleStateChange("rating", 3);
              }}
            >
              <ThreeStar />
            </div>
            <div
              onClick={() => {
                handleStateChange("rating", 2);
              }}
            >
              <TwoStar />
            </div>
            <div
              onClick={() => {
                handleStateChange("rating", 1);
              }}
            >
              <OneStar />
            </div>
          </div>

          <p css={text}>Experience:</p>

          <select
            css={inputStyles}
            id="experience"
            name="experience"
            value={searchData.experience}
            onChange={(e) => {
              handleStateChange("experience", e.target.value);
            }}
          >
            <option value="">see all</option>
            <option value="0-2">0-2 Years</option>
            <option value="3-5">3-5 Years</option>
            <option value="5-9">5+ Years</option>
          </select>

          <div css={buttonContainer}>
            <button
              css={clearButton}
              type="button"
              onClick={handleClearButtonClick}
            >
              Clear
            </button>
            <button type="submit" css={searchButton}>
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SearchBox;
