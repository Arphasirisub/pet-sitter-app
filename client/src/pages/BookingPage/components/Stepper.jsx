/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill } from "react-icons/bs";

function Stepper({ activeSteps }) {
  return (
    <div
      css={css`
        height: 100px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
      `}
    >
      <div
        css={css`
          color: ${activeSteps === "yourPet"
            ? "rgb(255, 112, 55)"
            : "rgb(123, 126, 143)"};
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
        `}
      >
        <Bs1CircleFill
          css={css`
            font-size: 30px;
          `}
        />
        Your Pet
      </div>
      <div
        css={css`
          color: ${activeSteps === "information"
            ? "rgb(255, 112, 55)"
            : "rgb(123, 126, 143)"};
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
        `}
      >
        <Bs2CircleFill
          css={css`
            font-size: 30px;
          `}
        />{" "}
        Information
      </div>
      <div
        css={css`
          color: ${activeSteps === "payment"
            ? "rgb(255, 112, 55)"
            : "rgb(123, 126, 143)"};
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
        `}
      >
        <Bs3CircleFill
          css={css`
            font-size: 30px;
          `}
        />{" "}
        Payment
      </div>
    </div>
  );
}
export default Stepper;
