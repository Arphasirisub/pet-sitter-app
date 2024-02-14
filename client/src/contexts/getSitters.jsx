import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const getSittersContext = createContext();
const useSitter = () => useContext(getSittersContext);

function SittersProvider(props) {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState({
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
          `http://localhost:4000/sitters?full_name=${searchInput.searchInput}&experience=${searchInput.experience}&rating=${searchInput.rating}&dog=${searchInput.dog}&cat=${searchInput.cat}&bird=${searchInput.bird}&rabbit=${searchInput.rabbit}`
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

  const handleStateChange = (fieldName, value) => {
    setSearchInput((prevSearchInput) => ({
      ...prevSearchInput,
      [fieldName]: value,
    }));
  };

  return (
    <getSittersContext.Provider
      value={{
        searchResult,
        setSearchResult,
        getSitters,
        searchInput,
        setSearchInput,
        handleStateChange,
      }}
    >
      {props.children}
    </getSittersContext.Provider>
  );
}

export { SittersProvider, useSitter };
