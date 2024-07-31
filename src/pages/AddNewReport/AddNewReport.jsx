import { Box, colors, Typography } from "@mui/material";
import React from "react";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import PageDescription from "../../components/PageDescription";
import Footer from "../../components/Footer/Footer";
import TextInput from "../../components/Inputs/TextInput";
import AddNewReportTable from "../../components/Tables/AddNewReportTable";

const AddNewReport = () => {
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
        Text={t("add new report")}
        Style={{
          fontFamily: "Frutiger LT Arabic, sans-serif",
          fontWeight: 700,
          fontSize: "25px",
          lineHeight: "40px",
          margin: "15px 0 0px 0 ",
        }}
      />
      <PageDescription
        Text={t("add appropriate questions to the report format")}
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
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "436px" },
        }}
      >
        <TextInput Text={t("report title")} Label={false} />
      </Box>

      <AddNewReportTable />
     
      <Footer />
    </Box>
  );
};

export default AddNewReport;
