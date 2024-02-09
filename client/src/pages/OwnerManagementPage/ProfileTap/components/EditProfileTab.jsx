/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import {
  textprofilebox,
  profilepicturebox,
  inputContainer,
  inputStyle,
  emailPhoneContainer,
  columnContainer,
  input,
  fontStyle,
  buttonContainer,
  updateButton,
  yourNameTitle,
  datePickerStyle
} from "./ProflieStyle";
import { useState } from "react";

function EditProfileTab() {
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <div css={textprofilebox}>Profile</div>

      <div css={profilepicturebox}>
        <img
          src="\src\PublicPicture\mogupforprofilepicture.png"
          alt="profilepicture"
          css={{
            width: 180,
            height: 180,
          }}
        />
      </div>
      <p css={yourNameTitle}>Your Name*</p>
      <div css={inputContainer}>
        <input css={inputStyle} type="text" placeholder="Your Name" />
      </div>
      <div css={emailPhoneContainer}>
        <div css={columnContainer}>
          <p css={fontStyle}>Email*</p>
          <input css={input} placeholder="Email" />
        </div>
        <div css={columnContainer}>
          <p css={fontStyle}>Phone*</p>
          <input css={input} placeholder="Phone" />
        </div>
      </div>
      <div css={emailPhoneContainer}>
        <div css={columnContainer}>
          <p css={fontStyle}>ID Number</p>
          <input css={input} placeholder="ID Number" />
        </div>
        <div css={columnContainer}>
          <p css={fontStyle}>Date ot Birth</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              disablePast={true}
              css={datePickerStyle}
              onChange={(newDate) => handleDateChange(newDate)}
              textField={(params) => (
                <TextField {...params} variant="standard" />
              )}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div css={buttonContainer}>
        <button css={updateButton}>Update Profile</button>
      </div>
    </>
  );
}
export default EditProfileTab;
