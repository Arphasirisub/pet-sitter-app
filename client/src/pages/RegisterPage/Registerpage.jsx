/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import LoginLink from "./components/LoginLink";
import SelectRole from "./components/SelectRole";
import validateForm from "./validateForm";
import { AlternativeLogin } from "../LoginPage/components/AlternativeLogin";
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

function RegisterPage() {
  const { register, state, setState, login } = useAuth();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm(formData, setFormErrors, formErrors);

    if (isValid) {
      register({
        ...formData,
        role: role,
      });
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
    width: 100vw;
  `;
  const inutLayout = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  const modalStlye = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: white;
    padding-top: 10px;

    box-shadow: 24px;

    display: flex;
    justify-content: center;

    flex-direction: column;
    background-color: white;
    border-radius: 20px;
  `;

  return (
    <>
      {/* page */}
      <div css={pageLayout}>
        <Header />
        <div css={inutLayout}>
          {state.isLoading === false && (
            <>
              <SelectRole role={role} setRole={setRole} />
              {role && (
                <InputBox
                  formData={formData}
                  handleSubmit={handleSubmit}
                  handleInputChange={handleInputChange}
                  formErrors={formErrors}
                />
              )}
            </>
          )}
          {state.isLoading && <CircularProgress size={50} color="primary" />}
        </div>

        <AlternativeLogin />

        <LoginLink navigate={navigate} />
        <AuthBackground />
      </div>
      {/* error modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={!!state.isSignUpError} // Ensure it's always a boolean
        onClose={() => {
          setState({ ...state, isSignUpError: null, isLoading: false });
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={!!state.isSignUpError}>
          <Box css={modalStlye} sx={{ minHeight: 150 }}>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 15px;
              `}
            >
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 10px;
                `}
              >
                <img
                  src="https://i.pinimg.com/736x/d0/17/47/d01747c4285afa4e7a6e8656c9cd60cb.jpg"
                  css={css`
                    width: 20px;
                    height: 20px;
                  `}
                ></img>

                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Signup Failed
                </Typography>
              </div>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                It seems that your email is already in use. Please try signing
                up with a different email.
              </Typography>
            </div>
            <Divider
              css={css`
                background-color: rgba(255, 255, 255, 0.85);
              `}
            />
            <Button
              onClick={() => {
                setState({ ...state, isSignUpError: null, isLoading: false });
              }}
              css={css`
                padding-bottom: 10px;
              `}
            >
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
      {/* success modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={state.isSignUpError === false}
        onClose={() => {
          setState({ ...state, isSignUpError: null, isLoading: false });
          navigate("/login");
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={state.isSignUpError === false}>
          <Box css={modalStlye} sx={{ minHeight: 200 }}>
            <div
              css={css`
                display: flex;
                flex-direction: column;

                align-items: center;
                padding-bottom: 30px;
              `}
            >
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                css={css`
                  display: flex;
                  gap: 10px;
                `}
              >
                <img
                  css={css`
                    width: 30px;
                  `}
                  src="https://img.freepik.com/premium-vector/green-check-mark-icon-symbol-logo-circle-tick-symbol-green-color-vector-illustration_685751-503.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706486400&semt=ais"
                />
                Sign Up Successful
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Your account has been created successfully.
              </Typography>
            </div>
            <Divider
              css={css`
                background-color: rgba(255, 255, 255, 0.85);
                height: 3px;
              `}
            />
            <div
              css={css`
                display: flex;
                justify-content: space-around;
                width: 100%;
                padding-top: 20px;
              `}
            >
              <Button
                onClick={async () => {
                  await login({
                    email: formData.email,
                    password: formData.password,
                  });
                  setState({ ...state, isSignUpError: null, isLoading: false });
                }}
              >
                Go to Website
              </Button>
              <Button
                onClick={() => {
                  setState({ ...state, isSignUpError: null, isLoading: false });
                  navigate("/login");
                }}
              >
                Close
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default RegisterPage;
