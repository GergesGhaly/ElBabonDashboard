import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import languageIcon from "../../assets/languageIcon.svg";

const LanguegeToggleBtn = () => {
  const [isLanguageArabic, setIsLanguageArabic] = useState(false); // Controls language toggle

  //i18
  const { t, i18n } = useTranslation();

  //i18 hiandel langue toggle
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageArabic(!isLanguageArabic);
  };

  return (
    
      <Box
        sx={{ display: "flex", gap: "3px", cursor: "pointer" }}
        onClick={
          isLanguageArabic
            ? () => changeLanguage("ar")
            : () => changeLanguage("en")
        }
      >
        <img src={languageIcon} alt="" />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "25.6px",
            color: "#B65535",
            userSelect: "none",
            display: { md: "flex", xs: "none" },
          }}
          variant="body1"
          color="initial"
        >
          {isLanguageArabic ? " العربيه" : "English"}
        </Typography>
      </Box>
   
  );
};

export default LanguegeToggleBtn;
