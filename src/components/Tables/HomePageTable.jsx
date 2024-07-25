import { Box, Grid } from "@mui/material";
import React from "react";
import SearchInput from "../Inputs/SearchInput";
import BaseBtn from "../Buttons/BaseBtn";

const HomePageTable = () => {
  return (
    <Box>
      <Grid container spacing={3} sx={{ marginTop: "32px" }}>
        {/* العنصر الأول */}
        <Grid item xs={12} md={6}>
          <SearchInput />
        </Grid>

        {/* العناصر الأخرى */}
        <Grid item xs={6} md={3}>
          <Box sx={{ backgroundColor: "red" }}>الدور </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box sx={{ backgroundColor: "red" }}> الحاله</Box>
        </Grid>
      </Grid>

      {/* Table body*/}
      <Box
        sx={{
          marginTop: "12px",
          width: "100%",
          minHeight: "250px",
          backgroundColor: "green",
        }}
      ></Box>
      {/* Table Footer*/}

      <Grid
        container
        spacing={3}
        sx={{
          marginTop: "12px",
          width: "100%",
          minHeight: "50px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Grid item xs={12} sm={3} md={3} sx={{ order: { xs: 2, sm: 1 } }}>
          <Box sx={{ backgroundColor: "red" }}>عرض من 0 ال 10 </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ order: { xs: 1, sm: 2 } }}>
          <Box sx={{ backgroundColor: "green" }}>pagination</Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} sx={{ order: { xs: 3, sm: 3 } }}>
          {/* <Box sx={{ backgroundColor: "blue" }}> تصدير</Box> */}
          <BaseBtn Text={"تصدير"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePageTable;
