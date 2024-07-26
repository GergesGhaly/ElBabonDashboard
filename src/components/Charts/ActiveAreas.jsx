import { Box } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

const ActiveAreas = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box sx={{ backgroundColor: "red" }}>{t("active areas")}</Box>

  )
}

export default ActiveAreas