// components/CustomTextField.tsx
"use client"; // Required for App Router since we're using hooks

import { TextField, TextFieldProps } from "@mui/material";

const CustomTextField = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      data-testid={props.name} 
      sx={{
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "green",
          },
          "&:hover fieldset": {
            borderColor: "green",
          },
        },
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            color: "green",
          },
        },
      }}
    />
  );
};

export default CustomTextField;
