import { Box } from "@mui/material";
import React from "react";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import ViewReportsTable from "../../components/Tables/ViewReportsTable";
import Footer from "../../components/Footer/Footer";

const ViewReports = () => {
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
        Text={t("view reports")}
        Style={{
          fontFamily: "Frutiger LT Arabic, sans-serif",
          fontWeight: 700,
          fontSize: "25px",
          lineHeight: "40px",
          margin: "15px 0 0 0 ",
        }}
      />

      <ViewReportsTable />
      <Footer />
    </Box>
  );
};

export default ViewReports;
