import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
//Icons
import RightArrow from "../../assets/RightArrow.svg";

export default function ChartsBase({ dataset, Title }) {
  const { t, i18n } = useTranslation();

  const [startIndex, setStartIndex] = React.useState(0);

  const valueFormatter = (value) => `${value}mm`;

  const chartSetting = {
    series: [
      {
        dataKey: "seoul",
        valueFormatter,
        color: "#B65535", // لون الأعمدة
      },
    ],
    height: 300,
    backgroundColor: "#FBF4F2", // لون خلفية المخطط
    width: 324,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.tick}`]: {
        display: "none",
      },
      [`& .${axisClasses.directionY} .${axisClasses.axisLine}`]: {
        display: "none",
      },
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        fontSize: "23px",
        fontWeight: "700",
        lineHeight: "36.8px",
        textAlign: "start",
        fontFamily: "Frutiger LT Arabic",
      },
    },
  };

  const handleNext = () => {
    if (startIndex < dataset.length - 5) {
      setStartIndex(startIndex + 5);
    }
  };

  const handlePrev = () => {
    if (startIndex >= 5) {
      setStartIndex(startIndex - 5);
    }
  };

  const displayedData = dataset.slice(startIndex, startIndex + 5);

  const totalPages = Math.ceil(dataset.length / 5);
  const currentPage = Math.floor(startIndex / 5) + 1;

  return (
    <div
      style={{
        width: "100%",
        height: "320px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FBF4F2",
        padding: "16px 10px",
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
        {Title}
      </Typography>
      <BarChart
        dataset={displayedData}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "month",
          },
        ]}
        {...chartSetting}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={startIndex >= dataset.length - 5}
            sx={{
              borderRadius: "50%",
              width: "24px !important",
              minWidth: "24px",
              height: "24px",
              backgroundColor: "transparent",
              boxShadow: "none",
              padding: "5px",
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "&:disabled": {
                backgroundColor: "transparent",
                opacity: 0.5,
              },
            }}
          >
            <img
              sx={{
                width: "20px",
                height: "20px",
              }}
              src={RightArrow}
              alt=""
            />
          </Button>

          <Button
            variant="contained"
            onClick={handlePrev}
            disabled={startIndex === 0}
            sx={{
              borderRadius: "50%",
              width: "24px !important",
              minWidth: "24px",
              height: "24px",
              transform: "rotate(180deg)",
              backgroundColor: "transparent",
              boxShadow: "none",
              padding: "5px",
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "&:disabled": {
                backgroundColor: "transparent",
                opacity: 0.5,
              },
            }}
          >
            <img
              sx={{
                width: "20px",
                height: "20px",
                transform: "rotate(180deg)",
              }}
              src={RightArrow}
              alt=""
            />
          </Button>
        </Box>
        <Stack direction="row" gap="7px" alignItems="center">
          {[...Array(totalPages)].map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: index + 1 === currentPage ? "#B65535" : "#ddd",
              }}
            />
          ))}
        </Stack>
      </Box>
    </div>
  );
}
