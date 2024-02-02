/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";
import { useAuth } from "../../../../contexts/authentication.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import importbutton from "../../../../PublicPicture/importbutton.png";
import { useMyPetsTools } from "../../../../contexts/myPetsTools.jsx";
import Button from "@mui/material/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  containerUpdatePetStyle,
  formStyle,
  importButtonStyle,
  labelStyle,
  pictureById,
  sectionImportImgStyle,
  sectionTopicStyle,
  topicButtonStyle,
  topicTextStyle,
  inputButtonStyle,
  inputTopStyle,
  textAreaStyle,
  deleteButtonStyle,
  textDeleteButtonStyle,
  deleteConfirmStyle,
  deleteDetailStyle,
  buttonGroupStyle,
  cancleButtonStyle,
  deleteButtonPopupStyle,
  buttonGroupUpdateStyle,
  cancleUpdeteButtonStyle,
  updateButtonStyle,
  inputCenterStyle,
  selectCenterStyle,
  inputNoButtomStyle,
  inputStyle,
} from "./UpdatePetStyle.jsx";

function UpdatePetPage({ setIsUpdatePet }) {
  const navigate = useNavigate();
  const {
    inputData,
    handleStateChange,
    setInputData,
    postById,
    deletePetById,
    getPetById,
    resetToPostData,
  } = useMyPetsTools();

  const { state, checkToken } = useAuth();
  const params = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    try {
      await axios.put(`http://localhost:4000/pets/${params.petId}`, inputData);
      event.preventDefault();
    } catch (error) {
      console.error("Error updating pet:", error.message);
    }
  };

  useEffect(() => {
    checkToken();
    getPetById(params.petId);
    return () => {
      // Reset inputData state
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
    };
  }, []);
  useEffect(() => {
    if (postById) {
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
    }
  }, [postById]);

  return (
    <div className="container_updatepet" css={containerUpdatePetStyle}>
      <div className="section_topic" css={sectionTopicStyle}>
        <div
          className="topic_button"
          onClick={() => {
            setIsUpdatePet(false);
          }}
          css={topicButtonStyle}
        >
          <IoIosArrowBack />
          <h3
            onClick={() => {
              navigate(`/owner/${state.user.id}/yourPet`);
            }}
            css={topicTextStyle}
          >
            Your Pet
          </h3>
        </div>
      </div>

      <div className="section_importimg" css={sectionImportImgStyle}>
        {/* <img
          src={imgimport}
          alt="imgimport"
          css={css`
            position: relative;
          `}
        /> */}
        <img src={postById.picture} alt="" css={pictureById} />
        <img src={importbutton} alt="importbutton" css={importButtonStyle} />
      </div>

      <div className="section_inputdetail">
        <form onSubmit={handleSubmit} action="petdeail" css={formStyle}>
          <div className="input_top">
            <label htmlFor="petname" css={labelStyle}>
              Pet Name*
            </label>
            <input
              id="username"
              type="text"
              css={inputTopStyle}
              placeholder=""
              value={inputData.pet_name}
              onChange={(e) => {
                handleStateChange("pet_name", e.target.value);
              }}
            />
          </div>
          <div className="input_center" css={inputCenterStyle}>
            <div
              className="center_left"
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
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
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="rabbit">Rabbit</option>
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

            <div
              className="center_right"
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
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
              <label htmlFor="weight" css={labelStyle}>
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

          <div className="input_button" css={inputButtonStyle}>
            <label htmlFor="about" css={labelStyle}>
              About
            </label>
            <textarea
              id="about"
              type="text"
              css={textAreaStyle}
              placeholder="Describe color of your pet..."
              value={inputData.about}
              onChange={(e) => {
                handleStateChange("about", e.target.value);
              }}
            />
          </div>

          <div
            className="section_deletebutton"
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <Button onClick={handleOpen}>
              <RiDeleteBinLine css={deleteButtonStyle} />
              <p css={textDeleteButtonStyle}>Delete Pet</p>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "400px",
                  height: "208px",
                  background: "white",
                  borderRadius: "16px",
                }}
              >
                <h2 css={deleteConfirmStyle}>Delete Confirmation</h2>
                <p css={deleteDetailStyle}>Are you sure to delete this pet?</p>
                <div className="buttongroup" css={buttonGroupStyle}>
                  <Button css={cancleButtonStyle} onClick={handleClose}>
                    Cancle
                  </Button>
                  <Button
                    css={deleteButtonPopupStyle}
                    onClick={() => deletePetById(params.petId)}
                  >
                    Delete
                  </Button>
                </div>
              </Box>
            </Modal>
          </div>

          <div className="buttongroup_update" css={buttonGroupUpdateStyle}>
            <button css={cancleUpdeteButtonStyle} onClick={resetToPostData}>
              Cancel
            </button>
            <Button
              type="submit"
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              css={updateButtonStyle}
            >
              Update Pet
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default UpdatePetPage;
