// searchFunctions.js
import { useState } from "react";

const useSearchData = () => {
  const [searchData, setSearchData] = useState({
    experience: "",
    searchInput: "",
    dog: false,
    cat: false,
    bird: false,
    rabbit: false,
  });

  const handleSearchInputChange = (value) => {
    setSearchData((prevSearchData) => ({
      ...prevSearchData,
      searchInput: value,
    }));
  };

  const handleExperienceChange = (value) => {
    setSearchData((prevSearchData) => ({
      ...prevSearchData,
      experience: value,
    }));
  };

  const handleDogChange = (isChecked) => {
    setSearchData((prevSearchData) => ({
      ...prevSearchData,
      dog: isChecked,
    }));
  };

  const handleCatChange = (isChecked) => {
    setSearchData((prevSearchData) => ({
      ...prevSearchData,
      cat: isChecked,
    }));
  };

  const handleBirdChange = (isChecked) => {
    setSearchData((prevSearchData) => ({
      ...prevSearchData,
      bird: isChecked,
    }));
  };

  const handleRabbitChange = (isChecked) => {
    setSearchData((prevSearchData) => ({
      ...prevSearchData,
      rabbit: isChecked,
    }));
  };

  // ... other functions for different properties

  return {
    searchData,
    handleSearchInputChange,
    handleExperienceChange,
    handleDogChange,
    handleCatChange,
    handleBirdChange,
    handleRabbitChange,
    // ... other functions
  };
};

export default useSearchData;
