import { Box } from "@mui/material";
import React from "react";

const BaseBtn = ({ Text, Style, Icon }) => {
  return (
    <Box sx={{ ...Style, fontWeight: "700" }}>
      {Icon && <img src={Icon} alt="" />}
      {Text}
    </Box>
  );
};

export default BaseBtn;
