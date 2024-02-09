import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authentication";

const myPetsToolsContext = createContext();
const useMyPetsTools = () => useContext(myPetsToolsContext);

function MyPetsToolsProvider(props) {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    pet_name: "",
    pet_type: "",
    breed: "",
    sex: "",
    age: "",
    color: "",
    weight: "",
  });

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:4000/pets/`, inputData);
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
    });
  };
  const handleStateChange = (fieldName, value) => {
    setInputData((prevSearchInput) => ({
      ...prevSearchInput,
      [fieldName]: value,
    }));
  };

  const [postById, setPostById] = useState([]);
  const [allPet, setAllPet] = useState([]);

  const getPet = async (id) => {
    try {
      const result = await axios.get(
        `http://localhost:4000/pets/ownerPet/${id}`
      );
      setAllPet(result.data.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  const getPetById = async (petId) => {
    const results = await axios.get(
      `http://localhost:4000/pets/getpet/${petId}`
    );
    setPostById(results.data.data);
  };

  const deletePetById = async (petId) => {
    try {
      await axios.delete(`http://localhost:4000/pets/${petId}`);
      navigate(`/owner/${state.user.id}/yourPet`);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  const resetToPostData = (event) => {
    event.preventDefault();
    setInputData({
      pet_name: postById.pet_name || "",
      pet_type: postById.pet_type || "",
      breed: postById.breed || "",
      sex: postById.sex || "",
      age: postById.age || "",
      color: postById.color || "",
      weight: postById.weight || "",
      about: postById.about || "",
    });
  };

  const { state, checkToken } = useAuth();
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <myPetsToolsContext.Provider
      value={{
        handleSubmit,
        handleCancel,
        setInputData,
        inputData,
        handleStateChange,
        postById,
        setPostById,
        getPetById,
        deletePetById,
        resetToPostData,
        getPet,
        allPet,
        setAllPet,
      }}
    >
      {props.children}
    </myPetsToolsContext.Provider>
  );
}

export { MyPetsToolsProvider, useMyPetsTools };
