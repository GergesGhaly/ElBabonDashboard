import { Box, colors, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
import BaseBtn from "../../components/Buttons/BaseBtn";

//assets
import InvertedExclamationIcon from "../../assets/InvertedExclamationIcon.svg";
import monk from "../../assets/image/monk1.jpg";
import monk2 from "../../assets/image/monk2.jpg";
import monk3 from "../../assets/image/monk3.png";
import monk4 from "../../assets/image/monk4.jpg";
import PhoneOrangIcon from "../../assets/PhoneOrangIcon.svg";
import RecordMovementsTable from "../../components/Tables/RecordMovementsTable";
import ReportsSidBar from "../../components/ReportsSidBar/ReportsSidBar";

const ReportDetails = () => {
  const [status, setStatus] = useState("جديده");
  const [condition, setCondition] = useState([
    "تبحث عن طعام",
    "مصابه باحشرات",
    "مصابه بالجروح",
    "شرسه",
  ]);
  const [images, setImages] = useState([monk, monk2, monk3, monk4]);

  const [Hour, setHour] = useState(5);
  const { t, i18n } = useTranslation();

  const TypographStyle = {
    color: "#54514E",
    fontFamily: "Frutiger LT Arabic",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "26px",
    display: "flex",
  };

  const SectionLabelStyle = {
    fontFamily: "Frutiger LT Arabic",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "25.6px",
    textAlign: "right",
    color: "#1D1C1B",
  };

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
      {/* <ReportsSidBar /> */}

      {/* //page header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <PageTitle
            Text={t("مهمه رقم (7) ")}
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
              ...TypographStyle,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: status === "جديده" ? "#C5FFD1" : "#F1F1F0",
              color: status === "جديده" ? "#49A95E" : "#54514E",
              width: "122px",
              height: "30px",
              padding: "2px 8px",
              border: "1px solid",
              borderRadius: "4px",
              borderColor: status === "جديده" ? "#84F39C" : "#C9C6C4",
            }}
          >
            {status}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Frutiger LT Arabic",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "25.6px",
              textAlign: "right",
              color: "#49A95E",
            }}
          >
            منذ {Hour} ساعة
          </Typography>
          <img src={InvertedExclamationIcon} alt="" />
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: "16px" }}>
        {/* //report details */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontFamily: "Frutiger LT Arabic",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "32px",
              textAlign: "right",
              color: "#1D1C1B",
            }}
            variant="body1"
            color="initial"
          >
            تفاصيل البلاغ
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              marginTop: "32px",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ ...SectionLabelStyle }}
            >
              عدد القردة
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                ...SectionLabelStyle,
                color: "#847F7A",
                backgroundColor: "#F1F3F6",
                padding: "8px",
                borderRadius: "8px",
              }}
            >
              7
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              marginTop: "32px",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ ...SectionLabelStyle }}
            >
              حاله القردة
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              {condition.map((item, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  color="initial"
                  sx={{
                    ...SectionLabelStyle,
                    color: "#384252",
                    backgroundColor: "#E0DFDE",
                    padding: "8px",
                    borderRadius: "16px",
                    border: "1px solid #E0DFDE",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              marginTop: "32px",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ ...SectionLabelStyle }}
            >
              ملاحظه
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                ...SectionLabelStyle,
                color: "#847F7A",
                backgroundColor: "#F1F3F6",
                padding: "8px",
                borderRadius: "8px",
                minHeight: " 82px",
              }}
            >
              يوجد قرد مصاب وبعض القرود هربوا اثناء التصوير
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              marginTop: "32px",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ ...SectionLabelStyle }}
            >
              صور القردة
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {images.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    borderRadius: "8px",
                    border: "1px solid #E0DFDE",
                    height: "78px",
                    width: " 122.25px",
                  }}
                >
                  <img
                    src={item}
                    alt=""
                    style={{
                      borderRadius: "8px",

                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              marginTop: "32px",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ ...SectionLabelStyle }}
            >
              المنطقه
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                ...SectionLabelStyle,
                color: "#847F7A",
                backgroundColor: "#F1F3F6",
                padding: "8px",
                borderRadius: "8px",
              }}
            >
              الرياض
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              marginTop: "32px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <BaseBtn
                Icon={PhoneOrangIcon}
                Text={t("اتصال ")}
                Style={{
                  height: "48px",
                  borderRadius: "50px",
                  padding: "8px",
                  gap: "8px",
                  color: "#B65535",
                  border: "1px solid #F6E6E1",
                  width: { xs: "100%", sm: "260px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              />
              <BaseBtn
                Text={t("الاتجاهات ")}
                Style={{
                  height: "48px",
                  borderRadius: "50px",
                  padding: "8px",
                  gap: "8px",
                  color: "#B65535",
                  border: "1px solid #F6E6E1",
                  width: { xs: "100%", sm: "260px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "gray",
                borderRadius: "8px",
                width: "100%",
              }}
            >
              map
            </Box>
          </Box>
        </Grid>
        {/* Record movements */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #DCDFE3",
              borderRadius: "8px",
              padding: "8px",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{
                color: "#0D0C0C",
                fontFamily: "Frutiger LT Arabic",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "22px",
                padding: "0 8px",
              }}
            >
              سجل الحركات
            </Typography>
            <RecordMovementsTable />
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default ReportDetails;
