import { Avatar, Box, Grid, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Total from "../../components/Statistics/Total";
import DateInput from "../../components/Inputs/DateInput";
import BaseBtn from "../../components/Buttons/BaseBtn";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
// Icon
import NoteIcon from "../../assets/NoteIcon.svg";
import SearchIcon from "../../assets/SearchIcon.svg";
import ReportsNoteIcon from "../../assets/ReportsNoteIcon.svg";
import EditBtnIcon from "../../assets/EditBtnIcon.svg";
import ShutDownIcon from "../../assets/ShutDownIcon.svg";

import ChartsBars from "../../components/Charts/ChartsBase";
import UserInfo from "../../components/Statistics/UserInfo";
import UserTable from "../../components/Tables/UserTable";

const UserDetails = () => {
  const [Status, setStatus] = useState("نشط");
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
      <PageTitle
        Text={t("user details")}
        Style={{
          fontFamily: "Frutiger LT Arabic, sans-serif",
          fontWeight: 700,
          fontSize: "25px",
          lineHeight: "40px",
          margin: "15px 0 32px 0",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          margin: "0 0 32px 0",
        }}
      >
        <BaseBtn
          Icon={EditBtnIcon}
          Text={t("edit information")}
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
            fontWeight: "700",
          }}
        />
        <BaseBtn
          Icon={ShutDownIcon}
          Text={t("disable user")}
          Style={{
            height: "48px",
            borderRadius: "50px",
            padding: "8px",
            gap: "8px",
            backgroundColor: "trasparent",
            border: "1px solid #F6E6E1",
            color: "#B65535",
            width: { xs: "100%", sm: "344px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        />
      </Box>
      {/* Filtres */}
      <Grid container spacing={2} sx={{ width: "100%", alignItems: "center" }}>
        <Grid item xs={6}>
          <Box sx={{ width: "100%" }}>
            <DateInput Placeholder={t("from")} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ width: "100%" }}>
            <DateInput Placeholder={t("to")} />
          </Box>
        </Grid>
      </Grid>
      {/* Statistics */}
      <Grid container spacing={3} sx={{ marginTop: "1px" }}>
        <Grid
          sx={{
            paddingRight: { md: "0px !important" },
            paddingLeft: { md: "5px !important" },
          }}
          item
          xs={12}
          sm={12}
          md={6}
        >
          <UserInfo Status={Status} />
        </Grid>
        <Grid
          sx={{
            paddingRight: { md: "0px !important" },
            paddingLeft: { md: "5px !important" },
          }}
          item
          xs={6}
          sm={4}
          md={2}
        >
          <Total
            Number={12}
            Icon={NoteIcon}
            Title={t("total tasks")}
            Style={{
              border: "1px solid #E0DFDE",
            }}
          />
        </Grid>
        <Grid
          sx={{
            paddingRight: { md: "0px !important" },
            paddingLeft: { md: "5px !important" },
          }}
          item
          xs={6}
          sm={4}
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
            Style={{
              border: "1px solid #E0DFDE",
            }}
          />
        </Grid>

        <Grid
          sx={{
            paddingRight: { md: "0px !important" },
            paddingLeft: { md: "20px !important" },
          }}
          item
          xs={6}
          sm={4}
          md={2}
        >
          <Total
            Number={18}
            Icon={ReportsNoteIcon}
            Title={t("completed reports")}
            Style={{
              border: "1px solid #E0DFDE",
            }}
          />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ marginTop: "32px" }}>
        <Grid item xs={12} sm={6} md={4}>
          <ChartsBars Title={t("active areas")} dataset={dataset} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ChartsBars Title={t("active areas")} dataset={dataset} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ChartsBars Title={t("active areas")} dataset={dataset} />
        </Grid>
      </Grid>

      {/* Table */}

      <UserTable />

      <Footer />
    </Box>
  );
};

export default UserDetails;
