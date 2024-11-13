import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Box,
} from "@mui/material";
import { useState } from "react";

export default function RadioButtonUsage() {
  const [value, setValue] = useState("1");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <Box>
      <p>{value}</p>
      <FormControl>
        <FormLabel>Eğitiminiz</FormLabel>
        <RadioGroup name="egitim" row value={value} onChange={handleChange}>
          <FormControlLabel
            control={<Radio size="medium" color="secondary" />}
            label="Lise"
            value="0"
          />
          <FormControlLabel
            control={<Radio size="small" color="danger" />}
            label="Üniversite"
            value="1"
          />
          <FormControlLabel
            control={<Radio />}
            label="Yüksek Lisans"
            value="2"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
