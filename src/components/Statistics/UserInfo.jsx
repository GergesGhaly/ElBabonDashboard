import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProfileImg from "../../assets/image/Ellipse 598.png";

const UserInfo = ({ Status }) => {
  const TypoghrapStyle = {
    fontFamily: "Frutiger LT Arabic",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "22.4px",
    textAlign: "right",
    color: "#54514E",
  };
  return (
    <Box
      sx={{
        padding: "8px 16px",
        border: "1px solid #E0DFDE",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        minHeight: "124px",
        gap: "32px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Avatar
            sx={{
              lineHeight: "32px",
              width: "32px",
              height: "32px",
            }}
            alt="Remy Sharp"
            src={ProfileImg}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Frutiger LT Arabic",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "22.4px",
                textAlign: "right",
                color: "#54514E",
              }}
            >
              باحث
            </Typography>
            <Typography variant="h6" sx={TypoghrapStyle}>
              عمر احمد
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Frutiger LT Arabic",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            backgroundColor: Status === "نشط" ? "#C5FFD1" : "#F1F1F0",
            color: Status === "نشط" ? "#49A95E" : "#54514E",
            width: "77px",
            height: "23px",
            padding: "2px 8px",
            border: "1px solid",
            borderRadius: "4px",
            borderColor: Status === "نشط" ? "#84F39C" : "#C9C6C4",
          }}
        >
          {Status}
        </Box>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {/* العنصر الأول */}
          <Grid item xs={6} md={1.5} sx={{ padding: "3px" }}>
            <Typography sx={TypoghrapStyle} variant="body1" color="initial">
              المعرف
            </Typography>
            <Typography sx={TypoghrapStyle} variant="body1" color="initial">
              21544
            </Typography>
          </Grid>

          {/* العناصر الأخرى */}
          <Grid item xs={6} md={1.5} sx={{ paddingLeft: "3px" }}>
            <Typography sx={TypoghrapStyle} variant="body1" color="initial">
              النوع
            </Typography>
            <Typography sx={TypoghrapStyle} variant="body1" color="initial">
              ذكرا
            </Typography>
          </Grid>
          <Grid item xs={6} md={5} sx={{ padding: "3px" }}>
            <Typography sx={TypoghrapStyle} variant="body1" color="initial">
              البريد
            </Typography>
            <Typography sx={TypoghrapStyle} variant="body1" color="initial">
              folan.3alan@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={6} md={4} sx={{ padding: "3px" }}>
            <Typography sx={TypoghrapStyle} variant="body1" color="initial">
              رقم الهاتف
            </Typography>
            <Typography sx={TypoghrapStyle} variant="body1" color="initial">
              123456789101
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserInfo;
