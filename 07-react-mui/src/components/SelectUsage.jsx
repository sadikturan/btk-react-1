import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const cities = [
  { label: "Kocaeli", value: "41" },
  { label: "İstanbul", value: "34" },
  { label: "Rize", value: "53" },
  { label: "Hatay", value: "31" },
];

export default function SelectUsage() {
  const [city, setCity] = useState(41);
  function handleChange(e) {
    setCity(e.target.value);
  }
  console.log(city);
  return (
    <Box width="300px">
      <TextField
        label="Select City"
        value={city}
        onChange={handleChange}
        select
        fullWidth
      >
        {/* <MenuItem value="01">Adana</MenuItem>
        <MenuItem value="34">İstanbul</MenuItem>
        <MenuItem value="41">Kocaeli</MenuItem> */}

        {cities.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
