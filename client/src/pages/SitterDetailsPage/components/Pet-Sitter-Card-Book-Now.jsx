import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const BookNowModal = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeStart, setSelectedTimeStart] = useState(null);
  const [selectedTimeEnd, setSelectedTimeEnd] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChangeStart = (time) => {
    setSelectedTimeStart(time);
  };
  const handleTimeChangeEnd = (time) => {
    setSelectedTimeEnd(time);
  };

  const handleSubmit = () => {
    console.log("Date:", selectedDate);
    console.log("Time:", selectedTimeStart);
    console.log("Time:", selectedTimeEnd);
    navigate(`/`);
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          width: 300,
          backgroundColor: "#ff7037",
          color: "white",
          borderRadius: 20,
          "&:hover": {
            backgroundColor: "#fff1ec",
            color: "#ff7037",
          },
        }}
      >
        Book Now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            marginBottom={5}
          >
            <Typography variant="h6" fontWeight="bold" id="parent-modal-title">
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
                  onChange={(newDate) => handleDateChange(newDate)}
                  sx={{ mt: 2 }}
                  textField={(params) => (
                    <TextField {...params} variant="standard" />
                  )}
                />
              </Stack>

              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={2}
              >
                <TimePicker
                  label="Select Time"
                  value={selectedTimeStart}
                  onChange={(newTime) => handleTimeChangeStart(newTime)}
                  ampm={false}
                  minutesStep={30} // Set time intervals to 30 minutes
                  dateFormat="h:mm aa" // Set the desired time format
                  sx={{ mt: 2 }}
                  textField={(params) => (
                    <TextField {...params} variant="standard" />
                  )}
                />
                <p>-</p>
                <TimePicker
                  label="Select Time"
                  value={selectedTimeEnd}
                  onChange={(newTime) => handleTimeChangeEnd(newTime)}
                  ampm={false}
                  minutesStep={30} // Set time intervals to 30 minutes
                  dateFormat="h:mm aa" // Set the desired time format
                  sx={{ mt: 2 }}
                  textField={(params) => (
                    <TextField {...params} variant="standard" />
                  )}
                />
              </Stack>
            </LocalizationProvider>
            <Button
              onClick={handleSubmit}
              sx={{
                width: "100%",
                backgroundColor: "#ff7037",
                color: "white",
                borderRadius: 20,
                mt: 2,
                "&:hover": {
                  backgroundColor: "#fff1ec",
                  color: "#ff7037",
                },
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default BookNowModal;
