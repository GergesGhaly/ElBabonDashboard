import { Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ProfileImg from "../../assets/image/Ellipse 598.png";
import BaseBtn from "../Buttons/BaseBtn";

const TheBest = ({ Icon }) => {
  //i18
  const { t, i18n } = useTranslation();
  const [Name, setName] = useState("عمر احمد");
  const [MissionCount, setMissionCount] = useState(38);

  return (
    <Box
      sx={{
        backgroundColor: "#FBF4F2",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "space-between",
        gap: "16px",
        height: "143px",
        padding: "8px",
        fontFamily: "Frutiger LT Arabic",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FBF4F2",
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Box>
          <Box
            sx={{
              color: "#54514E",
              fontSize: "14px",
              lineHeight: "22.4px",
              fontWeight: "400",
            }}
          >
            {t("the best")}
          </Box>
          <Box
            sx={{
              color: "#1D1C1B",
              fontSize: "25px",
              lineHeight: "40px",
              fontWeight: "700",
            }}
          >
            {Name}
          </Box>
        </Box>
        <Box
          sx={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            gap: "10px",
            borderRadius: "50px",
          }}
        >
          <Avatar
            sx={{
              lineHeight: "32px",
              width: { xs: "42px", md: "48px" },
              height: { xs: "42px", md: "48px" },
            }}
            alt="Remy Sharp"
            src={ProfileImg}
          />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#FBF4F2",
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Frutiger LT Arabic",
            lineHeight: "40px",
            color: "#1D1C1B",
          }}
        >
          {Number}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              fontFamily: "Frutiger LT Arabic",
              lineHeight: "32px",
              color: "#847F7A",
            }}
          >
            {MissionCount} {t("task")}
          </Typography>

          <BaseBtn
            Text={t("tasks display")}
            Style={{
              display: "flex",
              width: "142px",
              // width: { md: "48px", sm: "117px", xs: "100%" },
              hieght: "48px",
              justifyContent: "center",
              backgroundColor: "#B65535",
              color: "#FFFFFF",
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
        </Box>
      </Box>
    </Box>
  );
};

export default TheBest;
