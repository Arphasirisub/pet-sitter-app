/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Footer from "../../public-components/Footer";
import Navbar from "../../public-components/Navbar";
import SearchBox from "./components/SearchBox.jsx";
import SearchResult from "./components/SearchResult.jsx";
import PaginationBar from "./components/pagination.jsx";
import { useState } from "react";
import {
  seachLishContainer,
  containerStyles,
  headingStyles,
  sticky,
} from "./components/Style.jsx";

function SearchListPage() {
  const [sitterData, setSitterData] = useState([]); //<SearchList />
  const [searchData, setSearchData] = useState({
    experience: "",
    searchInput: "",
    dog: false,
    cat: false,
    bird: false,
    rabbit: false,
    rating: 0,
  });

  return (
    <>
      <Navbar />
      <div css={containerStyles}>
        <p css={headingStyles}>Search For Pet Sitter</p>
        <div css={sticky}>
          <div css={seachLishContainer}>
            <SearchBox
              searchData={searchData}
              setSearchData={setSearchData}
              setSitterData={setSitterData}
              sitterData={sitterData}
            />
            <SearchResult
              sitterData={sitterData}
              setSitterData={setSitterData}
            />
          </div>
        </div>

        <PaginationBar />
      </div>
      <Footer />
    </>
  );
}
export default SearchListPage;
