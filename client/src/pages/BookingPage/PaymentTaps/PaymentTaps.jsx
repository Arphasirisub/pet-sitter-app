/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
function PaymentTaps({ setActiveSteps }) {
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
            setActiveSteps("information");
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
          onClick={() => {}}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
export default PaymentTaps;