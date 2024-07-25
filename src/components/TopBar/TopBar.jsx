import * as React from "react";
import { useState } from "react";
//Mui compoents
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
//assets
import ProfileImg from "../../assets/image/Ellipse 598.png";
import BillIcon from "../../assets/BillIcon.svg";
import languageIcon from "../../assets/languageIcon.svg";
import MoodToogleBtn from "../MoodToogleBtn/MoodToogleBtn";
import MnuiToggleIcon from "../../assets/MnuiToggleIcon.svg";
//i18
import { useTranslation } from "react-i18next";
import LanguegeToggleBtn from "../Buttons/LanguegeToggleBtn";

function TopBar({ handleToggle }) {
  const [isLanguageArabic, setIsLanguageArabic] = useState(false); // Controls language toggle

  //i18
  const { t, i18n } = useTranslation();

  //i18 hiandel langue toggle
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageArabic(!isLanguageArabic);
  };

  // React.useEffect(() => {
  //   document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  // }, [i18n.language]);

  return (
    <AppBar
      sx={{
        display: "flex",
        left: "0px",
        justifyContent: "space-between",
        alignItems: "center",
        direction: "rtl",
        backgroundColor: "#F1F1F0",
        color: "#0D0C0C",
        boxShadow: "none",
        // height: "68px",
        width: {
          xs: "100%",
          sm: "calc(100% - 70px)",
          md: "calc(100% - 312px)",
        },
      }}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              //   flexGrow: 0,
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textAlign: "center",
            }}
          >
            <IconButton
              onClick={handleToggle}
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              <img src={MnuiToggleIcon} alt="" />
            </IconButton>

            <Avatar
              sx={{
                lineHeight: "32px",
                width: { xs: "42px", md: "48px" },
                height: { xs: "42px", md: "48px" },
              }}
              alt="Remy Sharp"
              src={ProfileImg}
            />

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontSize: "20px",
                fontFamily: "Frutiger LT Arabic, sans-serif",
                fontWeight: 400,
                direction: i18n.language === 'ar' ? 'rtl' : 'ltr' ,
                color: "#0D0C0C",
              }}
            >
              {t("welcome")} ناصر
            </Typography>
            <Box
              sx={{
                padding: "0 5px",
                display: "flex",
                gap: "16px",
              }}
            >
              <IconButton
                sx={{
                  width: "34px",
                  height: "34px",
                  display: {
                    xs: "none",

                    md: "flex",
                  },
                }}
                color="inherit"
              >
                <img src={BillIcon} alt="" />
              </IconButton>
              <IconButton
                sx={{ width: "34px", height: "34px" }}
                color="inherit"
              >
                <MoodToogleBtn />
              </IconButton>
              {/* Mode Toggle */}
            </Box>
          </Box>

          {/* //languge Toggle */}
          {/* {isLanguageArabic ? (
            <Box
              sx={{ display: "flex", gap: "3px", cursor: "pointer" }}
              onClick={() => changeLanguage("ar")}
            >
              <img src={languageIcon} alt="" />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "25.6px",
                  color: "#B65535",
                  userSelect: "none",
                  display: { md: "flex", xs: "none" },
                }}
                variant="body1"
                color="initial"
              >
                العربيه
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{ display: "flex", gap: "3px", cursor: "pointer" }}
              onClick={() => changeLanguage("en")}
            >
              <img src={languageIcon} alt="" />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "25.6px",
                  color: "#B65535",
                  userSelect: "none",
                  display: { md: "flex", xs: "none" },
                }}
                variant="body1"
                color="initial"
              >
                English
              </Typography>
            </Box>
          )} */}
          <LanguegeToggleBtn/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopBar;
