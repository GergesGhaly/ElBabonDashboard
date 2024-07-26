import { Box } from "@mui/material";
import React from "react";

const BaseBtn = ({Text,Style}) => {
  return <Box sx={Style}>{Text}</Box>;
};

export default BaseBtn;
