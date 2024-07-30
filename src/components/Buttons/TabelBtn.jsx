import { Button } from "@mui/material";
import React from "react";
import ExportIcon from "../../assets/ExportIcon.svg";
import { useTranslation } from "react-i18next";

const TabelBtn = () => {
  const { t, i18n } = useTranslation();

  return (
    <Button
      sx={{
        width: { xs: "100%", sm: "156px" },
        marginTop: { xs: "10px", sm: "0px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        gap: "8px",
        padding: "8px",
        border: "1px solid #F6E6E1",
        borderRadius: "50px",
        color: "#B65535",
        fontFamily: "Frutiger LT Arabic",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "25.6px",
        textAlign: "end",
      }}
      startIcon={<img src={ExportIcon} alt="Export Icon" />} // تأكد من أن لديك ExportIcon معرف ومحدد
    >
      {t("export")}
    </Button>
  );
};

export default TabelBtn;
