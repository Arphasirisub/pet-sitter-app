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

  const handleSubmit = (e) => {
    e.preventDefault();

    validateForm(formData, setFormErrors, formErrors);

    if (validateForm(formData, setFormErrors, formErrors)) {
      if (role === "pet_owner") {
        axios.post("http://localhost:4000/owners", { ...formData, role: role });
      } else if (role === "pet_sitter") {
        axios.post("http://localhost:4000/sitters", {
          ...formData,
          role: role,
        });
      }
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
    padding-top: 3%;
    padding-bottom: 8%;
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
    </div>
  );
}

export default RegisterPage;
