import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import phoneIcon from "../../assets/phone.svg";
import { useTranslation } from "react-i18next";

const TextInput = () => {
  const { t, i18n } = useTranslation();

  const [name, setName] = useState("");

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
          {t("name")}
        </Typography>
        <input
          type="text"
          placeholder={t("name")}
          className="loginFormInpt"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default TextInput;
