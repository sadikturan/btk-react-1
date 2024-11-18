import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useState } from "react";

export default function CheckBoxUsage() {
  const [value, setValue] = useState(true);
  const [skills, setSkills] = useState(["css"]);

  function handleChange(e) {
    setValue(e.target.checked);
  }

  console.log(skills);

  function handleSkillChange(e) {
    const index = skills.indexOf(e.target.value);

    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((s) => s !== e.target.value));
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Kullanım koşulları"
          control={<Checkbox checked={value} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<FavoriteBorderIcon />}
          checkedIcon={<FavoriteIcon color="success" />}
          checked={value}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Yetenekler</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              control={
                <Checkbox
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}
