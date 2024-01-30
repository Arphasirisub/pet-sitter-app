/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "../../public-components/Navbar";
import Header from "./components/Header";
import Footer from "../../public-components/Footer";
function OwnerHomePage() {
  return (
    <div
      css={css`
        width: 100vw;
        height: 3243px;
        background: white;
      `}
    >
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
export default OwnerHomePage;
