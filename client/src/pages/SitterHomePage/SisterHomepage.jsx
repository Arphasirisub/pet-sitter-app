/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/HeadNav";
import Body from "./components/Body";
import { useState } from "react";
import DynamicCompenents from "./components/DynamicComonents";

const appStyle = css`
  display: flex;
  height: 100vh;
`;

const contentStyle = css`
  display: flex;
  flex: 1;
  position: relative;
`;

const topBarStyle = css`
  position: absolute;
`;

const contentContainerStyle = css`
  display: flex;
  flex-direction: column;
`;

function SisterHomepage() {
  const [activeTap, setActiveTap] = useState("");

  return (
    <div
      css={css`
        justify-content: center;
      `}
    >
      <div css={appStyle}>
        <div css={contentStyle}>
          <Sidebar
            css={topBarStyle}
            activeTap={activeTap}
            setActiveTap={setActiveTap}
          />
          <div css={contentContainerStyle}>
            <TopBar />
            <DynamicCompenents activeTap={activeTap} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SisterHomepage;
