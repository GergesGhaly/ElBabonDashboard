import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
//icons
import phoneIcon from "../../assets/phone.svg";
import EyeIcon from "../../assets/EyeIcon.svg";

const PasswordInput = ({ Icons,disable }) => {
  const { t, i18n } = useTranslation();

  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false); // Controls password visibility

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        borderRadius: "8px",
        border: "1px solid #e0e4ea",
        padding: "4px 8px",
        margin: "15px 0",
        direction: "rtl",
      }}
    >
      {Icons && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingRight: "5px",
          }}
        >
          <img src={phoneIcon} alt="Phone Icon" />
        </Box>
      )}

      <Box>
        <Typography
          variant="body1"
          color="#54514E"
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "22.4px",
            padding: "0px",
            margin: "0px",
            fontFamily: "Frutiger LT Arabic, sans-serif",
          }}
        >
          {t("password")}
        </Typography>

        <input
        //   disabled={disable?false:true}
          type={show ? "text" : "password"}
          placeholder={t("enter password")}
          className="loginFormInpt"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      {Icons && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={() => setShow(!show)}
        >
          <img src={EyeIcon} alt="Eye Icon" />
        </Box>
      )}
    </Box>
  );
};

export default PasswordInput;
