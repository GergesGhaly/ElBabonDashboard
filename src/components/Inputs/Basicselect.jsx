import { Box } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";

const Basicselect = ({ PlaceHolder, Options }) => {
  const [age, setAge] = React.useState("");

  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ width: "100%", padding: "0px" }}>
      <InputLabel
        sx={{
          fontSize: "14px",
          fontWeight: "700",
          color: "#54514E",
          fontFamily: "Frutiger LT Arabic",
          lineHeight: "22.4px",
          "&.Mui-focused": {
            color: "#B65535",
          },
        }}
        id="demo-simple-select-helper-label"
      >
        {PlaceHolder}
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
        label={PlaceHolder}
        onChange={handleChange}
        sx={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E0E4EA",
          borderRadius: "8px",

          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {Options?.map((item, idx) => (
          <MenuItem key={idx} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Basicselect;
