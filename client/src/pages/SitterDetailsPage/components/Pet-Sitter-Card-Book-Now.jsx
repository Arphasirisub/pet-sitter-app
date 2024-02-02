import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TimeValidationMinTime from "./Book-Now-Time";
import DateValidationShouldDisableYear from "./Book-Now-Date";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <Typography color="white" fontWeight="bold">
          Book Now
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Booking</h2>
          <p id="parent-modal-description">
            Select date and time you want to schedule the service.{" "}
          </p>
          <DateValidationShouldDisableYear />
          <TimeValidationMinTime />
        </Box>
      </Modal>
    </div>
  );
};
export default BookNowModal;
