import React, { useState } from "react";
import SidBar from "../../components/SidBar/SidBar";
import TopBar from "../../components/TopBar/TopBar";
import { Box } from "@mui/material";
import Home from "../Home/Home";

const Main = () => {
  //Toggle State Menu Handel 
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  //Toggle Function Menu Handel 
  const handleToggle = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <Box>
      <TopBar
       handleToggle={handleToggle}
      />
      <Home/>
      <SidBar isMenuVisible={isMenuVisible} />
    </Box>
  );
};

export default Main;
