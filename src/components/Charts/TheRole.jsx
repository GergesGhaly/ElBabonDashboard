import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const TheRole = () => {
  const { t } = useTranslation();
  // هنا اهو 
  const data = [
    { value: 15, label: t("system administrator")},
    { value: 10, label:t("research director") },
    { value: 75, label: "باحث" },
  ];

  const size = {
    width: 214,
    height: 213,
  };


  const palette = ["#E7BAAC", "#DC9C87", "#B65535"];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FBF4F2",
        padding: "16px 10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "8px",
      }}
    >
      <Typography
        sx={{
          fontSize: "23px",
          fontWeight: "700",
          lineHeight: "36.8px",
          textAlign: "start",
          fontFamily: "Frutiger LT Arabic",
          alignSelf: "self-start",
        }}
      >
        {t("therole")}
      </Typography>
      <PieChart
        colors={palette}
        series={[
          {
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 0,
            cx: 100,
            cy: 100,
            data: data.map((item) => ({ value: item.value })),
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "400",
            fontSize: "20px",
            fontFamily: "Frutiger LT Arabic",
          },
        }}
        {...size}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: "16px", // مسافة بين الرسم البياني والتسميات
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: "8px",
            }}
          >
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: palette[index],
                marginLeft: "3px",
              }}
            />
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#54514E",
                fontFamily: "Frutiger LT Arabic",
                marginLeft: "5px",
              }}
            >
              {item.label} ({item.value}%)
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TheRole;
