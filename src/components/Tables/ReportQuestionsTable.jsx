import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchInput from "../Inputs/SearchInput";
import Pagination from "@mui/material/Pagination";
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
import Cell from "../Inputs/Switch";
//Icons
import PlusIcon from "../../assets/PlusIcon.svg";
function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("تقرير رقم لمتابعه الباحثين", "ليد ال ضبعان", 35, "مدير النظام"),
  createData("تقرير رقم لمتابعه الباحثين", "ليد ال ضبعان", 35, "مدير النظام"),
];

export default function ReportQuestionsTable() {
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
        marginTop: "16px",
        padding: "16px",
        backgroundColor: "#F9F9F9",
        borderRadius: "8px",
      }}
    >
      <Grid container spacing={3} sx={{ margin: "16px 0" }}>
        {/* العنصر الأول */}
        <Grid item xs={8}>
          <SearchInput />
        </Grid>

        {/* العناصر الأخرى */}
        <Grid item xs={4}>
          <Box>
            <Basicselect PlaceHolder={t("status")} Options={Options} />
          </Box>
        </Grid>
      </Grid>

      {/* Table body*/}
      <Box />

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
                م{" "}
              </TableCell>
              <TableCell sx={TableCellStyle} align="right">
                {" "}
                عنوان التقارير{" "}
              </TableCell>
              <TableCell sx={TableCellStyle} align="right">
                {" "}
                تم كتابته{" "}
              </TableCell>
              <TableCell sx={TableCellStyle} align="right">
                {" "}
                عدد الاسئله{" "}
              </TableCell>
              <TableCell sx={TableCellStyle} align="right">
                {" "}
                التحكم{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  sx={{
                    ...TypographStyle,
                    minHeight: "72px", // تأكد من تطابق الارتفاع مع ارتفاع الصف
                  }}
                  align="right"
                >
                  0
                </TableCell>
                <TableCell
                  sx={{
                    ...TypographStyle,
                    minHeight: "72px",
                  }}
                  align="right"
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    minHeight: "72px",
                    padding: "8px",
                  }}
                  align="right"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "32px",
                        height: "32px",
                      }}
                      alt="Remy Sharp"
                      src={ProfileImg}
                    />
                    <Typography
                      sx={{
                        ...TypographStyle,
                        flex: 1, // يضمن تمدد النص لملء المساحة المتاحة
                      }}
                    >
                      {row.calories}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    ...TypographStyle,
                    minHeight: "72px",
                  }}
                  align="right"
                >
                  {row.fat}
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    minHeight: "72px",
                  }}
                  align="center"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Cell />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Tabel Footer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "8px",
          }}
        >
          <Box
            sx={{
              marginRight: "16px",
              fontSize: "14px",
              fontWeight: "700",
              color: "#AAA6A3",
              fontFamily: "Frutiger LT Arabic",
              order: { xs: "0", sm: "2", md: "0" },
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
              alignSelf: "center",
              gap: "16px",
            }}
          >
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
          </Box>
        </Box>
      </TableContainer>
    </Box>
  );
}
