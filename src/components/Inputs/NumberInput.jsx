import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const NumberInput = ({ Label }) => {
  const { t, i18n } = useTranslation();

  const [num, setNum] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        borderRadius: "8px",
        border: "1px solid #e0e4ea",
        padding: "4px 8px",
        margin: "15px 0",
        direction: "rtl",
      }}
    >
      <Box>
        <Typography
          variant="body1"
          color="#54514E"
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "22.4px",
            padding: "0px",
            margin: "0px",
            fontFamily: "Frutiger LT Arabic, sans-serif",
          }}
        >
          {Label}
        </Typography>
        <input
          type="number"
          placeholder={Label}
          className="loginFormInpt"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default NumberInput;
