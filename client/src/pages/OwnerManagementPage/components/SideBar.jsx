/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BookingHistory from "../../../PublicPicture/BookingHistoryIcon.png";
import ActiveBookingHistory from "../../../PublicPicture/ActiveBookingHistoryIcon.png";
import Profile from "../../../PublicPicture/ProfileIcon.png";
import ActiveProfile from "../../../PublicPicture/ActiveProfileIcon.png";
import YourPet from "../../../PublicPicture/YourPetIcon.png";
import ActiveYourPet from "../../../PublicPicture/ActiveYourPetIcon.png";
import { useState } from "react";

function SideBar({ setActiveTaps, activeTaps }) {
  const handleClick = (key) => {
    setActiveTaps(key);
  };

  return (
    <>
      <div
        css={css`
          width: 18%;
          height: 200px;
          background-color: rgb(255, 255, 255);
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          padding-top: 10px;
          padding-bottom: 10px;
        `}
      >
        <div
          css={css`
            height: 25%;
            display: flex;
            align-items: center;
            padding-left: 10%;
            font-weight: bold;
          `}
        >
          Account
        </div>
        <HoverItem
          imageSrc={Profile}
          activeImageSrc={ActiveProfile}
          text="Profile"
          isActive={activeTaps === "profile"}
          handleHover={() => handleHover("profile")}
          handleClick={() => handleClick("profile")}
        />
        <HoverItem
          imageSrc={YourPet}
          activeImageSrc={ActiveYourPet}
          text="Your Pet"
          isActive={activeTaps === "yourPet"}
          handleHover={() => handleHover("yourPet")}
          handleClick={() => handleClick("yourPet")}
        />
        <HoverItem
          imageSrc={BookingHistory}
          activeImageSrc={ActiveBookingHistory}
          text="Booking History"
          isActive={activeTaps === "bookingHistory"}
          handleHover={() => handleHover("bookingHistory")}
          handleClick={() => handleClick("bookingHistory")}
        />
      </div>
    </>
  );
}

const HoverItem = ({
  imageSrc,
  activeImageSrc,
  text,
  isActive,
  handleHover,
  handleClick,
}) => (
  <div
    css={css`
      height: 25%;
      display: flex;
      align-items: center;
      padding-left: 10%;
      gap: 5%;
      &:hover {
        cursor: pointer;
        background-color: #eeeeee;
      }
      ${isActive &&
      css`
        background-color: rgb(255, 241, 236);
        color: rgb(255, 112, 55);
      `}
    `}
    onMouseEnter={handleHover}
    onClick={handleClick}
  >
    <img src={isActive ? activeImageSrc : imageSrc} alt={text} />
    {text}
  </div>
);

export default SideBar;
