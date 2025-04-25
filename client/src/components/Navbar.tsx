import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ width: "100vw", bgcolor: "#2E3B55", px: 3 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Image src="/logo.png" alt="AffordaEats Logo" width={40} height={40} />
          <Typography variant="h6" fontWeight="bold" ml={2}>
            AffordaEats
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}