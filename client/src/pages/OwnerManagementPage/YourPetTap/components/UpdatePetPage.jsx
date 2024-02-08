/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";
import { useAuth } from "../../../../contexts/authentication";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import importbutton from "../../../../PublicPicture/importbutton.png";
import { useMyPetsTools } from "../../../../contexts/myPetsTools";
import {
  inputCenterStyle,
  inputNoButtomMargin,
  selectCenterStyle,
} from "../CreatePetStyle";
import Button from "@mui/material/Button";

function UpdatePetPage() {
  const navigate = useNavigate();
  const { setIsCreatePet, inputData, handleCancel, handleStateChange } =
    useMyPetsTools();
  const { state, checkToken } = useAuth();
  const [postById, setPostById] = useState([]);
  const params = useParams();

  const getPet = async () => {
    const results = await axios.get(
      `http://localhost:4000/pets/getpet/${params.petId}`
    );
    setPostById(results.data.data);
    console.log(results.data.data);
  };
  console.log(postById[0].picture);

  useEffect(() => {
    checkToken();
    getPet();
  }, []);
  return (
    <div
      className="container_createpet"
      css={css`
        display: flex;
        flex-direction: column;
        height: 1364px;
      `}
    >
      <div
        className="section_topic"
        css={css`
          display: flex;
          align-items: center;
          padding: 24px 41px;
        `}
      >
        <div
          className="topic_button"
          onClick={() => {
            setIsUpdatePet(false);
          }}
          css={css`
            display: flex;
            align-items: center;
            cursor: pointer;
            margin: 0;
            padding: 0;
          `}
        >
          <IoIosArrowBack />
          <h3
            onClick={() => {
              navigate(`/owner/${state.user.id}/yourPet`);
            }}
            css={css`
              font-weight: 700;
              font-size: 24px;
            `}
          >
            Your Pet
          </h3>
        </div>
      </div>

      <div
        className="section_importimg"
        css={css`
          padding: 0px 36px;
          position: relative;
        `}
      >
        {/* <img
          src={imgimport}
          alt="imgimport"
          css={css`
            position: relative;
          `}
        /> */}
        <img
          src={postById[0].picture}
          alt=""
          css={css`
            width: 240px;
            height: 240px;
            border-radius: 999px;
          `}
        />
        <img
          src={importbutton}
          alt="importbutton"
          css={css`
            position: absolute;
            top: 185px;
            left: 217px;
          `}
        />
      </div>

      <div className="section_inputdetail">
        <form
          action="petdeail"
          css={css`
            display: flex;
            flex-direction: column;
            padding: 40px 36px;
            gap: 60px;
          `}
        >
          <div className="input_top">
            <label
              htmlFor="petname"
              css={css`
                font-weight: 500;
                font-size: 16px;
              `}
            >
              Pet Name*
            </label>
            <input
              id="username"
              type="text"
              css={css`
                width: 870px;
                font-weight: 400;
                font-size: 16px;
                border-radius: 8px;
                background-color: rgb(255, 255, 255);
                border: 1px solid rgba(220, 223, 237, 1);
                font-family: "Satoshi", sans-serif;
                margin: 8px 0;
                padding: 12px 0px 12px 12px;
                &:focus {
                  border-color: rgba(255, 112, 55, 1);
                }
              `}
              placeholder=""
              value={inputData.pet_name}
              onChange={(e) => {
                handleStateChange("pet_name", e.target.value);
              }}
            />
          </div>
          <div
            className="input_center"
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <div
              className="center_left"
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <label
                htmlFor="pettype"
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                `}
              >
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
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="rabbit">Rabbit</option>
              </select>

              <label
                htmlFor="sex"
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                `}
              >
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
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <label
                htmlFor="username"
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                `}
              >
                Color*
              </label>
              <input
                id="color"
                type="text"
                css={inputNoButtomMargin}
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
              <label
                htmlFor="breed"
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                `}
              >
                Breed*
              </label>
              <input
                id="breed"
                type="text"
                css={inputCenterStyle}
                placeholder="Breed of your pet"
                value={inputData.breed}
                onChange={(e) => {
                  handleStateChange("breed", e.target.value);
                }}
              />
              <label
                htmlFor="age"
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                `}
              >
                Age (Month)*
              </label>
              <input
                id="age"
                type="text"
                css={inputCenterStyle}
                placeholder="Age of your pet"
                value={inputData.age}
                onChange={(e) => {
                  handleStateChange("age", e.target.value);
                }}
              />
              <label
                htmlFor="weight"
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                  margin-bottom: 0;
                `}
              >
                Weight (Kilogram)*
              </label>
              <input
                id="weight"
                type="text"
                css={inputNoButtomMargin}
                placeholder="Weight of your pet"
                value={inputData.weight}
                onChange={(e) => {
                  handleStateChange("weight", e.target.value);
                }}
              />
            </div>
          </div>

          <div
            className="input_buttom"
            css={css`
              display: flex;
              flex-direction: column;
              padding: 52px 0px 0px 0px;
              border-top: 1px solid rgba(220, 223, 237, 1);
            `}
          >
            <label
              htmlFor="about"
              css={css`
                font-weight: 500;
                font-size: 16px;
              `}
            >
              About
            </label>
            <textarea
              id="color"
              type="text"
              css={css`
                width: 870px;
                height: 140px;
                font-weight: 400;
                font-size: 16px;
                border-radius: 8px;
                background-color: rgb(255, 255, 255);
                border: 1px solid rgba(220, 223, 237, 1);
                font-family: "Satoshi", sans-serif;
                margin: 8px 0 0 0;
                padding: 12px 0px 12px 12px;
                text-indent: 5px;

                &:focus {
                  border-color: rgba(255, 112, 55, 1) !important;
                }
              `}
              placeholder="Describe color of your pet..."
              value={inputData.about}
              onChange={(e) => {
                handleStateChange("about", e.target.value);
              }}
            />
          </div>
          <div
            className="buttoninput"
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <button
              css={css`
                background-color: rgba(255, 241, 236, 1);
                width: 120px;
                font-family: "Satoshi", sans-serif;
                font-weight: 700;
                font-size: 16px;
                text-align: center;
                color: rgba(255, 112, 55, 1);
                &:hover {
                  color: #ffc9c9;
                }
                padding: 12px 24px 12px 24px;
                border-radius: 99px;
                border: none;
                cursor: pointer;
              `}
              onClick={handleCancel}
            >
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
        </form>
      </div>
    </div>
  );
}
export default UpdatePetPage;
