import { Box } from "@mui/material";
// import { DesktopDatePicker } from "@mui/x-date-pickers";
// import dayjs from "dayjs";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateInput() {
  return (
    <Box sx={{ width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          sx={{
            direction: "ltr",
          }}
          components={["DatePicker"]}
        >
          <DatePicker sx={{ textAlign: "end" }} label="الاسم" />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}