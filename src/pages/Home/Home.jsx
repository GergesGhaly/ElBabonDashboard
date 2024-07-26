import { Box, Grid, Pagination, Typography } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Mission from "../../components/Charts/Mission";
import ActiveAreas from "../../components/Charts/ActiveAreas";
import TheRole from "../../components/Charts/TheRole";
import TheBest from "../../components/Statistics/TheBest";
import Total from "../../components/Statistics/Total";
import DateInput from "../../components/Inputs/DateInput";
import BaseBtn from "../../components/Buttons/BaseBtn";
import RegionInput from "../../components/Inputs/RegionInput";
import HomePageTable from "../../components/Tables/HomePageTable";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";

const Home = () => {
  //i18
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
            <RegionInput />
          </Box>
        </Grid>
        <Grid
          sx={{ paddingRight: "0 !important", paddingLeft: "0 !important" }}
          item
          xs={12}
          sm={3}
          md={1.8}
        >
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
        <Grid item xs={12} sm={12} md={4}>
          <TheBest />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Total Title={t("total reports")} />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Total Title={t("total tasks")} />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Total Title={t("total researchers")} />
        </Grid>

        <Grid item xs={6} sm={3} md={2}>
          <Total Title= {t("completed reports")} />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ marginTop: "32px" }}>
        <Grid item xs={12} sm={6} md={4}>
          <Mission />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ActiveAreas />
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
