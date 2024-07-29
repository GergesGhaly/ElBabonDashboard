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
import ResendIcon from "../../assets/ResendIcon.svg";
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
import DateInput from "../Inputs/DateInput";

function createData(id, name, calories, fat, carbs) {
  return { id, name, calories, fat, carbs };
}

const rows = [
  createData(1, " انشر تقريرك وساعد الباحثين ", " 1-2-2020", "الرياض"),
  createData(2, " انشر تقريرك وساعد الباحثين ", " 1-2-2020", "المواطن"),
  createData(3, " انشر تقريرك وساعد الباحثين ", " 1-2-2020", "الرياض"),
  createData(4, " انشر تقريرك وساعد الباحثين ", " 1-2-2020", "الباحث"),
  createData(5, " انشر تقريرك وساعد الباحثين ", " 1-2-2020", "الرياض"),
];

export default function NotificationsTable() {
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
      <Grid container spacing={3} sx={{ margin: "15px 0" }}>
        {/* العنصر الأول */}
        <Grid item xs={12} md={6}>
          <SearchInput />
        </Grid>

        {/* العناصر الأخرى */}
        <Grid item xs={4} md={2}>
          <Box>
            <DateInput Placeholder={t("from")} />
          </Box>
        </Grid>
        <Grid item xs={4} md={2}>
          <Box>
            <DateInput Placeholder={t("to")} />
          </Box>
        </Grid>
        <Grid item xs={4} md={2}>
          <Box>
            <Basicselect PlaceHolder={t("status")} Options={Options} />
          </Box>
        </Grid>
      </Grid>

      {/* Table body*/}
      <Box />

      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#FBF4F2",
                width: "100%",
              }}
            >
              <TableCell sx={{ ...TableCellStyle }} align="right">
                {" "}
                م
              </TableCell>

              <TableCell sx={{ ...TableCellStyle }} align="right">
                {" "}
                نص الرسالة
              </TableCell>
              <TableCell sx={{ ...TableCellStyle }} align="right">
                {" "}
                تاريخ الارسال
              </TableCell>
              <TableCell sx={{ ...TableCellStyle }} align="right">
                موجهه الى
              </TableCell>
              <TableCell sx={{ ...TableCellStyle }} align="right">
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
                <TableCell component="th" align="right">
                  <Box>
                    <Typography sx={TypographStyle}>{row.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell component="th" align="right">
                  <Box>
                    <Typography sx={TypographStyle}>{row.calories}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={TypographStyle} align="right">
                  {row.fat}
                </TableCell>
                <TableCell component="th" align="right">
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      height: "100%",
                      width: "100%",
                      gap: "8px",
                      color: "#B65535",
                      textTransform: "none",
                    }}
                    startIcon={<img src={ResendIcon} alt="Resend Icon" />}
                  >
                    <Typography sx={{ ...TypographStyle, color: "#B65535" }}>
                      اعادة الارسال
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
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
          <BaseBtn
            Text={t("export")}
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
            }}
            Icon={EportIcon}
          />
        </Box>
      </TableContainer>
    </Box>
  );
}
