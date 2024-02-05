import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const getSittersContext = createContext();
const useSitter = () => useContext(getSittersContext);

function SittersProvider(props) {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState({
    experience: "",
    searchInput: "",
    dog: false,
    cat: false,
    bird: false,
    rabbit: false,
    rating: 0,
  });

  const [searchResult, setSearchResult] = useState({
    isLoading: false,
    isError: false,
    result: [],
  });

  const getSitters = async () => {
    try {
      // Set loading to true with a delay of 2 seconds
      setSearchResult({ ...searchResult, isLoading: true });
      setTimeout(async () => {
        const response = await axios.get(
          `http://localhost:4000/sitters?full_name=${searchData.searchInput}&experience=${searchData.experience}&rating=${searchData.rating}&dog=${searchData.dog}&cat=${searchData.cat}&bird=${searchData.bird}&rabbit=${searchData.rabbit}`
        );
        // After the delay, update the search result
        setSearchResult({
          ...searchResult,
          isLoading: false,
          isError: false,
          result: response.data.data,
        });
      }, 2000); // 2000 milliseconds (2 seconds)
    } catch (error) {
      console.log(error);
      // Handle errors
      setSearchResult({
        ...searchResult,
        isLoading: false,
        isError: true,
      });
    }
  };
  
  

  return (
    <getSittersContext.Provider
      value={{
        searchResult,
        setSearchResult,
        getSitters,
        searchData,  // Include 'searchData' in the context for the SearchBox component
        setSearchData,
      }}
    >
      {props.children}
    </getSittersContext.Provider>
  );
}

export { SittersProvider, useSitter };
