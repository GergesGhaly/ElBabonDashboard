import { Box, colors, Typography } from "@mui/material";
import React from "react";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import BasicTable from "../../components/Tables/HomePageTable";
import ReportQuestionsTable from "../../components/Tables/ReportQuestionsTable";
import BaseBtn from "../../components/Buttons/BaseBtn";
import PageDescription from "../../components/PageDescription";
import PlusIcon from "../../assets/PlusIcon.svg";
import Footer from "../../components/Footer/Footer";

const ReportQuestions = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        position: "absolute",
        direction: "rtl",
        left: 0,
        top: { xs: "56px", sm: "64px" },
        padding: { xs: "10px", sm: "15px" },
        minHeight: "100vh",
        width: {
          xs: "100%",
          sm: "calc(100% - 70px)",
          md: "calc(100% - 312px)",
        },
      }}
    >
      <PageTitle
        Text={t("report questions")}
        Style={{
          fontFamily: "Frutiger LT Arabic, sans-serif",
          fontWeight: 700,
          fontSize: "25px",
          lineHeight: "40px",
          margin: "15px 0 0px 0 ",
        }}
      />
      <PageDescription
        Text={t("you can activate only one of the following forms")}
        Style={{
          fontFamily: "Frutiger LT Arabic",
          fontWeight: 300,
          fontSize: "16px",
          lineHeight: "25.6px",
          textAlign: "right",
          color: "#54514E",
          margin: "0 0 32px 0",
        }}
      />

      <BaseBtn
        Icon={PlusIcon}
        Text={t("add new report")}
        Style={{
          height: "48px",
          borderRadius: "50px",
          padding: "8px",
          gap: "8px",
          backgroundColor: "#B65535",
          color: "#FFFFFF",
          width: { xs: "100%", sm: "344px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      />
      <ReportQuestionsTable />
      <Footer/>
    </Box>
  );
};

export default ReportQuestions;
