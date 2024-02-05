/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/HeadNav";
import Body from "./BookingList/Body";
import { useState } from "react";
import DynamicCompenents from "./components/DynamicComonents";

const appStyle = css`
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const contentStyle = css`
  display: flex;
`;

const contentContainerStyle = css`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

function SisterHomepage() {
  const [activeTap, setActiveTap] = useState("pet-sitter-profile");

  return (
    <div css={appStyle}>
      <div css={contentStyle}>
        <Sidebar activeTap={activeTap} setActiveTap={setActiveTap} />
        <div css={contentContainerStyle}>
          <TopBar />
          <DynamicCompenents activeTap={activeTap} />
        </div>
      </div>
    </div>
  );
}

export default SisterHomepage;
