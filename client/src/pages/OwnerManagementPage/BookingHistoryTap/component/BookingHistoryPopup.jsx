/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import BookingHistoryCard from "./BookingHIstoryCard";
import {
  cardContainer,
  popupStyle,
  titleStyle,
  headBar,
  closeButton,
  transactionFontStyle,
  statusStyle,
  transactionContainer,
  columnLayout,
  sitterNameTitle,
  sitterNameData,
  dateTimeContainer,
  line,
  totleContainer,
} from "./PopupCardStyle";
import { useState } from "react";

function Popup() {
  const [open, setOpen] = useState(false);
  const handleOpen = (booking) => {
    setOpen(true);
    setSelectedBooking(booking);
  };
  const handleClose = () => setOpen(false);
  const [selectedBooking, setSelectedBooking] = useState({});

  return (
    <div className="cardContainer" css={cardContainer}>
      <div>
        <BookingHistoryCard
          handleOpen={handleOpen}
          selectedBooking={selectedBooking}
          setSelectedBooking={setSelectedBooking}
        />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box classname="popup-container" css={popupStyle}>
          <div className="head-bar" css={headBar}>
            <p className="title-Style" css={titleStyle}>
              Booking Detail
            </p>
            <button
              className="close-button"
              css={closeButton}
              onClick={handleClose}
            >
              x
            </button>
          </div>

          <div
            css={css`
              margin: 10px;
            `}
          >
            <p className="status-style" css={statusStyle}>
              ⏺ {selectedBooking.status}
            </p>
            <div css={transactionContainer}>
              <p className="transaction-style" css={transactionFontStyle}>
                Transactiob Date: {selectedBooking.transaction_date}
              </p>
              <p className="transaction-style" css={transactionFontStyle}>
                Transaction No. : {selectedBooking.id}
              </p>
            </div>
            <div className="pet-sitter-container" css={columnLayout}>
              <p className="sitter-name-title" css={sitterNameTitle}>
                Pet Sitter:
              </p>
              <p className="sitter-name-data" css={sitterNameData}>
                {selectedBooking.sitters && selectedBooking.sitters.trade_name}{" "}
                By{" "}
                {selectedBooking.sitters && selectedBooking.sitters.full_name}
              </p>
            </div>
            <div className="date-time-container" css={dateTimeContainer}>
              <div>
                <p css={sitterNameTitle}>Date & Time:</p>
                <p css={sitterNameData}>
                  {selectedBooking.booked_date}
                  <span
                    css={css`
                      margin: 0px 5px;
                    `}
                  >
                    |
                  </span>
                  {selectedBooking.booked_time}
                </p>
              </div>
              <div
                css={css`
                  flex-basis: 200px;
                `}
              >
                <p css={sitterNameTitle}>Duration</p>
                <p css={sitterNameData}>{selectedBooking.duration}</p>
              </div>
            </div>
            <div css={columnLayout}>
              <p css={sitterNameTitle}>Pet:</p>
              <p css={sitterNameData}>
                {selectedBooking.pet_booking &&
                  selectedBooking.pet_booking.map((pet, index) => (
                    <span key={index}>
                      {pet.pet_id.pet_name}
                      {index !== selectedBooking.pet_booking.length - 1 && ", "}
                    </span>
                  ))}
              </p>
            </div>
            <hr className="line" css={line} />
            <div css={totleContainer}>
              <p css={sitterNameData}>Total:</p>
              <p css={sitterNameData}>{selectedBooking.price}</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Popup;
