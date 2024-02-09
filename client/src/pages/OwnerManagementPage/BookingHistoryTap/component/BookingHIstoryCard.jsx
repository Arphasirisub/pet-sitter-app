/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  boxContainer,
  rowLayout,
  imageProflie,
  sitterNameContainer,
  tradeNameStyle,
  fontsStyle,
  flexColumn,
  transactionStyle,
  line,
  dateTimeRowLayout,
  dateTimeTitle,
  dateTimeFont,
  perpendicular,
  detailBox,
  detailFont,
  imgNameContainer,
  hourPetTypeContainer,
} from "./bookingHistoryTapStyle.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import WaitingConfirmStatus from "../statusBar/waitingConfirmStatus.jsx";
import InServiceStatus from "../statusBar/InserviceStatus.jsx";
import SuccessStatus from "../statusBar/sucessStatus.jsx";
import WaitingServiceStatus from "../statusBar/WaitingService.jsx";
import CancelStatus from "../statusBar/CancelStatus.jsx";

const getColorByStatus = (status) => {
  switch (status) {
    case "In service":
      return "#76d0fc";
    case "Waiting for confirm":
      return "#fa8ac0";
    case "Waiting for service":
      return "#ffca62";
    case "Success":
      return "#1ecd83";
    case "Canceled":
      return "#ea1110";
    default:
      return "black";
  }
};

function BookingHistoryCard({
  handleOpen
}) {
  const [ownerBookings, setOwnerBookings] = useState([]);
  const param = useParams();

  const getHistory = async () => {
    try {
      const result = await axios(
        `http://localhost:4000/bookings/owner/${param.id}`
      );
      console.log(result.data);
      setOwnerBookings(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHistory();
  }, [param.id]);
  return (
    <>
      {ownerBookings.map((booking, index) => {
        let statusComponent;
        if (booking.status === "Waiting for confirm") {
          statusComponent = <WaitingConfirmStatus ownerBookings={ownerBookings}/>;
        } else if (booking.status === "In service") {
          statusComponent = <InServiceStatus />;
        } else if (booking.status === "Success") {
          statusComponent = <SuccessStatus booking={booking} />;
        } else if (booking.status === "Waiting for service") {
          statusComponent = <WaitingServiceStatus />;
        } else if (booking.status === "Canceled") {
          statusComponent = <CancelStatus />;
        } else {
          statusComponent = null;
        }

        return (
          <div
            className="card-container"
            css={boxContainer}
            key={index}
            onClick={booking.status !== "Success" ? () => handleOpen(booking) : null}
          >
            <div className="row-layout" css={rowLayout}>
              <div className="img-name-container" css={imgNameContainer}>
                <img
                  className="img-profile"
                  css={imageProflie}
                  src={booking.sitters.profile_img}
                />
                <div
                  className="sitters-name-container"
                  css={sitterNameContainer}
                >
                  <p className="trade-name-style" css={tradeNameStyle}>
                    {booking.sitters.trade_name}
                  </p>
                  <p className="full-name-style" css={fontsStyle}>
                    By {booking.sitters.full_name}
                  </p>
                </div>
              </div>

              <div className="column-layout" css={flexColumn}>
                <p className="transaction-style" css={transactionStyle}>
                  Transaction date: {booking.transaction_date}
                </p>
                <p
                  className="status-style"
                  style={{
                    marginTop: "7px",
                    fontSize: "12px",
                    marginLeft: "auto",
                    color: getColorByStatus(booking.status),
                  }}
                >
                  ⏺ {booking.status}
                </p>
              </div>
            </div>
            <hr className="line" css={line} />
            <div className="row-layout-date-time" css={dateTimeRowLayout}>
              <div className="column-layout" css={flexColumn}>
                <p className="date-time-title-style" css={dateTimeTitle}>
                  Date & Time:
                </p>
                <div className="date-time-data-style" css={dateTimeFont}>
                  {booking.booked_date}
                  <span
                    css={css`
                      color: #7b7e8f;
                      margin: 0px 6px;
                    `}
                  >
                    |
                  </span>
                  {booking.booked_time}
                </div>
              </div>
              <div
                className="hour-pet-type-container"
                css={hourPetTypeContainer}
              >
                <div className="perpendicular" css={perpendicular}></div>
                <div className="hour-container" css={detailBox}>
                  <p className="hour-title-font" css={dateTimeTitle}>
                    Hour:
                  </p>
                  <p className="hour-data-font" css={detailFont}>
                    {booking.duration}
                  </p>
                </div>
              </div>
              <div
                className="hour-pet-type-container"
                css={hourPetTypeContainer}
              >
                <div className="perpendicular" css={perpendicular}></div>
                <div className="pet-container" css={detailBox}>
                  <p className="pet-title-font" css={dateTimeTitle}>
                    Pet:
                  </p>
                  <p className="pet-data-font" css={detailFont}>
                    {booking.pet_booking.map((pet, index) => (
                      <span key={index}>
                        {pet.pet_id.pet_name}
                        {index !== booking.pet_booking.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            {statusComponent}
          </div>
        );
      })}
    </>
  );
}

export default BookingHistoryCard;
