import { Box } from "@mui/material";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//DatePickerIcon
import { ReactComponent as DatePickerIcon } from "../../assets/DatePickerIcon.svg";

export default function DateInput({ Placeholder }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "0px",
        direction: "ltr",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={Placeholder}
          components={{
            OpenPickerIcon: DatePickerIcon, // يمكنك تغيير الأيقونة هنا
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}
