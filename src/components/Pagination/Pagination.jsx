import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  InputBase,
  styled,
} from "@mui/material";

// تعريف الأعمدة
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "age", headerName: "Age", type: "number", width: 90 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

// بيانات الجدول
const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

// تخصيص مكون Select لتغيير لونه
const CustomSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.common.black,
  "& .MuiSelect-select": {
    color: theme.palette.common.black,
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.common.black,
  },
  "&:focus": {
    borderColor: "#B65535",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#B65535",
    },
    "&:hover fieldset": {
      borderColor: "#B65535",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#B65535",
    },
  },
}));

export default function TablePagination() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // معالجة تغيير الصفحة
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // معالجة تغيير عدد الصفوف في الصفحة
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); // إعادة تعيين الصفحة إلى 1 عند تغيير عدد الصفوف في الصفحة
  };

  // حساب البيانات المعروضة في الصفحة الحالية
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = rows.slice(startIndex, endIndex);

  return (
    <Box>
      <TableContainer component={Paper} sx={{ height: 400, width: "100%" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field} style={{ width: column.width }}>
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.field}>
                    {column.valueGetter
                      ? column.valueGetter({ row })
                      : row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <FormControl>
          <CustomSelect
            id="rows-per-page"
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            size="small"
            sx={{ minWidth: 120 }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </CustomSelect>
        </FormControl>
        <Pagination
          count={Math.ceil(rows.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
          size="small" // يمكنك تغيير الحجم حسب احتياجاتك
        />
      </Box>
    </Box>
  );
}
