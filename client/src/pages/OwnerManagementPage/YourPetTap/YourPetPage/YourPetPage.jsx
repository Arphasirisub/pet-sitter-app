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
import SectionContentYourPet from "./SectionContentYourPet";
import SectionTopicYourPet from "./SectionTopicYourPet";

function YourPetTap({ setIsCreatePet, setIsUpdatePet }) {
  return (
    <div className="container_yourpet" css={containerYourPetStyle}>
      <SectionTopicYourPet setIsCreatePet={setIsCreatePet} />

      <SectionContentYourPet setIsUpdatePet={setIsUpdatePet} />
    </div>
  );
}

export default YourPetTap;
