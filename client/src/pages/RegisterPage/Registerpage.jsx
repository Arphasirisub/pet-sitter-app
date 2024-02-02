/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import LoginLink from "./components/LoginLink";
import SelectRole from "./components/SelectRole";
import validateForm from "./validateForm";
import { AlternativeLogin } from "../LoginPage/components/AlternativeLogin";
import AuthBackground from "../../public-components/AuthBackground";
import { useAuth } from "../../contexts/authentication";

function RegisterPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm(formData, setFormErrors, formErrors);

    if (isValid) {
      register({
        ...formData, // Spread the properties of formData
        role: role, // Add the 'role' property
        profile_img:
          "https://wajvygdhtyqvxzpizdqw.supabase.co/storage/v1/object/public/public-picture/newUserIcon.png",
      });

      alert("Sign up successfuly");

      navigate("/login");
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
    position: relative;
    gap: 1rem;
  `;

  return (
    <div css={pageLayout}>
      <Header />

      <SelectRole role={role} setRole={setRole} />

      {role && (
        <InputBox
          formData={formData}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          formErrors={formErrors}
        />
      )}

      <AlternativeLogin />

      <LoginLink navigate={navigate} />
      <AuthBackground />
    </div>
  );
}

export default RegisterPage;
