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
          sx={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E0E4EA",
            borderRadius: "8px",
            "& label": {
              fontSize: "14px",
              fontWeight: "700",
              color: "#54514E",
              fontFamily: "Frutiger LT Arabic",
              lineHeight: "22.4px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& label.Mui-focused": {
              color: "#B65535",
            },
          }}
          label={Placeholder}
          components={{
            OpenPickerIcon: DatePickerIcon, // يمكنك تغيير الأيقونة هنا
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}
