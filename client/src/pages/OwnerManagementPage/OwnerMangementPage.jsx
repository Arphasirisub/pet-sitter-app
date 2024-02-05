/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "../../public-components/Navbar";
import SideBar from "./components/SideBar";
import DynamicComponents from "./components/DynamicCoponents";
import { useState } from "react";
function OwnerMangementPage() {
  const [activeTaps, setActiveTaps] = useState("");
  return (
    <>
      <Navbar />
      <div
        css={css`
          display: flex;
          width: 100vw;
          height: 100%;
          justify-content: center;
          gap: 3%;
          padding-top: 40px;
          background-color: rgb(250, 250, 251);
        `}
      >
        <SideBar setActiveTaps={setActiveTaps} activeTaps={activeTaps} />
        <DynamicComponents activeTaps={activeTaps} />
      </div>
    </>
  );
}
export default OwnerMangementPage;
