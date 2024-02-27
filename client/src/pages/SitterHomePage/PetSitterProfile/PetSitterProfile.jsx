/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BasicInfo from "./component/basicInfo.jsx";
import PetSitterInfo from "./component/PetSitterInfo.jsx";
import AddressInfo from "./component/AddressInfo.jsx";
import { sitterProfileContainer } from "./Style/sitterProfileStyle.jsx";
import {
  headingContainer,
  headingLayout,
  upgateButton,
} from "./Style/BasicInfoStyle.jsx";
import axios from "axios";
import { useSitter } from "../../../contexts/getSitters.jsx";
import { useMyPetsTools } from "../../../contexts/myPetsTools.jsx";

function PetSitterProfile() {
  const { handleSubmitSitter } = useSitter();

  return (
    <form onSubmit={handleSubmitSitter}>
      <div css={sitterProfileContainer}>
        <div css={headingLayout}>
          <div css={headingContainer}>Pet Sitter Profile</div>
          <button css={upgateButton} type="submit">
            Update
          </button>
        </div>
        <BasicInfo />
        <PetSitterInfo />
        <AddressInfo />
      </div>
    </form>
  );
}
export default PetSitterProfile;
