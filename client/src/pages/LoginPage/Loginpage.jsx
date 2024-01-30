/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AlternativeLogin } from "./components/AlternativeLogin";
import { Header } from "./components/Header";
import { InputBox } from "./components/InputBox";
import { SignUpLink } from "./components/SignUpLink";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
    padding-top: 3%;
    padding-bottom: 8%;
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
    </div>
  );
}

export default LoginPage;
