/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "../../public-components/Navbar";
import SideBar from "./components/SideBar";
import DynamicComponents from "./components/DynamicCoponents";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function OwnerMangementPage() {
  const params = useParams();

  const [activeTaps, setActiveTaps] = useState(params.activeTaps);

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
          padding: 40px 0 80px 0;
        `}
      >
        <SideBar setActiveTaps={setActiveTaps} activeTaps={activeTaps} />
        <DynamicComponents activeTaps={activeTaps} />
      </div>
    </>
  );
}
export default OwnerMangementPage;
