import { Typography } from "@mui/material";
import React from "react";

const PageDescription = ({ Text, Style }) => {
  return (
    <Typography sx={Style}>
      {Text}
     
    </Typography>
  );
};

export default PageDescription;
