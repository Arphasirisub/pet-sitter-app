/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import searchIcon from "../../../PublicPicture/searchIcon.png";
import { useEffect, useState } from "react";
import SitterList from "./SitterList.jsx";

import {
  greenStar,
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
  numberRating,
  fiveRatingbox,
  fourRatingBox,
  threeRatingBox,
  twoRatingBox,
  oneRatingBox,
  starLayout,
  inputStyles,
  buttonContainer,
  clearButton,
  searchButton,
  paginationContainer,
} from "./Style.jsx";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SearchBody() {
  const [experience, setExperience] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [dog, setDog] = useState(false);
  const [cat, setCat] = useState(false);
  const [bird, setBird] = useState(false);
  const [rabbit, setRabbit] = useState(false);

  useEffect(() => {
    searchInput;
  }, [searchInput, experience, searchInput]);

  const handdleSubmit = (e) => {
    e.preventDefault();
    alert("Submited");
  };

  const handleClearButtonClick = (e) => {
    e.preventDefault();
    setSearchInput(""),
      setExperience(""),
      setCat(false),
      setDog(false),
      setBird(false),
      setRabbit(false);
  };

  return (
    <form onSubmit={handdleSubmit}>
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
                <div css={fiveRatingbox}>
                  <p css={numberRating}>5</p>
                  <div css={starLayout}>
                    {greenStar}
                    {greenStar}
                    {greenStar}
                    {greenStar}
                    {greenStar}
                  </div>
                </div>
                <div css={fourRatingBox}>
                  <p css={numberRating}>4</p>
                  <div css={starLayout}>
                    {greenStar}
                    {greenStar}
                    {greenStar}
                    {greenStar}
                  </div>
                </div>
              </div>
              <div css={flexRowRating}>
                <div css={threeRatingBox}>
                  <p css={numberRating}>3</p>
                  <div css={starLayout}>
                    {greenStar}
                    {greenStar}
                    {greenStar}
                  </div>
                </div>
                <div css={twoRatingBox}>
                  <p css={numberRating}>2</p>
                  <div css={starLayout}>
                    {greenStar}
                    {greenStar}
                  </div>
                </div>
                <div css={oneRatingBox}>
                  <p css={numberRating}>1</p>
                  <div css={starLayout}>{greenStar}</div>
                </div>
              </div>

              <p css={text}>Experience:</p>

              <select
                css={inputStyles}
                id="experience"
                name="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="2years">0-2 Years</option>
                <option value="3years">3-5 Years</option>
                <option value="5years">5+ Years</option>
              </select>

              <div css={buttonContainer}>
                <button css={clearButton} onClick={handleClearButtonClick}>
                  Clear
                </button>
                <button type="submit" css={searchButton}>
                  Search
                </button>
              </div>
            </div>
          </div>
          {/* Sitter Detail Card */}
          <SitterList />
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
