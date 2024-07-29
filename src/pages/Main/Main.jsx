import React, { useState } from "react";
import SidBar from "../../components/SidBar/SidBar";
import TopBar from "../../components/TopBar/TopBar";
import { Box } from "@mui/material";
import Notification from "../Notifications/Notifications";
import ReportQuestions from "../ReportQuestions/ReportQuestions";
import ActivityLog from "../ActivityLog/ActivityLog";
// import { Notifications } from "@mui/icons-material";
import Home from "../Home/Home";
import ViewReports from "../ViewReports/ViewReports";
import Login from "../Login/Login";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  //Toggle State Menu Handel
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  //Toggle Function Menu Handel
  const handleToggle = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <Box>
      <TopBar handleToggle={handleToggle} />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/report-questions" element={<ReportQuestions />} />
        <Route path="/activity-log" element={<ActivityLog />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/view-reports" element={<ViewReports />} />
        {/* Default route in case of unmatched path */}
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
      <SidBar isMenuVisible={isMenuVisible} />
    </Box>
  );
};

export default Main;
