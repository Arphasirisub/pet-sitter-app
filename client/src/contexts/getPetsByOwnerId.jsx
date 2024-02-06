import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const getPetsContext = createContext();
const usePets = () => useContext(getPetsContext);

function PetsProvider(props) {
  const [selectedPets, setSelectedPets] = useState([]);

  const toggleSelection = (pet) => {
    setSelectedPets((prev) =>
      prev.some((selectedPet) => selectedPet.id === pet.id)
        ? prev.filter((selectedPet) => selectedPet.id !== pet.id)
        : [...prev, pet]
    );
  };

  const [petsResults, setPetsResults] = useState({
    data: [],
    isError: false,
    isLoading: false,
  });

  const getPets = async (owner_id) => {
    try {
      // Set isLoading to true initially
      setPetsResults({ ...petsResults, isLoading: true, isError: false });

      // Delay the execution by 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const results = await axios(
        `http://localhost:4000/pets/owner/${owner_id}`
      );

      // Set the fetched data and isLoading to false
      setPetsResults({
        data: results.data.data,
        isError: false,
        isLoading: false,
      });
    } catch (error) {
      // If an error occurs, set isError to true and isLoading to false
      setPetsResults({ ...petsResults, isError: true, isLoading: false });
    }
  };

  return (
    <getPetsContext.Provider
      value={{
        selectedPets,
        setSelectedPets,
        petsResults,
        setPetsResults,
        getPets,
        toggleSelection,
      }}
    >
      {props.children}
    </getPetsContext.Provider>
  );
}

export { PetsProvider, usePets };
