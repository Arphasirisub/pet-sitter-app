/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "../../public-components/Navbar";
import Stepper from "./components/Stepper";
import Detail from "./components/Detail";
import DynamicContents from "./components/DynamicContents";
import { useState } from "react";

function BookingPage() {
  const [activeSteps, setActiveSteps] = useState("yourPet");
  return (
    <>
      <Navbar />
      <div
        css={css`
          padding: 2rem;
          display: flex;
          justify-content: space-around;
        `}
      >
        <div
          css={css`
            width: 60%;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          `}
        >
          <Stepper activeSteps={activeSteps} />
          <DynamicContents
            setActiveSteps={setActiveSteps}
            activeSteps={activeSteps}
          />
        </div>
        <Detail />
      </div>
    </>
  );
}
export default BookingPage;
