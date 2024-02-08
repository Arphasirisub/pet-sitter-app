import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AuthBackground from "../../public-components/AuthBackground";

function ForgetPasswordPage() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        gap: 1rem;
        position: relative;
      `}
    >
      <div>forgot password</div>
      <AuthBackground />
    </div>
  );
}

export default ForgetPasswordPage;
