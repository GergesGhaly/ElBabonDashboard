import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";

//icons
import EditIcon from "../../assets/EditIcon.svg";
import ArchiveIcon from "../../assets/ArchiveIcon.svg";

import {
  Box,
  Select,
  MenuItem,
  Button,
  Avatar,
  Typography,
  Grid,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import BaseBtn from "../Buttons/BaseBtn";
import EportIcon from "../../assets/ExportIcon.svg";
import ProfileImg from "../../assets/image/Ellipse 598.png";
import Basicselect from "../Inputs/Basicselect";

function createData(id, area) {
  return { id, area };
}

const rows = [
  createData(35, "الرياض"),
  createData(35, "مكه"),
  createData(35, "مكه"),
  createData(35, "مكه"),
  createData(35, "عسير"),
  createData(35, "عسير"),
  createData(35, "المدينه"),
  createData(35, "مكه"),
  createData(35, "المدينه"),
  createData(35, "عسير"),
  createData(35, "المدينه"),
  createData(35, "عسير"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
  createData(35, "المدينه"),
];

export default function LocationsTable() {
  const { t, i18n } = useTranslation();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlePaginationChange = (event, value) => {
    setPage(value - 1);
  };

  const displayedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const totalPages = Math.ceil(rows.length / rowsPerPage);

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

  const Options = [
    { label: "Option 1", value: "Option 1" },
    { label: "Option 2", value: "Option 2" },
    { label: "Option 3", value: "Option 3" },
    { label: "Option 4", value: "Option 4" },
  ];

  return (
    <Box
      sx={{
        marginTop: "32px",
        padding: "16px",
        backgroundColor: "#F9F9F9",
        borderRadius: "8px",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#FBF4F2",
                width: "100%",
              }}
            >
              <TableCell sx={TableCellStyle} align="right">
                {" "}
                المعرف
              </TableCell>

              <TableCell sx={TableCellStyle} align="right">
                {" "}
                المنطقه
              </TableCell>
              <TableCell sx={TableCellStyle} align="right">
                {" "}
                اجراءات
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
                  {row.area}
                </TableCell>
                <TableCell
                  sx={{ display: "flex", alignItems: "center" }}
                  align="center"
                >
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      height: "100%",
                      //   width: "100%",
                      gap: "8px",
                      //   color: "#F6AF44",
                      textTransform: "none",
                    }}
                    startIcon={<img src={EditIcon} alt="Edit Icon" />}
                  >
                    <Typography sx={{ ...TypographStyle, color: "#F6AF44" }}>
                      تعديل
                    </Typography>
                  </Button>
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      height: "100%",
                      //   width: "100%",
                      gap: "8px",
                      //   color: "#B65535",
                      textTransform: "none",
                    }}
                    startIcon={<img src={ArchiveIcon} alt="Archives Icon" />}
                  >
                    <Typography sx={{ ...TypographStyle, color: "#984848" }}>
                      نقل الى الارشيف
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
            flexWrap: "wrap",
            padding: "8px",
          }}
        >
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: "700",
              color: "#AAA6A3",
              fontFamily: "Frutiger LT Arabic",
            //   marginRight: "auto", // إزاحة النص إلى اليمين
            }}
          >
            {`عرض من ${page * rowsPerPage + 1} الى ${Math.min(
              (page + 1) * rowsPerPage,
              rows.length
            )} من ${rows.length} مدخلات`}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              flexGrow: 1,
            }}
          >
            <Select
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              displayEmpty
              sx={{
                width: "68px",
                height: "40px",
                borderRadius: "10px",
                border: "1px solid #C2C2C2",
                "& .Mui-selected": {
                  backgroundColor: "#ffff !important",
                  outline: "#B65535",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
            </Select>
            <Button
              onClick={() => handlePaginationChange(null, page)}
              disabled={page === 0}
              variant="text"
              sx={{
                color: "#B65535",
                fontFamily: "Frutiger LT Arabic",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "22.4px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              السابق
            </Button>
            <Pagination
              count={totalPages}
              page={page + 1}
              onChange={handlePaginationChange}
              variant="outlined"
              shape="rounded"
              hidePrevButton
              hideNextButton
              sx={{
                "& .MuiPaginationItem-root": {
                  border: "none",
                },
                "& .Mui-selected": {
                  color: "#0D0C0C",
                  backgroundColor: "#ffff !important",
                  border: "1px solid #B65535",
                },
              }}
            />
            <Button
              onClick={() => handlePaginationChange(null, page + 2)}
              disabled={page >= totalPages - 1}
              variant="text"
              sx={{
                color: "#B65535",
                fontFamily: "Frutiger LT Arabic",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "22.4px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              التالي
            </Button>
          </Box>
        </Box>
      </TableContainer>

      {/* Table body*/}
      <Box />
    </Box>
  );
}
