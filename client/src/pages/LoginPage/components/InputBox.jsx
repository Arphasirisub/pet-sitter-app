/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export function InputBox({ handleInputChange, formData }) {
  return (
    <>
      {" "}
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          text-align: center;
        `}
      >
        <FormControlLabel control={<Checkbox />} label="Remember?" />
        <p
          css={css`
            color: rgb(255, 112, 55);
            &:hover {
              cursor: pointer;
            }
          `}
        >
          Forget Password?
        </p>
      </div>
      <button
        type="submit"
        variant="contained"
        color="primary"
        css={css`
          background-color: rgb(255, 112, 55);
          border-radius: 20px;
          padding: 12px;
          border: none;
          color: white;
          font-size: 16px;
          &:hover {
            cursor: pointer;
          }
        `}
      >
        Login
      </button>
    </>
  );
}
