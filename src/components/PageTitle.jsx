import { Typography } from "@mui/material";
import React from "react";

const PageTitle = ({ Text, Style }) => {
  return <Typography sx={Style}>{Text}</Typography>;
};

export default PageTitle;
