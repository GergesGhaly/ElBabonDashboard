import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "32px 0px",
        display: "flex",
        alignItems: "center", // محاذاة العناصر عمودياً في المركز
        justifyContent: {
          xs: "space-between",
          sm: "flex-end",
          md: "space-between",
        }, 
        width: "100%",
        gap: "35px",
      }}
    >
      <Typography
        variant="body1"
        color="#847F7A"
        sx={{
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "25.6px",
          fontFamily: "Frutiger LT Arabic, sans-serif",
        }}
      >
        المركز الوطنى لتنميه الحياه الفطرية &copy; 2024
      </Typography>
      <Link
        href="https://www.example.com"
        target="_blank"
        rel="noopener"
        sx={{
          color: "#B65535",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "25.6px",
          textDecoration: "none",
          cursor: "pointer",
          fontFamily: "Frutiger LT Arabic, sans-serif",
        }}
      >
        موقع المركز
      </Link>
    </Box>
  );
};

export default Footer;
