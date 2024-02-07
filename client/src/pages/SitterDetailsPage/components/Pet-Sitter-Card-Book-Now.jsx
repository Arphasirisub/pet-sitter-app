// step30min-----------------------------------------------------------------------------------------------------------------------------------------------
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
import { useState, useEffect } from "react";
import axios from "axios";
import { buttonOrange, boxModal } from "./Style-SitterDetailPage";

const BookNowModal = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeStart, setSelectedTimeStart] = useState("");
  const [selectedTimeEnd, setSelectedTimeEnd] = useState(`00:00`);
  const [timeError, setTimeError] = useState("");
  const [sitterData, setSitterData] = useState([]);
  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/sitters/${param.id}`
        );
        setSitterData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching sitter details:", error);
      }
    };

    fetchData();
  }, [param.id]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    validateTime();
  };

  const handleTimeChangeStart = (event) => {
    setSelectedTimeStart(event.target.value);
    validateTime();
  };

  const handleTimeChangeEnd = (event) => {
    setSelectedTimeEnd(event.target.value);
    validateTime();
  };

  const validateTime = () => {
    if (
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
    // Convert time strings to hours and minutes
    const startTimeParts = selectedTimeStart.split(":");
    const stopTimeParts = selectedTimeEnd.split(":");
    const startHours = parseInt(startTimeParts[0], 10);
    const startMinutes = parseInt(startTimeParts[1], 10);
    const stopHours = parseInt(stopTimeParts[0], 10);
    const stopMinutes = parseInt(stopTimeParts[1], 10);

    // Set hours and minutes in the date object
    const currentDate = new Date(selectedDate);
    currentDate.setHours(startHours);
    currentDate.setMinutes(startMinutes);
    const startTimeStamp = currentDate.getTime();

    // To get the combined date and stop time, create a new date object and set the stop time
    const endDate = new Date(currentDate);
    endDate.setHours(stopHours);
    endDate.setMinutes(stopMinutes);
    const endTimeStamp = endDate.getTime();

    console.log(startTimeStamp);
    console.log(endTimeStamp);
    console.log(new Date(startTimeStamp));
    console.log(new Date(endTimeStamp));
    console.log(param.id);
    navigate(`/booking/${startTimeStamp}/${endTimeStamp}/${param.id}`);
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
      <Stack>
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
                  {timeError && (
                    <Typography color="error">{timeError}</Typography>
                  )}
                </Stack>
              </LocalizationProvider>
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
