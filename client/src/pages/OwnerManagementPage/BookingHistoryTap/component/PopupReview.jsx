/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Modal from "@mui/material/Modal";
import { buttonReview, line } from "./bookingHistoryTapStyle";
import { useState } from "react";
import { closeButton } from "./PopupCardStyle";
import {
  popupReview,
  reviewContainer,
  titleContainer,
  titleFont,
  titleRatingFont,
  inputReviewBox,
  inputLayout,
  buttonLayout,
  cancelButton,
  reviewButton,
} from "./PopupReviewStyle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ReviewPopup() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(5);
  const [input, setInput] = useState("");
  

  return (
    <div>
      <button onClick={handleOpen} css={buttonReview}>
        Review
      </button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} css={popupReview}>
          <div css={reviewContainer}>
            <div css={titleContainer}>
              <p css={titleFont}>Rating & Review</p>
              <button
                className="close-button"
                css={closeButton}
                onClick={handleClose}
              >
                x
              </button>
            </div>
            <hr className="line" css={line} />
            <p css={titleRatingFont}>What is your rate?</p>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "4px",
                marginBottom: "60px",
                "& > legend": { mt: 2 },
                "& .MuiRating-iconFilled": {
                  color: "#1ecd83",
                  fontSize: "50px",
                },
                "& .MuiRating-iconEmpty": { fontSize: "50px" },
              }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <p css={titleRatingFont}>Share more about your experience</p>
            <div css={inputLayout}>
              <input
                css={inputReviewBox}
                placeholder="Your review..."
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                value={input}
              />
            </div>
            <div css={buttonLayout}>
              <button onClick={handleClose} css={cancelButton}>
                Cancel
              </button>
              <button css={reviewButton}>Sent Review&Rating</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ReviewPopup;
