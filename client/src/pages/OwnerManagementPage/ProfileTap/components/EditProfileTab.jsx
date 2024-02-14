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
  datePickerStyle,
} from "./ProflieStyle";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function EditProfileTab() {
  const [profileData, setprofileData] = useState({});
  const [nameData, setnameData] = useState("");
  const [phoneData, setphoneData] = useState("");
  const [emailData, setemailData] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async () => {
    await axios.put(`http://localhost:4000/owners/${params.id}`, {
      full_name: nameData,
      phone: phoneData,
      email: emailData,
    });
  };
  const params = useParams();
  const getDataProfile = async () => {
    const result = await axios.get(`http://localhost:4000/owners/${params.id}`);
    setprofileData(result.data.data);
  };

  useEffect(() => {
    getDataProfile();
  }, []);
  useEffect(() => {
    if (
      profileData &&
      profileData.full_name &&
      profileData.phone &&
      profileData.email
    ) {
      setnameData(profileData.full_name);
      setphoneData(profileData.phone);
      setemailData(profileData.email);
    }
  }, [profileData]);

  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <form onSubmit={handleSubmit}>
      <div css={textprofilebox}>Profie</div>

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
        <input
          css={inputStyle}
          type="text"
          value={nameData}
          onChange={(e) => {
            setnameData(e.target.value);
          }}
        />
      </div>
      <div css={emailPhoneContainer}>
        <div css={columnContainer}>
          <p css={fontStyle}>Email*</p>
          <input
            css={input}
            type="email"
            value={emailData}
            onChange={(e) => {
              setemailData(e.target.value);
            }}
          />
        </div>
        <div css={columnContainer}>
          <p css={fontStyle}>Phone*</p>
          <input
            css={input}
            type="text"
            value={phoneData}
            onChange={(e) => {
              setphoneData(e.target.value);
            }}
          />
        </div>
      </div>
      <div css={emailPhoneContainer}>
        <div css={columnContainer}>
          <p css={fontStyle}>ID Number</p>
          <input css={input} value={profileData.id} />
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
        <button type="submit" css={updateButton}>
          Update Profile
        </button>
      </div>
    </form>
  );
}
export default EditProfileTab;
