import { Avatar, Box } from "@mui/material";
import React from "react";
import MicIcon from "../../assets/MicIcon.svg";

const Total = ({ Title, Icon, Number }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FBF4F2",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "32px",
        height: "143px",
        padding: "0px 8px",
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
        <Box
          sx={{
            color: "#54514E",
            fontSize: "14px",
            lineHeight: "22.4px",
            fontWeight: "400",
          }}
          className="title"
        >
          {Title}
        </Box>
        <Box
          sx={{
            width: "44px",
            height: "44px",
            backgroundColor: "#B65535",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            gap: "10px",
            borderRadius: "50px",
          }}
          className="icon"
        >
          <img src={Icon} alt="" />
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
          className="number"
        >
          {Number}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2px 8px ",
            fontSize: "12px",
            fontWeight: "700",
            fontFamily: "Frutiger LT Arabic",
            lineHeight: "19.2px",
            color: "#1D1C1B",
            background: "#F0D3CA",
            border: "1px solid #E7BAAC",
            borderRadius: "4px",
          }}
          className="period"
        >
          اخر 6 أشهر
        </Box>
      </Box>
    </Box>
  );
};

export default Total;
