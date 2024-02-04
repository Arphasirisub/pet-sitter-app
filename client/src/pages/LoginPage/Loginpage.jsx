/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AlternativeLogin } from "./components/AlternativeLogin";
import { Header } from "./components/Header";
import { InputBox } from "./components/InputBox";
import { SignUpLink } from "./components/SignUpLink";
import axios from "axios";
import AuthBackground from "../../public-components/AuthBackground";
import { useAuth } from "../../contexts/authentication";

function LoginPage({ setToken, token }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({
      email: formData.email,
      password: formData.password,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

=======

function LoginPage() {
>>>>>>> feat-petsitter-bookinglist
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
