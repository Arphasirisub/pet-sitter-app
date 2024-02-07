/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useAuth } from "../../../contexts/authentication";

import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { usePets } from "../../../contexts/getPetsByOwnerId";

function PetList() {
  const navigate = useNavigate();
  const { state } = useAuth();
  const { petsResults, getPets, toggleSelection, selectedPets } = usePets();

  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate("/login");
      return;
    }
    const ownerId = localStorage.getItem("id");

    getPets(ownerId);
  }, []);

  return (
    <div>
      {/* Display loading spinner if data is loading */}
      {petsResults.isLoading && (
        <div
          css={css`
            display: flex;
            height: 500px;
            align-items: center;
            justify-content: center;
          `}
        >
          <CircularProgress size={200} color="primary" />
        </div>
      )}

      {/* Display error message if there is an error */}
      {petsResults.isError && (
        <div
          css={css`
            display: flex;
            height: 500px;
            align-items: center;
            justify-content: center;
            color: red;
            font-size: 20px;
          `}
        >
          Error fetching pets data.
        </div>
      )}

      {/* Display pets data when loading is complete and no error */}
      {!petsResults.isLoading && !petsResults.isError && state.user && (
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
            gap: 20px;
          `}
        >
          {/* Map over pets data and display each pet */}
          {petsResults.data.map((pet) => (
            <div
              key={pet.id}
              css={css`
                aspect-ratio: 1;
                border: solid 1px;
                border-color: #dadada;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
                cursor: pointer;
                transition: background-color 0.3s;
                border-color: ${selectedPets.some(
                  (selectedPet) => selectedPet.id === pet.id
                )
                  ? "rgb(255, 152, 110)"
                  : "#dadada"};
                background-color: ${selectedPets.some(
                  (selectedPet) => selectedPet.id === pet.id
                )
                  ? "rgb(255, 245, 236)"
                  : "#ffffff"};

                &:hover {
                  background-color: rgba(0, 0, 0, 0.1);
                }
              `}
              onClick={() => toggleSelection(pet)}
            >
              <img
                src={pet.picture}
                css={css`
                  width: 38%;
                  aspect-ratio: 1;
                  border-radius: 100%;
                `}
              />
              <div>{pet.pet_name}</div>
              <div
                css={css`
                  border: solid 1px;
                  border-radius: 10px;
                  padding-left: 8px;
                  padding-right: 8px;
                  color: ${pet.pet_type === "Dog"
                    ? "rgb(28, 205, 131)"
                    : pet.pet_type === "Cat"
                    ? "rgb(250, 138, 192)"
                    : pet.pet_type === "Bird"
                    ? "rgb(117, 208, 252)"
                    : pet.pet_type === "Rabbit"
                    ? "rgb(255, 152, 110)"
                    : "initial"};
                  background-color: ${pet.pet_type === "Dog"
                    ? "rgb(219, 240, 231)"
                    : pet.pet_type === "Cat"
                    ? "rgb(255, 240, 241)"
                    : pet.pet_type === "Bird"
                    ? "rgb(236, 251, 255)"
                    : pet.pet_type === "Rabbit"
                    ? "rgb(255, 245, 236)"
                    : "initial"};
                `}
              >
                {pet.pet_type}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PetList;
