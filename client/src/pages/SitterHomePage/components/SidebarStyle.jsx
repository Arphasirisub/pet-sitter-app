/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const containerSidebarStyle = css`
  background-color: #fafafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 100vh;
  border-right: 1px solid #dcdfed;
  padding: 16px 0px 16px 0px;
`;

export const sectionLogoStyle = css`
  padding: 24px 40px 40px 0px;
  background-color: #fafafb;
`;

export const fontSidebarStyle = css`
  margin-left: 10px;
  color: var(--gray-500, #5b5d6f);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* Set a fixed line height */
  letter-spacing: -0.32px;
  width: 152px;
`;

export const sidebarStyle = css`
  background-color: #fafafb;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 56px;
  transition: background-color 0.3s;
`;

export const sectionLogoutStyle = css`
  margin-top: auto;
`;
