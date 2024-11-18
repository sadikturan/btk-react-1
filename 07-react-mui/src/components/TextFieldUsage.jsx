import { InputAdornment, Stack, TextField } from "@mui/material";

export default function TextFieldUsage() {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={3}>
        <TextField label="Name" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={3}>
        <TextField label="Name" required />
        <TextField type="password" label="Password" required />
        <TextField type="password" label="Password" required disabled />
      </Stack>

      <Stack direction="row" spacing={3}>
        <TextField
          label="Name"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Name"
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            },
          }}
        />
      </Stack>

      <Stack direction="row" spacing={3}>
        <TextField label="Name" helperText="Incorrect" error />
      </Stack>
    </Stack>
  );
}
