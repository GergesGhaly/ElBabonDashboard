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

const Home = () => {
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
    
      <PageTitle Text={ "إدارة الرئيسية"}/>

      {/* Filtres */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }} // الفجوات بين العناصر
        sx={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "16px", md: "29px" },
            width: "100%",
          }}
        >
          <DateInput />
          <DateInput />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <RegionInput />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <BaseBtn Text={"تصفيه النتائج"} />
        </Grid>
      </Grid>

      {/* Statistics */}
      <Grid container spacing={3} sx={{ marginTop: "32px" }}>
        <Grid item xs={12} sm={12} md={4}>
          <TheBest />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Total Title={"اجمالى البلاغات"} />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Total Title={"اجمالى المهام"} />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Total Title={"اجمالى الباحثين"} />
        </Grid>

        <Grid item xs={6} sm={3} md={2}>
          <Total Title={"البلاغات المكتمله"} />
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
