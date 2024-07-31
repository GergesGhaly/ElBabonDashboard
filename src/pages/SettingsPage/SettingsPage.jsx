import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const SettingsPage = () => {
  const { t, i18n } = useTranslation();
  const TypographyStyle = {
    fontFamily: "Frutiger LT Arabic",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "25.6px",
    textAlign: "right",
    color: "#000000",
    padding: "4px",
  };
  const ListItemyStyle = {
    padding: "100px",
  };

  return (
    <Box
      sx={{
        position: "absolute",
        direction: "rtl",
        left: 0,
        top: { xs: "56px", sm: "64px" },
        padding: { xs: "10px", sm: "15px" },
        // minHeight: "100vh",
        width: {
          xs: "100%",
          sm: "calc(100% - 70px)",
          md: "calc(100% - 312px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          // justifyContent: "center",
          flexDirection: "column",
          margin: { md: "25px 150px 10px 0" },
          minHeight: "70vh",
        }}
      >
        <Link to="" sx={{ ...ListItemyStyle }}>
          <Typography sx={{ ...TypographyStyle, padding: "30px 0" }}>
            {t("update personal information")}
          </Typography>
        </Link>
        <Link to="" sx={{ ...ListItemyStyle }}>
          <Typography sx={{ ...TypographyStyle }}>
            {t("change password")}
          </Typography>
        </Link>
        <Link to="" sx={{ ...ListItemyStyle }}>
          <Typography sx={{ ...TypographyStyle }}>
            {t("activityLog")}
          </Typography>
        </Link>
        <Link to="" sx={{ ...ListItemyStyle }}>
          <Typography sx={{ ...TypographyStyle, padding: "25px 0" }}>
            {t("role and permission management")}
          </Typography>
        </Link>
      </Box>
      <Footer />
    </Box>
  );
};

export default SettingsPage;
