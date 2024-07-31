import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SearchInput from "../Inputs/SearchInput";
import AttributionIcon from "../../assets/AttributionIcon.svg";
import CommentIcon from "../../assets/CommentIcon.svg";
import ExportIcon from "../../assets/ExportIcon.svg";
import CloseIcon from "../../assets/CloseIcon.svg";

import { Box, Button, Avatar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import BaseBtn from "../Buttons/BaseBtn";
import ProfileImg from "../../assets/image/Ellipse 598.png";

function createData(id, name, calories, fat, carbs, time) {
  return { id, name, calories, fat, carbs, time };
}

const rows = [
  createData(
    1,
    " جابر الحكمى ",
    "مواطن",
    "انشر تقريرك وساعد الباحثين",
    " 1-2-2020",
    "3:00 مساءً"
  ),
];

export default function RecordMovementsTable() {
  const { t, i18n } = useTranslation();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const displayedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  //Tabel Cell Style
  const TableCellStyle = {
    color: "#0D0C0C",
    fontFamily: "Frutiger LT Arabic",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "22px",
  };

  const TypographStyle = {
    color: "#54514E",
    fontFamily: "Frutiger LT Arabic",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "26px",
  };

  return (
    <Box
      sx={{
        // padding: "16px",
        borderRadius: "8px",
      }}
    >
      {/* Table body*/}
      <Box />

      <TableContainer>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                width: "100%",
              }}
            >
              <TableCell sx={{ ...TableCellStyle }} align="right">
                {" "}
                التاريخ
              </TableCell>
              <TableCell sx={{ ...TableCellStyle }} align="right">
                {" "}
                المنفذ
              </TableCell>
              <TableCell sx={{ ...TableCellStyle }} align="right">
                الحركه
              </TableCell>
              <TableCell sx={{ ...TableCellStyle }} align="right">
                التفاصيل
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={TypographStyle} align="right">
                  <Typography sx={TypographStyle}> 21 / 8 / 2024</Typography>
                  <Typography sx={TypographStyle}>5:00 مساءً</Typography>
                </TableCell>

                <TableCell component="th" align="right">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      height: "100%",
                      width: "100%",
                      gap: "8px",
                    }}
                  >
                    <Avatar
                      sx={{
                        // lineHeight: "24px",
                        width: "24px",
                        height: "24px",
                      }}
                      alt="Remy Sharp"
                      src={ProfileImg}
                    />
                    <Box sx={{}}>
                      <Typography sx={{ ...TypographStyle, color: "#54514E" }}>
                        مواطن
                      </Typography>
                      <Typography sx={TypographStyle}>{row.name}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell component="th" align="right">
                  <Typography sx={TypographStyle}> عمل بلاغ</Typography>
                </TableCell>
                <TableCell component="th" align="right">
                  <Button>
                    <Typography sx={{ ...TypographStyle, color: "#B65535" }}>
                      {" "}
                      عرض
                    </Typography>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* //Tabel Footer  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // flexWrap: "wrap",
            gap: "16px",
            padding: "8px",
          }}
        >
          <BaseBtn
            SmallBtn
            Text={t("تعليق")}
            Style={{
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
            }}
            Icon={CommentIcon}
          />
          <BaseBtn
            SmallBtn
            Text={t("اسناد")}
            Style={{
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
            }}
            Icon={AttributionIcon}
          />
          <BaseBtn
            SmallBtn
            Text={t("اغلاق")}
            Style={{
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
            }}
            Icon={CloseIcon}
          />

          {/* <TabelBtn/> */}
        </Box>
      </TableContainer>
    </Box>
  );
}
