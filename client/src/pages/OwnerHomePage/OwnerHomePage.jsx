/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "../../public-components/Navbar.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "../../public-components/Footer.jsx";
import Content from "./components/Content/Content.jsx";
import Banner from "./components/Banner/Banner.jsx";
import { useAuth } from "../../contexts/authentication.jsx";

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
