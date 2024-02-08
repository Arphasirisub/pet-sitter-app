/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AlternativeLogin } from "./components/AlternativeLogin";
import { Header } from "./components/Header";
import { InputBox } from "./components/InputBox";
import { SignUpLink } from "./components/SignUpLink";

import AuthBackground from "../../public-components/AuthBackground";
import { useAuth } from "../../contexts/authentication";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ForgetPasswordModal from "./components/Modal/ForgetPasswordModal";

function LoginPage() {
  const navigate = useNavigate();
  const { login, state, setState } = useAuth();
  const [formData, setFormData] = useState(() => {
    const storedIsRemember = localStorage.getItem("isRemember");
    const storedEmail = localStorage.getItem("email");

    return {
      email: storedEmail || "",
      password: "",
      isRemember: storedIsRemember === "true",
    };
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login({
      email: formData.email,
      password: formData.password,
      isRemember: formData.isRemember,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "isRemember") {
      localStorage.setItem("isRemember", checked);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
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
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 30%;
  `;

  const modalStlye = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    background-color: white;
    box-shadow: 24px;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
  `;

  return (
    <>
      {/* page */}

      <div css={pageLayout}>
        <Header />
        {state.isLoading ? (
          <CircularProgress size={50} color="primary" />
        ) : (
          <>
            <form css={formLayout} onSubmit={handleSubmit}>
              <InputBox
                formData={formData}
                handleInputChange={handleInputChange}
              />
            </form>
            <AlternativeLogin />
          </>
        )}

        <SignUpLink navigate={navigate} />
        <AuthBackground />
      </div>

      {/*invalid user modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={state.isSignInError}
        onClose={() => {
          setState({ ...state, isSignInError: false });
          setFormData({ ...formData, password: "" });
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={state.isSignInError}>
          <Box css={modalStlye} sx={{ minHeight: 150 }}>
            {" "}
            {/* Set a minimum height */}
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Login Failed
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Your email or password is incorrect. Please try again.
            </Typography>
            <Divider sx={{ my: 2, backgroundColor: "red", height: 3 }} />
            <Button
              onClick={() => {
                setState({ ...state, isSignInError: false });
                setFormData({ ...formData, password: "" });
              }}
            >
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>

      {/*forget password modal */}
      <ForgetPasswordModal />
    </>
  );
}

export default LoginPage;
