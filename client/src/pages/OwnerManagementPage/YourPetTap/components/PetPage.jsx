/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "@mui/material/Button";

function PetPage() {
  return (
    <div className="container_yourpet">
      <div
        className="section_topic"
        css={css`
          display: flex;
          justify-content: space-between;
          padding: 24px 36px;
        `}
      >
        <h3
          css={css`
            font-weight: 700;
            font-size: 24px;
          `}
        >
          Your Pet
        </h3>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={() => {
            navigate("/list");
          }}
          css={css`
            background-color: #ff7037;
            font-family: "Satoshi", sans-serif;
            font-weight: 700;
            font-size: 16px;
            text-align: center;
            color: white;
            font-size: 12px;
            padding: 10px; /* Adjust padding for responsiveness */
            border-radius: 20px; /* Adjust border-radius for responsiveness */
            transition: background-color 0.3s ease;
            width: 127px;
            height: 48px;

            &:hover {
              color: black;
            }
            padding: 12px 24px 12px 24px;
            border-radius: 99px;
            border: none;
            cursor: pointer;
            margin-left: 20px;
            gap: 8px;
          `}
        >
          Create Pet
        </Button>
      </div>
      <div className="section_content"></div>
    </div>
  );
}
export default PetPage;
