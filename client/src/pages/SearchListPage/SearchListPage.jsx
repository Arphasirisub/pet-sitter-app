/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Footer from "../../public-components/Footer";
import Navbar from "../../public-components/Navbar";
import SearchBox from "./components/SearchBox.jsx";
import SearchResult from "./components/SearchResult.jsx";
import PaginationBar from "./components/pagination.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  seachLishContainer,
  containerStyles,
  headingStyles,
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
  // const [experience, setExperience] = useState("");
  // const [searchInput, setSearchInput] = useState("");
  // const [dog, setDog] = useState(false);
  // const [cat, setCat] = useState(false);
  // const [bird, setBird] = useState(false);
  // const [rabbit, setRabbit] = useState(false); // <SearchBox />

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

  return (
    <>
      {/* <Navbar /> */}
      <div css={containerStyles}>
        <p css={headingStyles}>Search For Pet Sitter</p>
        <div css={seachLishContainer}>
          <SearchBox
            searchData={searchData}
            setSearchData={setSearchData}
            setSitterData={setSitterData}
            sitterData={sitterData}
          />
          <SearchResult sitterData={sitterData} setSitterData={setSitterData} />
        </div>
        <PaginationBar />
      </div>
      {/* <Footer /> */}
    </>
  );
}
export default SearchListPage;
