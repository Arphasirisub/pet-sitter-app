/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import { useMyPetsTools } from "../../../../contexts/myPetsTools.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../../../contexts/authentication.jsx";
import {
  centerRightStyle,
  centerLeftStyle,
  fromStyle,
  inputTopStyle,
  labelStyle,
  inputButtomStyle,
  textAreaStyle,
  buttonInputStyle,
  cancleButtonStyle,
  createPetInputButtonStyle,
  inputCenterStyle,
  selectCenterStyle,
  inputStyle,
  inputNoButtomStyle,
} from "./CreatePetStyle.jsx";

function SectionInputDetail() {
  const { handleCancel, inputData, handleStateChange } = useMyPetsTools();
  const params = useParams();
  const { state, checkToken } = useAuth();
  useEffect(() => {
    checkToken();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:4000/pets/${params.id}`, inputData);
      navigate(`/owner/${state.user.id}/yourPet/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="section_inputdetail">
      <form onSubmit={handleSubmit} action="petdeail" css={fromStyle}>
        <div className="input_top">
          <label htmlFor="petname" css={labelStyle}>
            Pet Name*
          </label>
          <input
            id="username"
            type="text"
            css={inputTopStyle}
            placeholder="Name of your pet"
            value={inputData.pet_name}
            onChange={(e) => {
              handleStateChange("pet_name", e.target.value);
            }}
          />
        </div>
        <div className="input_center" css={inputCenterStyle}>
          <div className="center_left" css={centerLeftStyle}>
            <label htmlFor="pettype" css={labelStyle}>
              Pet Type*
            </label>
            <select
              id="pettype"
              name="pettype"
              css={selectCenterStyle}
              value={inputData.pet_type}
              onChange={(e) => {
                handleStateChange("pet_type", e.target.value);
              }}
            >
              <option disabled value="">
                Select your pet type
              </option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Rabbit">Rabbit</option>
            </select>

            <label htmlFor="sex" css={labelStyle}>
              Sex*
            </label>
            <select
              id="sex"
              name="sex"
              css={selectCenterStyle}
              value={inputData.sex}
              onChange={(e) => {
                handleStateChange("sex", e.target.value);
              }}
            >
              <option disabled value="">
                Select sex of your pet
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <label htmlFor="username" css={labelStyle}>
              Color*
            </label>
            <input
              id="color"
              type="text"
              css={inputNoButtomStyle}
              placeholder="Describe color of your pet"
              value={inputData.color}
              onChange={(e) => {
                handleStateChange("color", e.target.value);
              }}
            />
          </div>

          <div className="center_right" css={centerRightStyle}>
            <label htmlFor="breed" css={labelStyle}>
              Breed*
            </label>
            <input
              id="breed"
              type="text"
              css={inputStyle}
              placeholder="Breed of your pet"
              value={inputData.breed}
              onChange={(e) => {
                handleStateChange("breed", e.target.value);
              }}
            />
            <label htmlFor="age" css={labelStyle}>
              Age (Month)*
            </label>
            <input
              id="age"
              type="text"
              css={inputStyle}
              placeholder="Age of your pet"
              value={inputData.age}
              onChange={(e) => {
                handleStateChange("age", e.target.value);
              }}
            />
            <label
              htmlFor="weight"
              css={css`
                ${labelStyle};
                margin-bottom: 0;
              `}
            >
              Weight (Kilogram)*
            </label>
            <input
              id="weight"
              type="text"
              css={inputNoButtomStyle}
              placeholder="Weight of your pet"
              value={inputData.weight}
              onChange={(e) => {
                handleStateChange("weight", e.target.value);
              }}
            />
          </div>
        </div>

        <div className="input_buttom" css={inputButtomStyle}>
          <label htmlFor="about" css={labelStyle}>
            About
          </label>
          <textarea
            id="color"
            type="text"
            css={textAreaStyle}
            placeholder="Describe color of your pet..."
            value={inputData.about}
            // onChange={(e) => {
            //   handleStateChange("about", e.target.value);
            // }}
          />
        </div>
        <div className="buttoninput" css={buttonInputStyle}>
          <button css={cancleButtonStyle} onClick={handleCancel}>
            Cancel
          </button>
          <Button
            type="submit"
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            onClick={() => {
              setIsCreatePet(true);
            }}
            css={createPetInputButtonStyle}
          >
            Create Pet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SectionInputDetail;
