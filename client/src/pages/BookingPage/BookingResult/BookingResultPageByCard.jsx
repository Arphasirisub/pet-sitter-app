/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import bookingResultRight from "../../../PublicPicture/bookingResultRight.svg";
import bookingResultLeft from "../../../PublicPicture/bookingResultLeft.svg";
import { useNavigate, useParams } from "react-router-dom";
import {
  bookingResultBlackText,
  bookingResultContainer,
  bookingResultGreyText,
  bookingResultHeaderText,
  buttonBookingResult,
  resultBoxContent,
  resultBoxMain,
  resultHeader,
} from "./BookingResultPageStyle";
import moment from "moment";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";

function BookingResultPageByCard() {
  const navigate = useNavigate();
  const param = useParams();
  const [durationHours, setDurationHours] = useState(0);
  const [successData, setSuccessData] = useState();

  const getBookingDataAfterSuccess = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/bookings/sitter/${param.id}`
      );

      setSuccessData(response.data);
      console.log(response);
      console.log(response.data);
      console.log(param.bookingId);
    } catch (error) {
      console.error("Error fetching sitter details:", error);
    }
  };

  const calculateDurationInHours = (startTime, stopTime) => {
    const start = moment(startTime);
    const stop = moment(stopTime);
    const duration = moment.duration(stop.diff(start));
    const hours = duration.asHours();
    return hours;
  };

  const handleBookingHistory = () => {
    setDurationHours(0);
    navigate(`/owner/${successData.owner_id}/bookingHistory`);
  };

  const handleBackToHome = () => {
    setDurationHours(0);
    navigate(`/`);
  };

  useEffect(() => {
    console.log(successData);
    getBookingDataAfterSuccess(param.id);
    console.log(durationHours);
    if (successData.find((i) => i.id === param.bookingId)) {
      const startTime = successData.find(
        (i) => i.id === param.bookingId
      ).booked_start;
      const stopTime = successData.find(
        (i) => i.id === param.bookingId
      ).booked_stop;
      const duration = calculateDurationInHours(startTime, stopTime);
      setDurationHours(duration);
      console.log(duration);
    }
  }, []);
  return (
    <Stack
      className="bookingResult-container"
      direction={"row"}
      sx={bookingResultContainer}
    >
      <Stack
        className="pic-left"
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <img
          src={bookingResultLeft}
          alt="Booking Result Left"
          height={"480px"}
          width={"400px"}
        />
      </Stack>

      <Stack
        sx={{
          width: " 600px",
          height: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box className="result-header" css={resultHeader}>
          <Box className="resultBoxMain" css={resultBoxMain}>
            <Typography
              className="bookingResultHeadText"
              sx={bookingResultHeaderText}
            >
              Thank You For Booking
            </Typography>
            <Typography sx={bookingResultGreyText}>
              We will send your booking information to Pet Sitter.
            </Typography>
          </Box>
          <br />
          <Box className="resultBoxContent" css={resultBoxContent}>
            <Stack>
              <Typography sx={bookingResultGreyText}>
                Transaction Date:
              </Typography>
              <Typography sx={bookingResultGreyText}>
                Transaction No. :
              </Typography>
            </Stack>
            <br />
            <Typography sx={bookingResultGreyText}>Pet Sitter:</Typography>
            <Typography sx={bookingResultBlackText}>by</Typography>
            <br />
            <Stack direction={"row"} spacing="60px">
              <Stack>
                <Typography sx={bookingResultGreyText}>Date & Time:</Typography>
                <Stack direction={"row"} spacing={1}>
                  <Typography sx={bookingResultBlackText}>
                    book start
                  </Typography>
                  <Typography>|</Typography>
                  <Typography sx={bookingResultBlackText}>
                    time start - time end
                  </Typography>
                </Stack>
              </Stack>
              <br />
              <Stack>
                <Typography sx={bookingResultGreyText}>Duration:</Typography>
                <Typography sx={bookingResultBlackText}>
                  {durationHours} hours
                </Typography>
              </Stack>
            </Stack>
            <br />
            <Typography sx={bookingResultGreyText}>Pet:</Typography>
            <Stack direction={"row"}>
              <Typography sx={bookingResultBlackText}>
                pet name, pet name
              </Typography>
            </Stack>
            <br />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              paddingTop={2}
              borderTop={2}
              borderColor={"#94959d"}
            >
              <Typography sx={bookingResultBlackText}>Total</Typography>
              <Typography sx={bookingResultBlackText}>
                totalPrice THB
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Stack className="button" direction={"row"} spacing={3} marginTop={5}>
          <Button
            className="booking-history"
            onClick={handleBookingHistory}
            sx={buttonBookingResult}
          >
            Booking Detail
          </Button>
          <Button
            className="booking-history"
            onClick={handleBackToHome}
            sx={buttonBookingResult}
          >
            Back To Home
          </Button>
        </Stack>
      </Stack>

      <Stack
        className="pic-right"
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
      >
        <img
          src={bookingResultRight}
          alt="Booking Result Right"
          height={"480px"}
          width={"400px"}
        />
      </Stack>
    </Stack>
  );
}
export default BookingResultPageByCard;
