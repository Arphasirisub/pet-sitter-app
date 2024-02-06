/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import YourPetTaps from "../YourPetTaps/YourPetTaps";
import InformationTaps from "../InformationTaps/InformationTaps";
import PaymentTaps from "../PaymentTaps/PaymentTaps";

function DynamicContents({ setActiveSteps, activeSteps }) {
  return (
    <>
      {activeSteps === "yourPet" && (
        <YourPetTaps setActiveSteps={setActiveSteps} />
      )}
      {activeSteps === "information" && (
        <InformationTaps setActiveSteps={setActiveSteps} />
      )}
      {activeSteps === "payment" && (
        <PaymentTaps setActiveSteps={setActiveSteps} />
      )}
    </>
  );
}
export default DynamicContents;
