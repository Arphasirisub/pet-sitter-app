/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PetList from "../YourPetTaps/PetList";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import VerifyModal from "./VerifyModal";
import { usePets } from "../../../contexts/getPetsByOwnerId";
import WarningModal from "./WarningModal";

function YourPetTaps({ setActiveSteps }) {
  const navigate = useNavigate();
  const params = useParams();
  const { isSelect, setShowVerifyModal, setShowWarningModal } = usePets();
  return (
    <>
      <div
        css={css`
          height: fit-content;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 25px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        `}
      >
        <div>Choose your pet</div>
        <PetList />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <Button
            css={css`
              padding: 10px;
              padding-left: 25px;
              padding-right: 25px;
              border-radius: 25px;
              color: rgb(255, 112, 55);
              background-color: rgb(255, 241, 236);
              transition: color 0.3s ease;
              &:hover {
                color: black;
              }
            `}
            onClick={() => {
              if (isSelect) {
                setShowWarningModal(true);
              } else {
                navigate(`/detail/${params.id}`);
              }
            }}
          >
            Back
          </Button>
          <Button
            css={css`
              padding: 10px;
              padding-left: 25px;
              padding-right: 25px;
              border-radius: 25px;
              color: rgb(255, 112, 55);
              background-color: rgb(255, 241, 236);
              transition: color 0.3s ease;
              &:hover {
                color: black;
              }
            `}
            onClick={() => {
              if (isSelect) {
                setActiveSteps("information");
              } else {
                setShowVerifyModal(true);
              }
            }}
          >
            Next
          </Button>
        </div>
      </div>
      <VerifyModal />
      <WarningModal />
    </>
  );
}
export default YourPetTaps;
