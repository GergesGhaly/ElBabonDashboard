import React, { useEffect, useState } from "react";
import "./SidBar.css";
import Logo from "../../assets/mainPageLogo.svg";
//Mui Components
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
//icons
import HomeIcon from "../../assets/HomeIcon.svg";
import ReportIcon from "../../assets/ReportsIcon.svg";
import UsersIcon from "../../assets/UsersIcon.svg";
import LocationIcon from "../../assets/LocationIcon.svg";
import NotifcationIcon from "../../assets/NotifcationIcon.svg";
import HistoryIcon from "../../assets/HistoryIcon.svg";
import ProfileIcon from "../../assets/ProfileIcon.svg";
import LogOutIcon from "../../assets/LogOutIcon.svg";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const SidBar = ({ isMenuVisible }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  //i18
  const { t, i18n } = useTranslation();

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setActiveSubIndex(null); // Reset sub-item index when main item is clicked
  };

  const handleSubItemClick = (event, index) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent
    setActiveSubIndex(index);
    setActiveIndex(null);
  };

  const menuItems = [
    { icon: HomeIcon, text: t("home admin") },
    { icon: ReportIcon, text: t("reports") },
    { icon: UsersIcon, text: t("users") },
    { icon: LocationIcon, text: t("locations") },
    { icon: NotifcationIcon, text: t("notifications") },
    { icon: HistoryIcon, text: t("activityLog") },
    { icon: ProfileIcon, text: t("profile") },
    { icon: LogOutIcon, text: t("logout") },
  ];

  return (
    <Box
      className={`sid-bar ${isMenuVisible ? "active" : ""}`}
      sx={{
        position: "absolute",
        right: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#1d1c1b",
        color: "#ffffff",
        display: {
          sm: "flex",
        },
        width: { xs: "312px", sm: "70px", md: "312px" },
        padding: { sm: "10px", md: "12px 24px" },
        direction: "rtl",
      }}
    >
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="list-wraper">
        <ul className="list">
          {menuItems.map((item, index) =>
            item.text === t("reports") ? (
              <li
                key={index}
                className={`list-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleItemClick(index)}
              >
                <Box
                  // sx={{ display: { xs: "flex", sm: "none", md: "flex" } }}
                  className="icon-text"
                >
                  <Accordion
                    sx={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      width: "100%",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          sx={{
                            color: "#FFFFFF",
                            display: { xs: "flex", sm: "none", md: "flex" },
                          }}
                        />
                      }
                      aria-controls="panel1-content"
                      id="panel1-header"
                      sx={{
                        backgroundColor: "transparent",
                        padding: 0,
                        justifyContent: "space-between",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="icon-text"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <img src={item.icon} alt="" className="icon" />
                        <Typography
                          component="span"
                          className="text"
                          sx={{
                            display: {
                              sm: "none",
                              md: "flex",
                            },
                          }}
                        >
                          {item.text}
                        </Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        padding: 0,
                        backgroundColor: "#1D1C1B",
                        width: "100%",
                      }}
                    >
                      <ul className="list-Accordion" style={{ width: "100%" }}>
                        <li
                          className={`sub-list-item ${
                            activeSubIndex === 0 ? "active" : ""
                          }`}
                          onClick={(event) => handleSubItemClick(event, 0)}
                        >
                          <span className="text">{t("view reports")}</span>
                        </li>
                        <li
                          className={`sub-list-item ${
                            activeSubIndex === 1 ? "active" : ""
                          }`}
                          onClick={(event) => handleSubItemClick(event, 1)}
                        >
                          <span className="text">{t("report questions")} </span>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </li>
            ) : (
              <li
                key={index}
                className={`list-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleItemClick(index)}
              >
                <Box sx={{ display: "flex" }} className="icon-text">
                  <img src={item.icon} alt="" className="icon" />
                  <Typography
                    component="span"
                    className="text"
                    sx={{
                      display: {
                        sm: "none",
                        md: "flex",
                      },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </li>
            )
          )}
        </ul>
      </div>
    </Box>
  );
};

export default SidBar;
