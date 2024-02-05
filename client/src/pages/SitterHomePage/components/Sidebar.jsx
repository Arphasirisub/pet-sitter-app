/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RxPerson } from "react-icons/rx";
import React, { useState, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import {
  containerSidebarStyle,
  sectionLogoStyle,
  fontSidebarStyle,
  sidebarStyle,
  logoutStyle,
  fontLogoutStyle,
  sectionLogoutStyle,
} from "./SidebarStyle";

const Sidebar = ({ activeTap, setActiveTap }) => {
  const { logout } = useAuth();
  return (
    <div className="container_sidebar" css={containerSidebarStyle}>
      <div className="section__logo" css={sectionLogoStyle}>
        <img src="/src/PublicPicture/logositter.png" alt="Logo" width="140" />
      </div>

      <div className="section__sidebar-button">
        <div
          className="sidebar"
          css={sidebarStyle}
          onClick={() => {
            setActiveTap("pet-sitter-profile");
          }}
        >
          <BsFillPersonFill
            fontSize="24px"
            color={
              activeTap === "pet-sitter-profile"
                ? "rgba(255, 112, 55, 1)"
                : "rgba(174, 177, 195, 1)"
            }
          />
          <p css={fontSidebarStyle}>Pet Sitter Profile</p>
        </div>

        <div
          className="sidebar"
          css={sidebarStyle}
          onClick={() => {
            setActiveTap("booking-list");
          }}
        >
          <img
            src={
              activeTap === "booking-list"
                ? "/src/PublicPicture/bookingiconorange.png"
                : "/src/PublicPicture/bookingicon.png"
            }
            alt="booking"
            width="24px"
            height="24px"
          />

          <p css={fontSidebarStyle}>Booking List</p>
        </div>

        <div
          className="sidebar"
          css={sidebarStyle}
          onClick={() => {
            setActiveTap("payout-option");
          }}
        >
          <img
            src={
              activeTap === "payout-option"
                ? "/src/PublicPicture/payouticonorange.png"
                : "/src/PublicPicture/payouticon.png"
            }
            alt="payout"
            width="24px"
            height="24px"
          />
          <p css={fontSidebarStyle}>Payout Option</p>
        </div>
      </div>

      <div className="section_logout" css={sectionLogoutStyle}>
        <div className="logout" css={logoutStyle}>
          <img
            src="/src/PublicPicture/logoutlogo.png"
            alt="logout"
            width="16"
            height="20px"
          />
          <p
            css={fontLogoutStyle}
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
