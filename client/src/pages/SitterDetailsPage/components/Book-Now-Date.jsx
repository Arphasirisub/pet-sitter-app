import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const today = dayjs();

export default function DateValidationShouldDisableYear() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        defaultValue={today}
        slotProps={{
          toolbar: { toolbarFormat: "ddd DD MMMM", hidden: false },
        }}
      />
    </LocalizationProvider>
  );
}
