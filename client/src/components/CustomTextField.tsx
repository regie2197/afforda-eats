// components/CustomTextField.tsx
"use client"; // Required for App Router since we're using hooks

import { TextField, TextFieldProps } from "@mui/material";

const CustomTextField = (props: TextFieldProps) => {
  return (
    <TextField
      {...props} // Pass all standard TextField props dynamically
      sx={{
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "green", // ✅ Green border when selected
          },
          "&:hover fieldset": {
            borderColor: "green", // Optional: Orange border on hover (example)
          },
        },
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            color: "green", // ✅ Green label when selected
          },
        },
      }}
    />
  );
};

export default CustomTextField;
