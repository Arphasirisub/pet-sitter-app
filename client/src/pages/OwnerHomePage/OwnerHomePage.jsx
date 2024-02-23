/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "../../public-components/Navbar.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "../../public-components/Footer.jsx";
import Content from "./components/Content/Content.jsx";
import Banner from "./components/Banner/Banner.jsx";
import { useAuth } from "../../contexts/authentication.jsx";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import NewUserModal from "./components/NewUserModal.jsx";
import { useAlternativeLogin } from "../../contexts/alternativeLogin.jsx";

function OwnerHomePage() {
  const navigate = useNavigate();
  const { alternativeLoginToken } = useAlternativeLogin();
  const { checkToken, state } = useAuth();

  useEffect(() => {
    const url = window.location.href;
    const parsedUrl = new URL(url);
    const params = new URLSearchParams(parsedUrl.hash.substr(1));
    const accessToken = params.get("access_token");
    console.log(accessToken);

    if (accessToken) {
      alternativeLoginToken(accessToken);
    }
  }, []);

  // useEffect(() => {
  //   const url = window.location.href;
  //   const parsedUrl = new URL(url);
  //   const params = new URLSearchParams(parsedUrl.search);
  //   const accessPermission = params.get("code");

  //   if (accessPermission) {
  //     const fetchPermission = async () => {
  //       try {
  //         // Make a POST request to your backend to handle the permission code
  //         const response = axios.post(`http://localhost:4000/google/callback`, {
  //           code: accessPermission,
  //         });
  //         console.log(response.data); // Log the response from the backend

  //         // Handle the response as needed
  //       } catch (error) {
  //         console.error("Error handling permission code:", error);
  //         // Handle error if necessary
  //       }
  //     };

  //     fetchPermission(); // Call the function to make the POST request
  //   }
  // }, []);

  return (
    <div>
      <Navbar />

      <Header />
      <Content />
      <Banner />
      <Footer />
      <NewUserModal />
    </div>
  );
}

export default OwnerHomePage;
