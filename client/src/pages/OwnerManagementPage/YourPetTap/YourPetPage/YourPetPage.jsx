/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/authentication";
import { useMyPetsTools } from "../../../../contexts/myPetsTools";
import {
  buttonCardStyle,
  cardDetailStyle,
  cardImgStyle,
  containerYourPetStyle,
  createPetButtonTopicStyle,
  petNameStyle,
  sectionContentStyle,
  sectionTopicStyle,
  topicTextStyle,
} from "./YourPetStyle";

function YourPetTap({ setIsCreatePet, setIsUpdatePet }) {
  const params = useParams();
  const { getPet, allPet } = useMyPetsTools();
  const { state, checkToken } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    getPet(params.id);
  }, [allPet]);

  return (
    <div className="container_yourpet" css={containerYourPetStyle}>
      <div className="section_topic" css={sectionTopicStyle}>
        <h3 css={topicTextStyle}>Your Pet</h3>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          onClick={() => {
            setIsCreatePet(true);
            navigate(`/owner/${state.user.id}/yourPet/createPet`);
          }}
          css={createPetButtonTopicStyle}
        >
          Create Pet
        </Button>
      </div>
      <div className="section_content" css={sectionContentStyle}>
        {allPet.map((pet, index) => {
          return (
            <button
              onClick={() => {
                setIsUpdatePet(true);
                navigate(`/owner/${state.user.id}/yourPet/editPet/${pet.id}`);
              }}
              key={index}
              css={buttonCardStyle}
            >
              <div className="card">
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
                  css={cardImgStyle}
                />
                <div className="card_detail" css={cardDetailStyle}>
                  <h4 css={petNameStyle}>{pet.pet_name}</h4>
                  <p
                    css={css`
                      border: 1px solid;
                      width: 63px;
                      height: 32px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin: 0;
                      border-radius: 99px;
                      ${
                        pet.pet_type === "Bird"
                          ? "rgba(118, 208, 252, 1)"
                          : pet.pet_type === "Dog"
                          ? "rgba(28, 205, 131, 1)"
                          : pet.pet_type === "Cat"
                          ? "rgba(250, 138, 192, 1)"
                          : "transparent" // Default to transparent if type is unknown
                      };
                      color: ${
                        pet.pet_type === "Bird"
                          ? "rgba(118, 208, 252, 1)"
                          : pet.pet_type === "Dog"
                          ? "rgba(28, 205, 131, 1)"
                          : pet.pet_type === "Cat"
                          ? "rgba(250, 138, 192, 1)"
                          : "transparent" // Default to transparent if type is unknown
                      };

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
            </button>
          );
        })}
      </div>
    </div>
  );
}

//หน้านี้
export default YourPetTap;
