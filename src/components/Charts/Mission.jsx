import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Mission = () => {
  const { t, i18n } = useTranslation();
  return <Box sx={{ backgroundColor: "red" }}>{t("missions")}</Box>;
};

export default Mission;
