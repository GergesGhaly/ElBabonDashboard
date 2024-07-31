import { Box } from "@mui/material";
import React from "react";

const BaseBtn = ({ Text, Style, Icon, SmallBtn }) => {
  return (
    <Box
      sx={{
        ...Style,
        fontWeight: SmallBtn ? "400" : "700",
      }}
    >
      {Icon && <img src={Icon} alt="" />}
      {Text}
    </Box>
  );
};

export default BaseBtn;
