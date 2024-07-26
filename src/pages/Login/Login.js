import * as React from "react";
import { useState } from "react";
import "./Login.css";
// MUI Components
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Assets
import LoginSideImg from "../../assets/b81f2b4bf60921607a248b2824d66de5.jpg";
import Logo from "../../assets/Logo.svg";
import phoneIcon from "../../assets/phone.svg";
import EyeIcon from "../../assets/EyeIcon.svg";
import languageIcon from "../../assets/languageIcon.svg";
import { useTranslation } from "react-i18next";
import LanguegeToggleBtn from "../../components/Buttons/LanguegeToggleBtn";

// Default MUI theme
const defaultTheme = createTheme();

export default function Login() {
  // State hooks for email, password, password visibility, and language toggle
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false); // Controls password visibility

  //i18
  const { t, i18n } = useTranslation();


  // Handles form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box className="login-page">
      <ThemeProvider theme={defaultTheme}>
        {/* Main container for the login page */}
        <Grid container component="main" sx={{ height: "100vh" }}>
          {/* Image side of the login page */}
          <Grid
            item
            xs={false}
            sm={5}
            md={5}
            sx={{
              backgroundImage: `url(${LoginSideImg})`,
              backgroundSize: "cover",
              backgroundPosition: "left",
            }}
          />
          {/* Form side of the login page */}
          <Grid
            item
            xs={12}
            sm={7}
            md={7}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            {/* Language toggle button */}
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                padding: "25px 20px",
                cursor: "pointer",
                gap: "5px",
              }}
            >
              <LanguegeToggleBtn />
            </Box>
            {/* Login form container */}
            <Box
              sx={{
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box py={2}>
                <img src={Logo} alt="Logo" />
              </Box>
              <Typography
                py={1}
                variant="body1"
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: "25.6px",
                  fontFamily: "Frutiger LT Arabic, sans-serif",
                }}
              >
                {t("signin")}
              </Typography>
              <Typography
                py={1}
                sx={{
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: "32px",
                  fontFamily: "Frutiger LT Arabic, sans-serif",
                }}
              >
                {t("dashboard")}
              </Typography>

              {/* Form for login */}
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                {/* Email input field */}
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingRight: "5px",
                    }}
                  >
                    <img src={phoneIcon} alt="Phone Icon" />
                  </Box>
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
                      {t("email")}
                    </Typography>
                    <input
                      type="email"
                      placeholder={t("enter email")}
                      className="loginFormInpt"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Box>
                </Box>

                {/* Password input field */}
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingRight: "5px",
                    }}
                  >
                    <img src={phoneIcon} alt="Phone Icon" />
                  </Box>
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
                      type={show ? "text" : "password"}
                      placeholder={t("enter password")}
                      className="loginFormInpt"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Box>
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
                </Box>

                {/* Additional options: Forgot password and Remember me */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href="#"
                    variant="body2"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#B65535",
                      textDecoration: "none",
                      fontFamily: "Frutiger LT Arabic, sans-serif",
                    }}
                  >
                    {t("forgot your password ?")}
                  </Link>

                  <FormControlLabel
                    label={t("remember me")}
                    labelPlacement="start"
                    control={
                      <Checkbox
                        value="remember"
                        sx={{
                          "& .MuiSvgIcon-root": {
                            backgroundColor: "white",
                          },
                          "&.Mui-checked .MuiSvgIcon-root": {
                            color: "white", // White checkmark color when checked
                            backgroundColor: "black", // Black background when checked
                            border: "none",
                            outline: "none",
                          },
                        }}
                      />
                    }
                  />
                </Box>

                {/* Submit button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    background: "#B65535",
                    padding: "8px",
                    height: "48px",
                    borderRadius: "50px",
                    boxShadow: "none",
                    fontSize: "16px",
                    lineHeight: "25.6px",
                    fontWeight: "700",
                    fontFamily: "Frutiger LT Arabic, sans-serif",

                    "&:hover": {
                      backgroundColor: "#B65535",
                      boxShadow: "none",
                    },
                  }}
                >
                  {t("signin")}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}
