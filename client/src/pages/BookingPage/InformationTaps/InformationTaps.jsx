/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { usePets } from "../../../contexts/getPetsByOwnerId";
import { useAuth } from "../../../contexts/authentication";
import { useEffect } from "react";
function InformationTaps({ setActiveSteps }) {
  const { ownerData, getOwnerData } = usePets();
  const { state } = useAuth();
  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate("/login");
      return;
    }
    const ownerId = localStorage.getItem("id");

    getOwnerData(ownerId);
  }, []);
  return (
    <div
      css={css`
        height: fit-content;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        gap: 40px;
      `}
    >
      <div>
        <div>Your Name*</div>
        <TextField
          id="outlined-read-only-input"
          InputProps={{
            readOnly: true,
          }}
          value={ownerData.full_name}
          css={css`
            width: 100%;
          `}
        />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          width: 100%;
        `}
      >
        <div
          css={css`
            width: 45%;
          `}
        >
          <div>Email*</div>
          <TextField
            id="outlined-read-only-input"
            InputProps={{
              readOnly: true,
            }}
            value={ownerData.email}
            css={css`
              width: 100%;
            `}
          />
        </div>
        <div
          css={css`
            width: 45%;
          `}
        >
          <div>Phone*</div>
          <TextField
            id="outlined-read-only-input"
            InputProps={{
              readOnly: true,
            }}
            value={ownerData.phone}
            css={css`
              width: 100%;
            `}
          />
        </div>
      </div>
      <div>
        <div>Additional Message (To petsitter)</div>
        <TextField
          id="outlined-read-only-input"
          variant="outlined"
          multiline
          rows={4}
          css={css`
            width: 100%;
          `}
        />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
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
            setActiveSteps("yourPet");
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
            setActiveSteps("payment");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
export default InformationTaps;
