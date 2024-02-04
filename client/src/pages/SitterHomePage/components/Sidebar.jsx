/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import {
  containerSidebarStyle,
  sectionLogoStyle,
  fontSidebarStyle,
  sidebarStyle,
  sectionLogoutStyle,
} from "./SidebarStyle";

const Sidebar = ({ activeTap, setActiveTap }) => {
  const [defaultActiveTap, setDefaultActiveTap] =
    useState("pet-sitter-profile");

  useEffect(() => {
    setActiveTap(defaultActiveTap);
  }, [defaultActiveTap, setActiveTap]);

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
          style={{
            backgroundColor:
              activeTap === "pet-sitter-profile"
                ? "rgba(255, 241, 236, 1)"
                : "transparent",
          }}
        >
          <img
            src="/src/PublicPicture/llogohuman.png"
            alt="Human"
            width="24"
            height="24px"
          />
          <p css={fontSidebarStyle}>Pet Sitter Profile</p>
        </div>

        <div
          className="sidebar"
          css={sidebarStyle}
          onClick={() => {
            setActiveTap("booking-list");
          }}
          style={{
            backgroundColor:
              activeTap === "booking-list"
                ? "rgba(255, 241, 236, 1)"
                : "transparent",
          }}
        >
          <img
            src="/src/PublicPicture/bookingicon.png"
            alt="booking"
            width="24"
            height="24px"
            css={css`
              filter: grayscale(100%);
            `}
          />
          <p css={fontSidebarStyle}>Booking List</p>
        </div>

        <div
          className="sidebar"
          css={sidebarStyle}
          onClick={() => {
            setActiveTap("payout-option");
          }}
          style={{
            backgroundColor:
              activeTap === "payout-option"
                ? "rgba(255, 241, 236, 1)"
                : "transparent",
          }}
        >
          <img
            src="/src/PublicPicture/payouticon.png"
            alt="payout"
            width="24"
            height="24px"
          />
          <p css={fontSidebarStyle}>Payout Option</p>
        </div>
      </div>

      <div className="section__logout" css={sectionLogoutStyle}>
        <div className="logout">
          <img src="/src/PublicPicture/logout.png" alt="logout" width="240" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
