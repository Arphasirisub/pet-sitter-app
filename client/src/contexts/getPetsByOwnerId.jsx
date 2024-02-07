import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const getPetsContext = createContext();
const usePets = () => useContext(getPetsContext);

function PetsProvider(props) {
  const [selectedPets, setSelectedPets] = useState([]);

  const [petsResults, setPetsResults] = useState({
    data: [],
    isError: false,
    isLoading: false,
  });

  const verifySelect = () => {
    return selectedPets.length > 0;
  };
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [isSelect, setIsSelect] = useState(verifySelect());

  useEffect(() => {
    setIsSelect(verifySelect());
  }, [selectedPets]);

  const getPets = async (owner_id) => {
    try {
      setPetsResults({ ...petsResults, isLoading: true, isError: false });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const results = await axios(
        `http://localhost:4000/pets/owner/${owner_id}`
      );
      setPetsResults({
        data: results.data.data,
        isError: false,
        isLoading: false,
      });
    } catch (error) {
      setPetsResults({ ...petsResults, isError: true, isLoading: false });
    }
  };

  const toggleSelection = (pet) => {
    setSelectedPets((prev) =>
      prev.some((selectedPet) => selectedPet.id === pet.id)
        ? prev.filter((selectedPet) => selectedPet.id !== pet.id)
        : [...prev, pet]
    );
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
        verifySelect,
        isSelect,
        setShowVerifyModal,
        showVerifyModal,
        showWarningModal,
        setShowWarningModal,
      }}
    >
      {props.children}
    </getPetsContext.Provider>
  );
}

export { PetsProvider, usePets };
