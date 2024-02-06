/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function YourPetTap({ setIsCreatePet }) {
  const [allPet, setAllPet] = useState([]);
  const params = useParams();

  const getPet = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/pets/${params.id}`);
      setAllPet(result.data.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };
  console.log(allPet);
  useEffect(() => {
    getPet();
  }, []);

  return (
    <div className="container_yourpet" css={css``}>
      <div
        className="section_topic"
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 36px;
        `}
      >
        <h3
          css={css`
            font-weight: 700;
            font-size: 24px;
          `}
        >
          Your Pet
        </h3>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          onClick={() => {
            setIsCreatePet(true);
          }}
          css={css`
            background-color: #ff7037;
            font-family: "Satoshi", sans-serif;
            font-weight: 700;
            font-size: 16px;
            text-align: center;
            color: white;
            font-size: 15px;
            padding: 10px; /* Adjust padding for responsiveness */
            border-radius: 20px; /* Adjust border-radius for responsiveness */
            text-transform: none;
            transition: background-color 0.3s ease;
            width: 127px;
            height: 48px;

            &:hover {
              color: black;
            }
            padding: 12px 24px 12px 24px;
            border-radius: 99px;
            border: none;
            cursor: pointer;
            margin-left: 20px;
            gap: 8px;
          `}
        >
          Create Pet
        </Button>
      </div>
      <div
        className="section_content"
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        `}
      >
        {allPet.map((pet) => {
          return (
            <div
              className="card"
              key={pet.id}
              css={css`
                width: 207px;
                height: 240px;
                border: 1px solid rgba(220, 223, 237, 1);
                border-radius: 16px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                gap: 16px;
              `}
            >
              <img
                src={pet.picture}
                alt={
                  pet.pet_type === "Bird"
                    ? "Bird"
                    : pet.pet_type === "Dog"
                    ? "Dog"
                    : pet.pet_type === "Cat"
                    ? "Cat"
                    : "transparent"
                }
                width="104px"
                height="104px"
                css={css`
                  border-radius: 100%;
                `}
              />
              <div
                className="card_detail"
                css={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  margin: 0;
                  gap: 8px;
                `}
              >
                <h4
                  css={css`
                    font-size: 20px;
                    font-weight: 700;
                    text-align: center;
                    width: 159px;
                    height: 28px;
                    margin: 0;
                  `}
                >
                  {pet.pet_name}
                </h4>
                <p
                  css={css`
                    border: 1px solid
                      ${
                        pet.pet_type === "Bird"
                          ? "rgba(118, 208, 252, 1)"
                          : pet.pet_type === "Dog"
                          ? "rgba(28, 205, 131, 1)"
                          : pet.pet_type === "Cat"
                          ? "rgba(250, 138, 192, 1)"
                          : "transparent" // Default to transparent if type is unknown
                      };
                    border-radius: 99px;
                    color: ${
                      pet.pet_type === "Bird"
                        ? "rgba(118, 208, 252, 1)"
                        : pet.pet_type === "Dog"
                        ? "rgba(28, 205, 131, 1)"
                        : pet.pet_type === "Cat"
                        ? "rgba(250, 138, 192, 1)"
                        : "transparent" // Default to transparent if type is unknown
                    };
                    width: 63px;
                    height: 32px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;

                    background-color: ${
                      pet.pet_type === "Bird"
                        ? "rgba(236, 251, 255, 1)"
                        : pet.pet_type === "Dog"
                        ? "rgba(231, 253, 244, 1)"
                        : pet.pet_type === "Cat"
                        ? "rgba(255, 240, 241, 1)"
                        : "transparent" // Default to transparent if type is unknown
                    };
                  `}
                >
                  {pet.pet_type}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//หน้านี้
export default YourPetTap;
