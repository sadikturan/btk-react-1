import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function TypographyUsage() {
  return (
    <Box sx={{ width: "100%", maxWidth: 800 }}>
      <Typography variant="h1" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="h2" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="h3" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Lorem, ipsum dolor.
      </Typography>
      <Typography variant="subtitle1" gutterBottom noWrap>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis.
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis.
      </Typography>
      <Typography variant="body1" gutterBottom color="error">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
        exercitationem quam dolore! Autem suscipit exercitationem expedita
        doloremque repudiandae, eligendi reiciendis corrupti voluptas, qui
        cumque soluta ad dolore illo quaerat ut.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
        exercitationem quam dolore! Autem suscipit exercitationem expedita
        doloremque repudiandae, eligendi reiciendis corrupti voluptas, qui
        cumque soluta ad dolore illo quaerat ut.
      </Typography>
      <Typography variant="button" gutterBottom>
        button text
      </Typography>
    </Box>
  );
}
