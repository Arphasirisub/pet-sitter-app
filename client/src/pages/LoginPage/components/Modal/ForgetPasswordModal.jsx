/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useAuth } from "../../../../contexts/authentication";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

function ForgetPasswordModal() {
  const [forgetEmail, setForgetEmail] = useState("");
  const { state, setState } = useAuth();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={state.isForgetPassword}
      onClose={() => {
        setState({ ...state, isForgetPassword: false });
      }}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={state.isForgetPassword}>
        <Box
          css={css`
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
            padding-top: 35px;
          `}
          sx={{ minHeight: 150 }}
        >
          <div
            css={css`
              font-size: 24px;
              font-weight: bold;
            `}
          >
            Forgot password?
          </div>
          <form
            css={css`
              display: flex;
              flex-direction: column;
              gap: 10px;
              width: 100%;
              align-items: center;
            `}
            onSubmit={(event) => {
              event.preventDefault();
              setState({ ...state, isForgetPassword: false });
            }}
          >
            <p>Input your email for reset your password</p>
            <div
              css={css`
                display: flex;
                justify-content: space-evenly;
                width: 100%;
                align-items: center;
              `}
            >
              <TextField
                required
                id="outlined-required"
                label="Your email"
                placeholder="example@email.com"
                type="email"
                sx={{ width: "65%" }}
                value={forgetEmail}
                onChange={() => {
                  setForgetEmail(e.target.value);
                }}
              />
              <Button type="submit">Confirm</Button>
            </div>
          </form>
          <Divider sx={{ my: 2, height: 3 }} />
          <Button
            onClick={() => {
              setState({ ...state, isForgetPassword: false });
            }}
          >
            Close
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ForgetPasswordModal;
