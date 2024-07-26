import { Box } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
//i18

const TheBest = () => {
  const { t, i18n } = useTranslation();
  return (
    <Box sx={{ backgroundColor: "red" }}>
    {t("the best") }
    </Box>

  )
}

export default TheBest