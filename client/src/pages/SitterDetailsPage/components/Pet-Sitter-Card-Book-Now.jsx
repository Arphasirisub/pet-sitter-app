import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
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
  // const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedTimeStart, setSelectedTimeStart] = useState(null);
  const [selectedTimeEnd, setSelectedTimeEnd] = useState(null);
  const [timeError, setTimeError] = useState("");

  const handleOpen = () => {
    setOpen(true);
    setSelectedTimeStart(null);
    setSelectedTimeEnd(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTimeChangeStart = (time) => {
    setSelectedTimeStart(time);
    validateTime();
  };
  const handleTimeChangeEnd = (time) => {
    setSelectedTimeEnd(time);
    validateTime();
  };

  const validateTime = () => {
    // const startTime1 = 0 * 60; // 8:00 AM in minutes
    // const endTime1 = 7 * 60; // 7:00 AM in minutes
    // const startTime2 = 21 * 60; // 21:00 PM in minutes
    // const endTime2 = 23 * 60; // 23:00 PM in minutes
    if (
      selectedTimeStart &&
      selectedTimeEnd &&
      selectedTimeEnd.isBefore(selectedTimeStart)
    ) {
      setTimeError("End time must be after start time");
    }
    //else if (
    //   selectedTimeStart &&
    //   selectedTimeEnd &&
    //   (selectedTimeStart.isBefore(startTime1) ||
    //     selectedTimeEnd.isAfter(endTime1)) &&
    //   (selectedTimeStart.isBefore(startTime2) ||
    //     selectedTimeEnd.isAfter(endTime2))
    // ) {
    //   setTimeError("Selected time must be between 8:00 and 20:00");
    // }
    else {
      setTimeError("");
    }
  };

  const handleSubmit = () => {
    if (timeError) {
      console.error("Invalid time selection:", timeError);
      return;
    }
    console.log("Time Start:", selectedTimeStart);
    console.log("Time End:", selectedTimeEnd);
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
        <Box sx={{ ...style, width: 500 }}>
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
              <Stack spacing={2}>
                {/* ... (other JSX) */}
                <DesktopDateTimePicker
                  label="Select Time Start"
                  value={selectedTimeStart}
                  disablePast={true}
                  ampm={false}
                  onChange={(newTime) => handleTimeChangeStart(newTime)}
                  sx={{ mt: 2 }}
                  textField={(params) => (
                    <TextField {...params} variant="standard" />
                  )}
                />
                <Typography>To</Typography>
                <DesktopDateTimePicker
                  label="Select Time End"
                  value={selectedTimeEnd}
                  disablePast={true}
                  ampm={false}
                  onChange={(newTime) => handleTimeChangeEnd(newTime)}
                  sx={{ mt: 2 }}
                  textField={(params) => (
                    <TextField {...params} variant="standard" />
                  )}
                />
                {timeError && (
                  <Typography color="error" sx={{ mt: 1 }}>
                    {timeError}
                  </Typography>
                )}
              </Stack>
            </LocalizationProvider>
            <Stack marginTop={5}>
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
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default BookNowModal;

//step30min-----------------------------------------------------------------------------------------------------------------------------------------------
// import React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import { Stack } from "@mui/system";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

// const BookNowModal = () => {
//   // const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTimeStart, setSelectedTimeStart] = useState("");
//   const [selectedTimeEnd, setSelectedTimeEnd] = useState("");
//   const [timeError, setTimeError] = useState("");

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleTimeChangeStart = (event) => {
//     setSelectedTimeStart(event.target.value);
//   };

//   const handleTimeChangeEnd = (event) => {
//     setSelectedTimeEnd(event.target.value);
//     validateTime();
//   };

//   const validateTime = () => {
//     if (
//       selectedTimeStart &&
//       selectedTimeEnd &&
//       selectedTimeEnd <= selectedTimeStart
//     ) {
//       setTimeError("End time must be after start time");
//     } else {
//       setTimeError("");
//     }
//   };

//   const handleSubmit = () => {
//     if (timeError) {
//       console.error("Invalid time selection:", timeError);
//       return;
//     }
//     console.log("Date:", selectedDate);
//     console.log("Time Start:", selectedTimeStart);
//     console.log("Time End:", selectedTimeEnd);
//     // navigate(`/`);
//     handleClose();
//   };

//   const generateTimeOptions = () => {
//     const options = [];
//     const startTime = 0; // Start time in minutes
//     const endTime = 24 * 60; // End time in minutes (24 hours)
//     const step = 30; // Time step in minutes

//     for (let time = startTime; time < endTime; time += step) {
//       const hours = Math.floor(time / 60);
//       const minutes = time % 60;
//       const formattedTime = `${String(hours).padStart(2, "0")}:${String(
//         minutes
//       ).padStart(2, "0")}`;
//       options.push({ value: formattedTime, label: formattedTime });
//     }

//     return options;
//   };
//   return (
//     <div>
//       <Button
//         onClick={handleOpen}
//         sx={{
//           width: 300,
//           backgroundColor: "#ff7037",
//           color: "white",
//           borderRadius: 20,
//           "&:hover": {
//             backgroundColor: "#fff1ec",
//             color: "#ff7037",
//           },
//         }}
//       >
//         Book Now
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//         <Box sx={{ ...style, width: 500 }}>
//           <Stack
//             direction={"row"}
//             justifyContent={"space-between"}
//             marginBottom={5}
//           >
//             <Typography variant="h6" fontWeight="bold" id="parent-modal-title">
//               Booking
//             </Typography>
//             <Button
//               onClick={handleClose}
//               sx={{
//                 color: "black",
//                 "&:hover": {
//                   backgroundColor: "#fff1ec",
//                   color: "#ff7037",
//                 },
//               }}
//             >
//               X
//             </Button>
//           </Stack>
//           <Typography id="parent-modal-description" marginBottom={2}>
//             Select date and time you want to schedule the service.
//           </Typography>
//           <form>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <Stack marginBottom={2}>
//                 <DatePicker
//                   label="Select Date"
//                   value={selectedDate}
//                   disablePast={true}
//                   onChange={(newDate) => handleDateChange(newDate)}
//                   sx={{ mt: 2 }}
//                   textField={(params) => (
//                     <TextField {...params} variant="standard" />
//                   )}
//                 />
//               </Stack>

//               <Stack
//                 direction={"row"}
//                 alignItems={"center"}
//                 justifyContent={"center"}
//                 spacing={2}
//               >
//                 {/* ... (other JSX) */}
//                 <Select
//                   value={selectedTimeStart}
//                   onChange={handleTimeChangeStart}
//                   label="Select Time Start"
//                   variant="standard"
//                   sx={{ mt: 2, width: "100px" }}
//                 >
//                   {generateTimeOptions().map((option) => (
//                     <MenuItem key={option.value} value={option.value}>
//                       {option.label}
//                     </MenuItem>
//                   ))}
//                 </Select>
//                 <p>-</p>
//                 <Select
//                   value={selectedTimeEnd}
//                   onChange={handleTimeChangeEnd}
//                   label="Select Time End"
//                   variant="standard"
//                   sx={{ mt: 2, width: "100px" }}
//                 >
//                   {generateTimeOptions().map((option) => (
//                     <MenuItem key={option.value} value={option.value}>
//                       {option.label}
//                     </MenuItem>
//                   ))}
//                 </Select>
//                 {timeError && (
//                   <Typography color="error" sx={{ mt: 1 }}>
//                     {timeError}
//                   </Typography>
//                 )}
//               </Stack>
//             </LocalizationProvider>
//             <Button
//               onClick={handleSubmit}
//               sx={{
//                 width: "100%",
//                 backgroundColor: "#ff7037",
//                 color: "white",
//                 borderRadius: 20,
//                 mt: 2,
//                 "&:hover": {
//                   backgroundColor: "#fff1ec",
//                   color: "#ff7037",
//                 },
//               }}
//             >
//               Submit
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default BookNowModal;

//origin------------------------------------------------------------------------------------------------------------------------------------------------------
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import { Stack } from "@mui/system";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker, TimePicker } from "@mui/x-date-pickers";
// import { useNavigate, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

// const BookNowModal = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTimeStart, setSelectedTimeStart] = useState(null);
//   const [selectedTimeEnd, setSelectedTimeEnd] = useState(null);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleTimeChangeStart = (time) => {
//     setSelectedTimeStart(time);
//   };
//   const handleTimeChangeEnd = (time) => {
//     setSelectedTimeEnd(time);
//   };

//   const handleSubmit = () => {
//     console.log("Date:", selectedDate);
//     console.log("Time:", selectedTimeStart);
//     console.log("Time:", selectedTimeEnd);
//     navigate(`/`);
//     handleClose();
//   };

//   return (
//     <div>
//       <Button
//         onClick={handleOpen}
//         sx={{
//           width: 300,
//           backgroundColor: "#ff7037",
//           color: "white",
//           borderRadius: 20,
//           "&:hover": {
//             backgroundColor: "#fff1ec",
//             color: "#ff7037",
//           },
//         }}
//       >
//         Book Now
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//         <Box sx={{ ...style, width: 500 }}>
//           <Stack
//             direction={"row"}
//             justifyContent={"space-between"}
//             marginBottom={5}
//           >
//             <Typography variant="h6" fontWeight="bold" id="parent-modal-title">
//               Booking
//             </Typography>
//             <Button
//               onClick={handleClose}
//               sx={{
//                 color: "black",
//                 "&:hover": {
//                   backgroundColor: "#fff1ec",
//                   color: "#ff7037",
//                 },
//               }}
//             >
//               X
//             </Button>
//           </Stack>
//           <Typography id="parent-modal-description" marginBottom={2}>
//             Select date and time you want to schedule the service.
//           </Typography>
//           <form>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <Stack marginBottom={2}>
//                 <DatePicker
//                   label="Select Date"
//                   value={selectedDate}
//                   disablePast={true}
//                   onChange={(newDate) => handleDateChange(newDate)}
//                   sx={{ mt: 2 }}
//                   textField={(params) => (
//                     <TextField {...params} variant="standard" />
//                   )}
//                 />
//               </Stack>

//               <Stack
//                 direction={"row"}
//                 alignItems={"center"}
//                 justifyContent={"center"}
//                 spacing={2}
//               >
//                 <TimePicker
//                   label="Select Time"
//                   value={selectedTimeStart}
//                   onChange={(newTime) => handleTimeChangeStart(newTime)}
//                   ampm={false}
//                   minutesStep={30} // Set time intervals to 30 minutes
//                   dateFormat="h:mm aa" // Set the desired time format
//                   sx={{ mt: 2 }}
//                   textField={(params) => (
//                     <TextField {...params} variant="standard" />
//                   )}
//                 />
//                 <p>-</p>
//                 <TimePicker
//                   label="Select Time"
//                   value={selectedTimeEnd}
//                   onChange={(newTime) => handleTimeChangeEnd(newTime)}
//                   ampm={false}
//                   minutesStep={30} // Set time intervals to 30 minutes
//                   dateFormat="h:mm aa" // Set the desired time format
//                   sx={{ mt: 2 }}
//                   textField={(params) => (
//                     <TextField {...params} variant="standard" />
//                   )}
//                 />
//               </Stack>
//             </LocalizationProvider>
//             <Button
//               onClick={handleSubmit}
//               sx={{
//                 width: "100%",
//                 backgroundColor: "#ff7037",
//                 color: "white",
//                 borderRadius: 20,
//                 mt: 2,
//                 "&:hover": {
//                   backgroundColor: "#fff1ec",
//                   color: "#ff7037",
//                 },
//               }}
//             >
//               Submit
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default BookNowModal;
