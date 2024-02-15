/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Footer from "../../public-components/Footer";
import Navbar from "../../public-components/Navbar";
import SearchBox from "./components/SearchBox.jsx";
import SearchResult from "./components/SearchResult.jsx";

import {
  seachLishContainer,
  containerStyles,
  headingStyles,
  sticky,
  // pageContainer,
} from "./components/Style.jsx";

function SearchListPage() {


  return (
    <>
      <Navbar />
      <div css={containerStyles}>
        <p css={headingStyles}>Search For Pet Sitter</p>
        <div css={sticky}>
          <div css={seachLishContainer}>
            <SearchBox />
            <SearchResult />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SearchListPage;
