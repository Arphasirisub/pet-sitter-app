/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AlternativeLogin } from "./components/AlternativeLogin";
import { Header } from "./components/Header";
import { InputBox } from "./components/InputBox";
import { SignUpLink } from "./components/SignUpLink";
import axios from "axios";
import AuthBackground from "../../public-components/AuthBackground";

function LoginPage({ setToken, token }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:4000/authentication/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      const authToken = response.data.token;
      console.log(response.data);

      // Set the token in the state
      setToken({
        token: authToken,
        role: response.data.user.role,
      });
      console.log(token);
      navigate("/")
    } catch (error) {
      console.error("Authentication failed:", error.message);
      alert(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const pageLayout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 1rem;
    position: relative;
  `;

  const formLayout = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30%;
  `;

  return (
    <div css={pageLayout}>
      <Header />
      <form css={formLayout} onSubmit={handleSubmit}>
        <InputBox formData={formData} handleInputChange={handleInputChange} />
      </form>
      <AlternativeLogin />
      <SignUpLink navigate={navigate} />
      <AuthBackground />
    </div>
  );
}

export default LoginPage;
