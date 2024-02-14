/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/authentication";
import { useMyPetsTools } from "../../../../contexts/myPetsTools";
import {
  buttonCardStyle,
  cardDetailStyle,
  cardImgStyle,
  petNameStyle,
  sectionContentStyle,
} from "./YourPetStyle";

function SectionContentYourPet({ setIsUpdatePet }) {
  const params = useParams();
  const { getPet, allPet } = useMyPetsTools();
  const { state, checkToken } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
    getPet(params.id);
  }, [allPet]);

  return (
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
  );
}
export default SectionContentYourPet;
