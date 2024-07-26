import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const TheRole = () => {
  const { t, i18n } = useTranslation();
  return (
      <Box sx={{ backgroundColor: "red" }}>{t("therole")}</Box>
  );
};

export default TheRole;
