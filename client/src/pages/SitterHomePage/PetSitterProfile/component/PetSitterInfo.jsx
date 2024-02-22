/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  inputContainer,
  headingStyle,
  inputTradeName,
  textAraeStyle,
  titleStyle,
  addImage,
  imgGalleryContainer,
  imgStyle,
  deleteButton,
  position,
} from "../Style/PetSitterInfoStyle";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useEffect, useState } from "react";
import { useSitter } from "../../../../contexts/getSitters";
import uploadImg from "../../../../PublicPicture/uploadphoto.png";
import deleteIcon from "../../../../PublicPicture/delete.png";

function PetSitterInfo() {
  const { getSitterInfo, getSitterData } = useSitter();
  const animationSection = makeAnimated();
  const [tradeName, setTradeName] = useState("");
  const [service, setService] = useState("");
  const [myPlace, setMyPlace] = useState("");
  const [petType, setPetType] = useState({
    dog: false,
    cat: false,
    bird: false,
    rabbit: false,
  });

  const options = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "bird", label: "Bird" },
    { value: "rabbit", label: "Rabbit" },
  ];
  useEffect(() => {
    getSitterData();
  }, []);

  useEffect(() => {
    if (
      getSitterInfo &&
      getSitterInfo.trade_name &&
      getSitterInfo.service &&
      getSitterInfo.my_place
    ) {
      setTradeName(getSitterInfo.trade_name);
      setService(getSitterInfo.service);
      setMyPlace(getSitterInfo.my_place);
      setPetType({
        ...petType,
        dog: getSitterInfo.dog,
        cat: getSitterInfo.cat,
        bird: getSitterInfo.bird,
        rabbit: getSitterInfo.rabbit,
      });
    }
  }, [getSitterInfo]);

  return (
    <div css={inputContainer}>
      <p css={headingStyle}>Pet Sitter</p>
      <label htmlFor="address">Pet sitter name (Trade name)*</label>
      <input
        required
        css={inputTradeName}
        onChange={(e) => {
          setTradeName(e.target.value);
        }}
        value={tradeName}
      />
      <p>Pet type</p>
      <Select
        isMulti
        components={animationSection}
        options={options}
        value={options.filter((option) => petType[option.value])}
        onChange={(selectedOptions) => {
          const updatedPetType = {};
          options.forEach((option) => {
            updatedPetType[option.value] = selectedOptions.some(
              (selectedOption) => selectedOption.value === option.value
            );
          });
          setPetType(updatedPetType);
        }}
        theme={(theme) => ({
          ...theme,

          colors: {
            ...theme.colors,
            primary: "#eb6733",
          },
        })}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: state.isFocused ? "0.5px" : "1px solid #dcdfed ",
          }),
          multiValue: () => ({
            backgroundColor: "#fff1ec",
            padding: "5px 15px",
            borderRadius: "20px",
            color: "#E4490B",
            display: "flex",
            flexDirection: "row",
          }),
          multiValueLabel: () => ({
            color: "#E4490B",
          }),
          valueContainer: () => ({
            display: "flex",
            gap: "6px",
            justifyContent: "center",
            paddingLeft: "10px",
            height: "45px",
            alignItems: "center",
          }),
          multiValueRemove: () => ({
            padding: "2px 2px 0px 4px",
          }),
          option: () => ({
            ":hover": {
              backgroundColor: "#fff1ec",
            },
            padding: "10px",
          }),
        }}
      />
      <p>Service (Describe all of your service for pet sitting)</p>
      <textarea
        css={textAraeStyle}
        onChange={(e) => {
          setService(e.target.value);
        }}
        value={service}
      ></textarea>
      <p css={titleStyle}>My place (Describe your place)</p>
      <textarea
        css={textAraeStyle}
        onChange={(e) => {
          setMyPlace(e.target.value);
        }}
        value={myPlace}
      ></textarea>
      <p css={titleStyle}>Image Gallery (Maximum 10 images)</p>
      <div css={imgGalleryContainer}>
        {getSitterInfo &&
          getSitterInfo.image_gallery &&
          getSitterInfo.image_gallery.map((img, index) => (
            <div css={position}>
              <img
                css={imgStyle}
                key={index}
                src={img}
                alt={`Image ${index}`}
              />
              <button css={deleteButton}>
                <img src={deleteIcon} />
              </button>
            </div>
          ))}
        <button css={addImage}>
          <img src={uploadImg} alt="uploadImg" />
        </button>
      </div>
    </div>
  );
}

export default PetSitterInfo;
