/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BookingHistoryTap from "../BookingHistoryTap/BookingHistoryTap";
import ProfileTap from "../ProfileTap/ProfileTap";
import YourPetTap from "../YourPetTap/YorPetTap";
function DynamicComponents({ activeTaps }) {
  return (
    <>
      <div
        css={css`
          width: 70%;
          height: 200px;
          background-color: rgb(255, 255, 255);
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        `}
      >
        {activeTaps === "profile" && <ProfileTap />}
        {activeTaps === "yourPet" && <YourPetTap />}
        {activeTaps === "bookingHistory" && <BookingHistoryTap />}
      </div>
    </>
  );
}
export default DynamicComponents;
