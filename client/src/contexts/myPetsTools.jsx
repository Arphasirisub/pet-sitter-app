import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const myPetsToolsContext = createContext();
const useMyPetsTools = () => useContext(myPetsToolsContext);

function MyPetsToolsProvider(props) {
  const [resetFlag, setResetFlag] = useState(false);
  const [inputData, setInputData] = useState({
    pet_name: "",
    pet_type: "",
    breed: "",
    sex: "",
    age: "",
    color: "",
    weight: "",
    about: "",
  });

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:4000/posts`, inputData);
      navigate(`/owner/${state.user.id}/yourPet/`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setInputData({
      pet_name: "",
      pet_type: "",
      breed: "",
      sex: "",
      age: "",
      color: "",
      weight: "",
      about: "",
    });
    setResetFlag(true);
  };
  const handleStateChange = (fieldName, value) => {
    setInputData((prevSearchInput) => ({
      ...prevSearchInput,
      [fieldName]: value,
    }));
  };

  return (
    <myPetsToolsContext.Provider
      value={{
        handleSubmit,
        handleCancel,
        setInputData,
        inputData,
        setResetFlag,
        resetFlag,
        handleStateChange,
      }}
    >
      {props.children}
    </myPetsToolsContext.Provider>
  );
}

export { MyPetsToolsProvider, useMyPetsTools };
