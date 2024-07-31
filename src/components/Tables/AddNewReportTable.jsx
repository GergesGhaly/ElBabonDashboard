import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

//icons
import EditeBlackIcon from "../../assets/EditeBlackIcon.svg";
import CorrectIcon from "../../assets/CorrectIcon.svg";
import CloseIcon from "../../assets/CloseIcon.svg";
import DeleteIcon from "../../assets/DeleteIcon.svg";
import Ranking from "../../assets/Ranking.svg";
import PlusOrangIcon from "../../assets/PlusOrangIcon.svg";

import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import BaseBtn from "../Buttons/BaseBtn";

function createData(id, ques) {
  return { id, ques };
}

const rows = [
  createData(35, "وصف الحالة أو المهمة"),
  createData(35, "ما هو الوضع الحالي في الموقع؟"),
  createData(35, "هل لاحظت أي تغييرات أو تطورات أثناء تنفيذ المهمة؟"),
  createData(35, "ما هي المصادر أو الأدوات التي استخدمتها؟"),
];

export default function AddNewReportTable({ AddQuestion }) {
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
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "26px",
  };

  const TypographStyle = {
    color: "#54514E",
    fontFamily: "Frutiger LT Arabic",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "26px",
  };

  return (
    <Box
      sx={{
        marginTop: "32px",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                width: "100%",
                backgroundColor: "#FBF4F2",
              }}
            >
              <TableCell sx={TableCellStyle} align="right">
                {" "}
                م
              </TableCell>

              <TableCell sx={TableCellStyle} align="right">
                {" "}
                السؤال
              </TableCell>
              <TableCell sx={TableCellStyle} align="right">
                {" "}
                التحكم
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={TypographStyle} component="th" align="right">
                  {row.id}
                </TableCell>

                <TableCell sx={TypographStyle} align="right">
                  {row.ques}
                </TableCell>
                <TableCell
                  sx={{ display: "flex", alignItems: "center" }}
                  align="center"
                >
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      //   width: "100%",
                      gap: "8px",
                      //   color: "#B65535",
                      textTransform: "none",
                    }}
                    startIcon={<img src={DeleteIcon} alt="Archives Icon" />}
                  ></Button>
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      //   width: "100%",
                      gap: "8px",
                      //   color: "#F6AF44",
                      textTransform: "none",
                    }}
                    startIcon={<img src={EditeBlackIcon} alt="Edit Icon" />}
                  ></Button>

                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      //   width: "100%",
                      gap: "8px",
                      //   color: "#B65535",
                      textTransform: "none",
                    }}
                    startIcon={<img src={Ranking} alt="Archives Icon" />}
                  ></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* //Tabel Footer  */}
      </TableContainer>
      {AddQuestion && (
        <BaseBtn
          Icon={PlusOrangIcon}
          Text={t("cancel new report")}
          Style={{
            height: "48px",
            padding: "8px",
            gap: "8px",
            color: "#B65535",
            borderTop: "1px solid #F6E6E1",
            borderBottom: "1px solid #F6E6E1",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "24px",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "8px",
          marginTop: "20px",
        }}
      >
        <BaseBtn
          Icon={CorrectIcon}
          Text={t("save changes")}
          Style={{
            height: "48px",
            borderRadius: "50px",
            padding: "8px",
            gap: "8px",
            backgroundColor: "#B65535",
            color: "#FFFFFF",
            width: { xs: "100%", sm: "298px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        />
        <BaseBtn
          Icon={CloseIcon}
          Text={t("cancel changes")}
          Style={{
            height: "48px",
            borderRadius: "50px",
            padding: "8px",
            gap: "8px",
            color: "#B65535",
            border: "1px solid #F6E6E1",
            width: { xs: "100%", sm: "298px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        />
      </Box>

      {/* Table body*/}
      <Box />
    </Box>
  );
}
