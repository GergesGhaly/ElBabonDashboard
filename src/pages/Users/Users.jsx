import { Box } from "@mui/material";
import React from "react";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
import NotificationsTable from "../../components/Tables/NotificationsTable";
import BaseBtn from "../../components/Buttons/BaseBtn";
import PlusIcon from "../../assets/PlusIcon.svg";
import UsersTable from "../../components/Tables/UsersTable";

const Users = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        position: "absolute",
        direction: "rtl",
        left: 0,
        top: { xs: "56px", sm: "64px" },
        padding: { xs: "10px", sm: "15px" },
        minHeight: "100vh",
        width: {
          xs: "100%",
          sm: "calc(100% - 70px)",
          md: "calc(100% - 312px)",
        },
      }}
    >
      <PageTitle
        Text={t("users")}
        Style={{
          fontFamily: "Frutiger LT Arabic, sans-serif",
          fontWeight: 700,
          fontSize: "25px",
          lineHeight: "40px",
          margin: "15px 0 0 0 ",
        }}
      />
      <BaseBtn
        Icon={PlusIcon}
        Text={t("add user")}
        Style={{
          margin: "20px 0 16px 0",
          height: "48px",
          borderRadius: "50px",
          padding: "8px",
          gap: "8px",
          backgroundColor: "#B65535",
          color: "#FFFFFF",
          width: { xs: "100%", sm: "344px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      />
      <UsersTable />
      <Footer />
    </Box>
  );
};

export default Users;
