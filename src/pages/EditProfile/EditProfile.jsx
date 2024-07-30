import {
  Avatar,
  Badge,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";

import ProfileImg from "../../assets/image/6d8c959f81be78985416a8a898ed78b5.png";

import EditIcon from "../../assets/EditBtnIcon.svg";
import Footer from "../../components/Footer/Footer";
import BaseBtn from "../../components/Buttons/BaseBtn";
import PasswordInput from "../../components/Inputs/PasswordInput";
import EmailInput from "../../components/Inputs/EmailInput";
import TextInput from "../../components/Inputs/TextInput";
import NumberInput from "../../components/Inputs/NumberInput";
import Basicselect from "../../components/Inputs/Basicselect";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 24,
  height: 24,
  backgroundColor: "#B65535",
  padding: "4.8px",
}));

const EditProfile = () => {
  const { t, i18n } = useTranslation();
  const [disable, setDisable] = useState(false);

  const [gendr, setGendr] = React.useState("female");

  const handleChange = (event) => {
    setGendr(event.target.value);
  }; // Controls password visibility

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
        Text={t("edit profile")}
        Style={{
          fontFamily: "Frutiger LT Arabic, sans-serif",
          fontWeight: 700,
          fontSize: "25px",
          lineHeight: "40px",
          margin: "15px 0 0px 0 ",
        }}
      />

      <Box
        sx={{
          marginTop: "32px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            badgeContent={<SmallAvatar alt="Remy Sharp" src={EditIcon} />}
          >
            <Avatar
              sx={{
                width: "120px",
                height: "120px",
              }}
              alt="Travis Howard"
              src={ProfileImg}
            />
          </Badge>
        </Stack>
        <Grid
          container
          spacing={2}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <Grid item xs={12} sm={6}>
            <TextInput />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Basicselect PlaceHolder={t("role")} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <NumberInput Label={t("phone")} Icon={false} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <EmailInput Icon={false} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "22.4px",
                  fontFamily: "Frutiger LT Arabic, sans-serif",
                }}
              >
                {t("gender")}
              </FormLabel>
              <RadioGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={gendr}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#B65535",
                        },
                      }}
                    />
                  }
                  label={t("female")}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      fontWeight: "700",
                      lineHeight: "22.4px",
                      padding: "0px",
                      margin: "0px",
                      fontFamily: "Frutiger LT Arabic, sans-serif",
                    },
                  }}
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#B65535",
                        },
                      }}
                    />
                  }
                  label={t("male")}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      fontWeight: "700",
                      lineHeight: "22.4px",
                      padding: "0px",
                      margin: "0px",
                      fontFamily: "Frutiger LT Arabic, sans-serif",
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <NumberInput Label={t("age")} Icon={false} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <PasswordInput Icons={false} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseBtn
              Text={t("edit")}
              // onClick={() => setDisable(!disable)}
              Style={{
                display: "flex",
                // width: "157px",
                width: { sm: "157px", xs: "100%" },
                hieght: "48px",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                color: "#B65535",
                fontWeight: "700",
                fontSize: "16px",

                border: "1px solid #F6E6E1",
                borderRadius: "50px",
                padding: "8px",
                gap: "8px",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                gap: "24px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BaseBtn
                Text={t("حفظ")}
                Style={{
                  display: "flex",
                  width: { sm: "222px", xs: "100%" },
                  hieght: "48px",
                  justifyContent: "center",
                  backgroundColor: "#B65535",
                  color: "#FFFF",
                  fontWeight: "700",
                  fontSize: "16px",

                  borderRadius: "50px",
                  padding: "8px",
                  gap: "8px",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              />
              <BaseBtn
                Text={t("الغاء")}
                Style={{
                  display: "flex",
                  width: { sm: "222px", xs: "100%" },
                  hieght: "48px",
                  justifyContent: "center",
                  backgroundColor: "#FFFFFF",
                  color: "#B65535",
                  fontWeight: "700",
                  fontSize: "16px",

                  border: "1px solid #F6E6E1",
                  borderRadius: "50px",
                  padding: "8px",
                  gap: "8px",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default EditProfile;
