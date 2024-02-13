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
import { useBookingTools } from "../../../contexts/BookingTools";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

function BookingResultPage(sitter_id) {
  const navigate = useNavigate();
  const param = useParams();
  const { getBookingData, bookingData, selectedTimeStart, selectedTimeEnd } =
    useBookingTools();

  useEffect(() => {
    getBookingData(sitter_id);
    console.log(bookingData);
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
      {bookingData ? (
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
                  Transaction Date: Tue, 16 Oct 2022 {bookingData.created_at}
                </Typography>
                <Typography sx={bookingResultGreyText}>
                  Transaction No. : 122312 {bookingData.id}
                </Typography>
              </Stack>
              <br />
              <Typography sx={bookingResultGreyText}>Pet Sitter:</Typography>
              <Typography sx={bookingResultBlackText}>
                Happy House! By Jane Maison
              </Typography>
              <br />
              <Stack direction={"row"} spacing={10}>
                <Stack>
                  <Typography sx={bookingResultGreyText}>
                    Date & Time:
                  </Typography>
                  <Stack direction={"row"} spacing={2}>
                    <Typography sx={bookingResultBlackText}>
                      25 Aug, 2023
                      {moment(selectedTimeStart).format("D MMM, YYYY")}
                    </Typography>
                    <Typography>|</Typography>
                    <Typography sx={bookingResultBlackText}>
                      7 AM - 10 AM{moment(selectedTimeStart).format("h a")} -
                      {moment(selectedTimeEnd).format("h a")}
                    </Typography>
                  </Stack>
                </Stack>
                <br />
                <Stack>
                  <Typography sx={bookingResultGreyText}>Duration:</Typography>
                  <Typography sx={bookingResultBlackText}>
                    3 hours
                    {moment(selectedTimeStart - selectedTimeEnd).format("h ")}
                  </Typography>
                </Stack>
              </Stack>
              <br />
              <Typography sx={bookingResultGreyText}>Pet:</Typography>
              <Typography sx={bookingResultBlackText}>Bubba, Daisy</Typography>
              <br />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                paddingTop={2}
                borderTop={2}
                borderColor={"#94959d"}
              >
                <Typography sx={bookingResultBlackText}>Total</Typography>
                <Typography sx={bookingResultBlackText}>900.00 THB</Typography>
              </Stack>
            </Box>
          </Box>
          <Stack className="button" direction={"row"} spacing={3} marginTop={5}>
            <Button
              className="booking-history"
              onClick={() => {
                navigate(`/owner/${sitter_id}/bookingHistory`);
              }}
              sx={buttonBookingResult}
            >
              Booking Detail
            </Button>
            <Button
              className="booking-history"
              onClick={() => {
                navigate(`/`);
              }}
              sx={buttonBookingResult}
            >
              Back To Home
            </Button>
          </Stack>
        </Stack>
      ) : (
        <CircularProgress color="warning" />
      )}

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
export default BookingResultPage;
