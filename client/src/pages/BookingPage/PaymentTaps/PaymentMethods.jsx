/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
function SelectPaymentMethods({ setPaymentMethods }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-evenly;
        gap: 3%;
      `}
    >
      <Button
        css={css`
          border: solid rgb(220, 223, 237) 1px;
          width: 50%;
          border-radius: 50px;
          color: rgb(123, 126, 143);
          padding-top: 20px;
          padding-bottom: 20px;
        `}
      >
        Creadit Card
      </Button>
      <Button
        css={css`
          border: solid rgb(220, 223, 237) 1px;
          width: 50%;
          border-radius: 50px;
          color: rgb(123, 126, 143);
          padding-top: 20px;
          padding-bottom: 20px;
        `}
      >
        Cash
      </Button>
    </div>
  );
}
export default SelectPaymentMethods;
