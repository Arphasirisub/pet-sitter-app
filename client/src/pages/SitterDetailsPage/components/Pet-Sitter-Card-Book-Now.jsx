// step30min-----------------------------------------------------------------------------------------------------------------------------------------------
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Box,
  Modal,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { Stack } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, startTransition } from "react";
import axios from "axios";
import { buttonOrange, boxModal } from "./Style-SitterDetailPage";
import moment from "moment";

const BookNowModal = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeStart, setSelectedTimeStart] = useState("");
  const [selectedTimeEnd, setSelectedTimeEnd] = useState("");
  const [timeError, setTimeError] = useState("");
  const [sitterData, setSitterData] = useState([]);
  const [sitterTimeData, setSitterTimData] = useState([]);
  const param = useParams();

  const convertTime = (date, time) => {
    const startTimeParts = time.split(":");
    const startHours = parseInt(startTimeParts[0], 10);
    const startMinutes = parseInt(startTimeParts[1], 10);
    const currentDate = new Date(date);
    currentDate.setHours(startHours);
    currentDate.setMinutes(startMinutes);
    const timeStamp = currentDate.getTime();
    return timeStamp;
  };

  const start = convertTime(selectedDate, selectedTimeStart);
  const stop = convertTime(selectedDate, selectedTimeEnd);

  const fetchData = async () => {
    try {
      const response1 = await axios.get(
        `http://localhost:4000/sitters/${param.id}`
      );
      const response2 = await axios.get(
        `http://localhost:4000/bookings/${param.id}`,
        {
          params: {
            booked_start: selectedTimeStart, // ส่งวันที่ที่เลือกไปเพื่อดึงการนัดหมายในวันนั้น
            booked_stop: selectedTimeEnd,
          },
        }
      );
      setSitterData(response1.data);
      setSitterTimData(response2.data);
      console.log(response1);
      console.log(response2);
    } catch (error) {
      console.error("Error fetching sitter details:", error);
    }
  };

  useEffect(() => {
    fetchData();
    if (selectedDate) {
      const start = convertTime(selectedDate, selectedTimeStart);
      const stop = convertTime(selectedDate, selectedTimeEnd);
      console.log("Start time:", start);
      console.log("Stop time:", stop);
      validateTime();
    }
  }, [selectedDate, selectedTimeStart, selectedTimeEnd]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedDate(null);
    setSelectedTimeStart("");
    setSelectedTimeEnd("");
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChangeStart = (event) => {
    setSelectedTimeStart(event.target.value);
  };

  const handleTimeChangeEnd = (event) => {
    setSelectedTimeEnd(event.target.value);
  };

  const validateTime = () => {
    if (
      selectedDate &&
      selectedTimeStart &&
      selectedTimeEnd &&
      selectedTimeEnd <= selectedTimeStart
    ) {
      setTimeError("End time must be after start time");
      setSelectedDate(null);
      setSelectedTimeStart("");
      setSelectedTimeEnd("");
    } else {
      setTimeError("");
    }
  };

  const handleSubmit = () => {
    if (timeError) {
      console.error("Invalid time selection:", timeError);
      return;
    } else if (!selectedDate || !selectedTimeStart || !selectedTimeEnd) {
      setTimeError("End time must be after start time");
      console.error("Invalid selection:", timeError);
      return;
    }

    console.log(new Date(start));
    console.log(new Date(stop));
    console.log(param.id);
    navigate(`/booking/${start}/${stop}/${param.id}`);
    handleClose();
  };

  const generateTimeOptions = () => {
    const options = [];
    const startTime = 0 * 60; // Start time in minutes
    const endTime = 23.5 * 60; // End time in minutes (24 hours)
    const step = 30; // Time step in minutes

    for (let time = startTime; time < endTime; time += step) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      const formattedTime = `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}`;
      options.push({ value: formattedTime, label: formattedTime });
    }

    return options;
  };

  return (
    <>
      <Stack
        css={css`
          border-top: 1px solid #e0e0e0;
        `}
      >
        <Button onClick={handleOpen} sx={buttonOrange}>
          Book Now
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...boxModal, width: 500 }}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              marginBottom={5}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                id="parent-modal-title"
              >
                Booking
              </Typography>
              <Button
                onClick={handleClose}
                sx={{
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#fff1ec",
                    color: "#ff7037",
                  },
                }}
              >
                X
              </Button>
            </Stack>
            <Typography id="parent-modal-description" marginBottom={2}>
              Select date and time you want to schedule the service.
            </Typography>
            <form>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack marginBottom={2}>
                  <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    disablePast={true}
                    onChange={(newDate) => handleDateChange(newDate)}
                    textField={(params) => (
                      <TextField {...params} variant="standard" />
                    )}
                  />
                </Stack>

                <Stack
                  direction={"row"}
                  justifyContent={"space-around"}
                  spacing={2}
                >
                  <Select
                    value={selectedTimeStart}
                    onChange={handleTimeChangeStart}
                    label="Select Time Start"
                    variant="standard"
                    sx={{ mt: 2, width: "200px" }}
                  >
                    {generateTimeOptions().map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <Typography>To</Typography>
                  <Select
                    value={selectedTimeEnd}
                    onChange={handleTimeChangeEnd}
                    label="Select Time End"
                    variant="standard"
                    sx={{ mt: 2, width: "200px" }}
                  >
                    {generateTimeOptions().map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </LocalizationProvider>
              <Stack>
                <Typography>
                  {timeError && (
                    <Typography color="error">{timeError}</Typography>
                  )}
                </Typography>
              </Stack>
              <Button onClick={handleSubmit} sx={buttonOrange}>
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </Stack>
    </>
  );
};

export default BookNowModal;
