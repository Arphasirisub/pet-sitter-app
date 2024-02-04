/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "../../public-components/Navbar";
import Header from "./components/Header";
import Footer from "../../public-components/Footer";
import Content from "./components/Content";
import Banner from "./components/ฺBanner";
import { useAuth } from "../../contexts/authentication";

function OwnerHomePage() {
  const { state } = useAuth();

  return (
    <div
      css={css`
        width: 100%;
        /* height: 3483px; */
      `}
    >
      <Navbar />
      <Header />
      <Content />
      <Banner />
      <Footer />
    </div>
  );
}

export default OwnerHomePage;
