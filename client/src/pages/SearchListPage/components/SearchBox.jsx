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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SearchBox({ searchData, setSearchData, setSitterData, sitterData }) {
  // const {
  //   handleSearchInputChange,
  //   handleExperienceChange,
  //   handleDogChange,
  //   handleCatChange,
  //   handleBirdChange,
  //   handleRabbitChange,
  // } = useSearchData();
  const getSitterDetail = async () => {
    try {
      const result = await axios(
        `http://localhost:4000/sitters?full_name=${searchData.searchInput}&province=${searchData.searchInput}`
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
    <form onSubmit={handleSubmit}>
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
            value={searchData.experience}
            onChange={(e) => {
              handleStateChange("experience", e.target.value);
            }}
          >
            <option value="2years">0-2 Years</option>
            <option value="3years">3-5 Years</option>
            <option value="5years">5+ Years</option>
          </select>

          <div css={buttonContainer}>
            <button
              css={clearButton}
              type="button"
              onClick={handleClearButtonClick}
            >
              Clear
            </button>
            <button type="submit" css={searchButton} onClick={getSitterDetail}>
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SearchBox;
