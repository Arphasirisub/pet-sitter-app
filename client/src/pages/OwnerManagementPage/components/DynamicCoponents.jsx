/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BookingHistoryTap from "../BookingHistoryTap/BookingHistoryTap";
import ProfileTap from "../ProfileTap/ProfileTap";
import YourPetTap from "../YourPetTap/YorPetTap";
import PetPage from "../YourPetTap/components/PetPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CreatePetPage from "../YourPetTap/components/CreatePetPage";
import { useState } from "react";

function DynamicComponents({ activeTaps }) {
  const [isCreatePet, setIsCreatePet] = useState(false);

  return (
    <>
      <div
        css={css`
          width: 956px;
          height: 824px;
          background-color: rgb(255, 255, 255);
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          /* display: flex;
          flex-direction: column; */
        `}
      >
        {activeTaps === "profile" && <ProfileTap />}
        {activeTaps === "yourPet" && !isCreatePet && (
          <YourPetTap setIsCreatePet={setIsCreatePet} />
        )}
        {activeTaps === "yourPet" && isCreatePet && <CreatePetPage />}
        {activeTaps === "bookingHistory" && <BookingHistoryTap />}
      </div>
    </>
  );
}
export default DynamicComponents;
