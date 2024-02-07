/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  bookingContainer,
  titleSytle,
  boxContainer,
  rowLayout,
  imageProflie,
  ownerNameContainer,
  tradeNameStyle,
  fontsStyle,
  flexColumn,
  statusStyle,
  transactionStyle,
  line,
  dateTimeRowLayout,
  dateTimeTitle,
  dateTimeFont,
  perpendicular,
  detailBox,
  statusBoxContainer,
  detailFont,
  statusBoxFont,
} from "./bookingListStyle";
import newUser from "../../../PublicPicture/newUserIcon.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookingHistoryTap() {
  const [ownerHistory, setOwnerHistory] = useState([]);
  const param = useParams();

  const getHistory = async () => {
    try {
      const result = await axios(
        `http://localhost:4000/bookings/owner/history/${param.id}`
      );
      console.log(result.data);
      setOwnerHistory(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHistory();
  }, [param.id]);

  return (
    <div css={bookingContainer}>
      <p css={titleSytle}>Booking History</p>
      {ownerHistory.map((history, index) => {
        return (
          <div css={boxContainer} key={index}>
            <div css={rowLayout}>
              <img css={imageProflie} src={history.profile_img} />
              <div css={ownerNameContainer}>
                <p css={tradeNameStyle}>{history.sitters.trade_name}</p>
                <p css={fontsStyle}>By {history.sitters.full_name}</p>
              </div>
              <div css={flexColumn}>
                <p css={transactionStyle}>
                  Transaction date: {history.transaction_date}
                </p>
                <p css={statusStyle}>⏺ {history.status}</p>
              </div>
            </div>
            <hr css={line} />
            <div css={dateTimeRowLayout}>
              <div css={flexColumn}>
                <p css={dateTimeTitle}>Date & Time:</p>
                <div css={dateTimeFont}>
                  {history.booked_date}
                  <span
                    css={css`
                      color: #7b7e8f;
                      margin: 0px 6px;
                    `}
                  >
                    |
                  </span>
                  {history.booked_time}
                </div>
              </div>
              <div css={perpendicular}></div>
              <div css={detailBox}>
                <p css={dateTimeTitle}>Hour:</p>
                <p css={detailFont}>{history.duration}</p>
              </div>
              <div css={perpendicular}></div>
              <div css={detailBox}>
                <p css={dateTimeTitle}>Pet:</p>
                <p css={detailFont}>
                  {history.pet_booking.map((pet, index) => (
                    <span key={index}>{pet.pet_id.pet_name} </span>
                  ))}
                </p>
              </div>
            </div>
            <div css={statusBoxContainer}>
              <p css={statusBoxFont}>Waiting Pet Sitter for confirm booking</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default BookingHistoryTap;
