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
import Locations from "../Locations/Locations";
// import Users from "../UserDetails/Users";
import UserDetails from "../UserDetails/UserDetails";
import Users from "../Users/Users";
import Profile from "../EditProfile/EditProfile";
import EditProfile from "../EditProfile/EditProfile";
import AddNewReport from "../AddNewReport/AddNewReport";
import EditReport from "../EditReport/EditReport";
import SettingsPage from "../SettingsPage/SettingsPage";
import ReportDetails from "../ReportDetails/ReportDetails";

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
        <Route path="/locations" element={<Locations />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/add-new-report" element={<AddNewReport />} />
        <Route path="/edit-report" element={<EditReport />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/report-details" element={<ReportDetails />} />
        {/* Default route in case of unmatched path */}
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
      <SidBar isMenuVisible={isMenuVisible} />
    </Box>
  );
};

export default Main;
