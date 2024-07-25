import { Typography } from "@mui/material";
import React from "react";

const PageTitle = ({ Text }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Frutiger LT Arabic, sans-serif",
        fontWeight: 700,
        fontSize: "25px",
        lineHeight: "40px",
        margin: "15px 0 32px 0",
      }}
    >
      {Text}
    </Typography>
  );
};

export default PageTitle;
