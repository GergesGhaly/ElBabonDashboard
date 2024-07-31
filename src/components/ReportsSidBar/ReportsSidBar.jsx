import React, { useEffect, useState } from "react";
import "./ReportsSidBar.css";
import Logo from "../../assets/mainPageLogo.svg";
//Mui Components
//icons
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const ReportsSidBar = ({ isMenuVisible }) => {
  //i18
  const { t, i18n } = useTranslation();

  return (
    <Box
      //   className={`reports-sid-bar ${isMenuVisible ? "active" : ""}`}
      className={`reports-sid-bar active `}
      sx={{
        position: "absolute",
        left: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#ffffff",
        // display: {
        //   sm: "flex",
        // },
        width: { xs: "100%", sm: "575px" },
        padding: { sm: "10px", md: "12px 24px" },
        direction: "rtl",
      }}
    >
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
    </Box>
  );
};

export default ReportsSidBar;
