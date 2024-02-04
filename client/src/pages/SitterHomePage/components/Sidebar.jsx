import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useAuth } from "../../../contexts/authentication";

const Sidebar = ({ activeTap, setActiveTap }) => {
  const { logout } = useAuth();
  const sidebarStyle = css`
    background-color: #fafafb;
    display: flex;
    width: 240px;
    height: 1024px;
    flex-direction: column;
    border-right-color: #dcdfed;
  `;

  const containerLogo = css`
    display: flex;
    padding: 24px;
    border-radius: 8px;
    background-color: #fafafb;
    margin-bottom: 16px;
  `;

  const logoutStyle = css`
    margin-top: auto;
  `;

  const containerButton = css`
    padding: 10px;
    align-items: center;
    margin-left: 10px;
    justify-content: center;
    margin-top: 10px;
  `;

  const fontStyleSidebar = css`
    display: inline-block;
    margin-left: 30px;
    vertical-align: middle;
    justify-content: center;
    color: var(--gray-500, #5b5d6f);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.32px;
  `;
  const fixcenter = css`
    justify-content: center;
  `;

  return (
    <div css={sidebarStyle}>
      <div css={containerLogo}>
        <div className="logo">
          <img src="/src/PublicPicture/logositter.png" alt="Logo" width="140" />
        </div>
      </div>

      <div
        css={containerButton}
        onClick={() => {
          setActiveTap("pet-sitter-profile");
        }}
      >
        <div css={fixcenter}>
          <img src="/src/PublicPicture/llogohuman.png" alt="Human" width="20" />
          <p css={fontStyleSidebar}>Pet Sitter Profile</p>
        </div>
      </div>

      <div
        css={containerButton}
        onClick={() => {
          setActiveTap("booking-list");
        }}
      >
        <div css={fixcenter}>
          <img src="/src/PublicPicture/list.png" alt="booking" width="30" />
          <p css={fontStyleSidebar}>Booking List</p>
        </div>
      </div>

      <div
        css={containerButton}
        onClick={() => {
          setActiveTap("payout-option");
        }}
      >
        <div>
          <img
            src="/src/PublicPicture/payouticon.png"
            alt="payout"
            width="30"
          />
          <p css={fontStyleSidebar}>Payout Option</p>
        </div>
      </div>

      <div
        css={logoutStyle}
        onClick={() => {
          logout();
        }}
      >
        <div className="logout">
          <img src="/src/PublicPicture/logout.png" alt="logout" width="240" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
