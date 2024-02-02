import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const today = dayjs();

export default function TimeValidationMinTime() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker defaultValue={today} />
    </LocalizationProvider>
  );
}
