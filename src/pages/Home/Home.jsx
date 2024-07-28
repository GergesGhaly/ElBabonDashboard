import { Box, Grid, Pagination, Typography } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import TheRole from "../../components/Charts/TheRole";
import TheBest from "../../components/Statistics/TheBest";
import Total from "../../components/Statistics/Total";
import DateInput from "../../components/Inputs/DateInput";
import BaseBtn from "../../components/Buttons/BaseBtn";
import RegionInput from "../../components/Inputs/Basicselect";
import HomePageTable from "../../components/Tables/HomePageTable";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
//Total Icon
import NoteIcon from "../../assets/NoteIcon.svg";
import MicIcon from "../../assets/MicIcon.svg";
import SearchIcon from "../../assets/SearchIcon.svg";
import ReportsNoteIcon from "../../assets/ReportsNoteIcon.svg";
import ChartsBars from "../../components/Charts/ChartsBase";
import Basicselect from "../../components/Inputs/Basicselect";

const Home = () => {
  //i18
  const { t, i18n } = useTranslation();

  //DumyData for active Areav Copmpnent
  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: "Jan",
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: "Feb",
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: "Mar",
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: "Apr",
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: "May",
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: "June",
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: "July",
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
      month: "Aug",
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: "Sept",
    },
    {
      london: 60,
      paris: 65,
      newYork: 97,
      seoul: 55,
      month: "Oct",
    },
    {
      london: 67,
      paris: 64,
      newYork: 76,
      seoul: 48,
      month: "Nov",
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      seoul: 25,
      month: "Dec",
    },
  ];

  //DumyData for active Areav Copmpnent
  const MissionDataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: "Jan",
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: "Feb",
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: "Mar",
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: "Apr",
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: "May",
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: "June",
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: "July",
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
      month: "Aug",
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: "Sept",
    },
    {
      london: 60,
      paris: 65,
      newYork: 97,
      seoul: 55,
      month: "Oct",
    },
    {
      london: 67,
      paris: 64,
      newYork: 76,
      seoul: 48,
      month: "Nov",
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      seoul: 25,
      month: "Dec",
    },
  ];

  const Options = [
    { label: "Option 1", value: "Option 1" },
    { label: "Option 2", value: "Option 2" },
    { label: "Option 3", value: "Option 3" },
    { label: "Option 4", value: "Option 4" },
  ];

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
      <PageTitle Text={t("home admin")} />

      {/* Filtres */}
      <Grid container spacing={2} sx={{ width: "100%", alignItems: "center" }}>
        <Grid item xs={6} sm={3} md={3.2}>
          <Box sx={{ width: "100%" }}>
            <DateInput Placeholder={t("from")} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} md={3.2}>
          <Box sx={{ width: "100%" }}>
            <DateInput Placeholder={t("to")} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3.2}>
          <Box sx={{ width: "100%" }}>
            <Basicselect PlaceHolder={t("region")} Options={Options} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={1.8}>
          <BaseBtn
            Text={t("filter results")}
            Style={{
              display: "flex",
              width: "100%",
              // width: { md: "48px", sm: "117px", xs: "100%" },
              hieght: "48px",
              justifyContent: "center",
              backgroundColor: "#FFFFFF",
              color: "#B65535",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "25.6px",
              border: "1px solid #F6E6E1",
              borderRadius: "50px",
              padding: "8px",
              gap: "8px",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          />
        </Grid>
      </Grid>
      {/* Statistics */}
      <Grid container spacing={3} sx={{ marginTop: "32px" }}>
        <Grid
          sx={{
            paddingRight: { md: "0px !important" },
            paddingLeft: { md: "5px !important" },
          }}
          item
          xs={12}
          sm={12}
          md={4}
        >
          <TheBest />
        </Grid>
        <Grid
          sx={{
            paddingRight: { md: "0px !important" },
            paddingLeft: { md: "5px !important" },
          }}
          item
          xs={6}
          sm={3}
          md={2}
        >
          <Total Number={27} Icon={MicIcon} Title={t("total reports")} />
        </Grid>
        <Grid
          sx={{
            paddingRight: { md: "0px !important" },
            paddingLeft: { md: "5px !important" },
          }}
          item
          xs={6}
          sm={3}
          md={2}
        >
          <Total Number={12} Icon={NoteIcon} Title={t("total tasks")} />
        </Grid>
        <Grid
          sx={{
            paddingRight: { md: "0px !important" },
            paddingLeft: { md: "5px !important" },
          }}
          item
          xs={6}
          sm={3}
          md={2}
        >
          <Total
            sx={{
              paddingRight: { md: "0px !important" },
              paddingLeft: { md: "5px !important" },
            }}
            Number={17}
            Icon={SearchIcon}
            Title={t("total researchers")}
          />
        </Grid>

        <Grid
          sx={{
            paddingRight: { md: "0px !important" },
            paddingLeft: { md: "20px !important" },
          }}
          item
          xs={6}
          sm={3}
          md={2}
        >
          <Total
            Number={18}
            Icon={ReportsNoteIcon}
            Title={t("completed reports")}
          />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ marginTop: "32px" }}>
        <Grid item xs={12} sm={6} md={4}>
          <ChartsBars Title={t("missions")} dataset={MissionDataset} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ChartsBars Title={t("active areas")} dataset={dataset} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <TheRole />
        </Grid>
      </Grid>

      {/* Table */}

      <HomePageTable />

      <Footer />
    </Box>
  );
};

export default Home;
