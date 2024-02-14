/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  waitConfirmContainer,
  statusBoxFont,
  buttonReview,
} from "../styleComponent/bookingHistoryTapStyle";

function WaitingConfirmStatus() {
  return (
    <div className="status-card" css={waitConfirmContainer}>
      <p className="status-info-card" css={statusBoxFont}>
        Waiting Pet Sitter for confirm booking
      </p>
      {/* <button css={buttonReview}>Cancel</button> */}
    </div>
  );
}

export default WaitingConfirmStatus;
