/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RxPerson } from "react-icons/rx";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/authentication";
import { GoCreditCard } from "react-icons/go";
import { IoList } from "react-icons/io5";
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
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activeTap, setActiveTap }) => {
  const { logout } = useAuth();

  const getSidebarItemStyle = (isActive) => css`
    ${sidebarStyle};
    background-color: ${isActive ? "rgba(255, 241, 236, 1)" : "transparent"};
    color: ${isActive ? "rgba(255, 112, 55, 1)" : "rgba(91, 93, 111, 1)"};
  `;
  const navigate = useNavigate();
  return (
    <div className="container_sidebar" css={containerSidebarStyle}>
      <div className="section__logo" css={sectionLogoStyle}>
        <img
          src="/src/PublicPicture/logositter.png"
          alt="Logo"
          width="140"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      <div className="section__sidebar-button">
        <div
          className="sidebar"
          css={getSidebarItemStyle(activeTap === "pet-sitter-profile")}
          onClick={() => {
            setActiveTap("pet-sitter-profile");
          }}
        >
          <BsFillPersonFill fontSize="24px" />
          <p css={fontSidebarStyle}>Pet Sitter Profile</p>
        </div>

        <div
          className="sidebar"
          css={getSidebarItemStyle(activeTap === "booking-list")}
          onClick={() => {
            setActiveTap("booking-list");
          }}
        >
          <IoList fontSize="24px" />

          <p css={fontSidebarStyle}>Booking List</p>
        </div>

        <div
          className="sidebar"
          css={getSidebarItemStyle(activeTap === "payout-option")}
          onClick={() => {
            setActiveTap("payout-option");
          }}
        >
          <GoCreditCard
            fontSize="22px"
            css={css`
              margin-left: 1px;
            `}
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
