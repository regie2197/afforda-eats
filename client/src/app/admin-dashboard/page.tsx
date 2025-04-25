"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  AppBar,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import "@/styles/globals.css";
import "@/styles/admin-dashboard.css";

export default function AdminDashboard() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState<{ name: string; reviews: string[] } | null>(null);

  const users = [
    { id: 1, name: "John Doe", reviews: ["Reliable!", "Fast transactions!"] },
    { id: 2, name: "Jane Smith", reviews: ["Helpful!", "Trustworthy seller!"] },
  ];

  const vendors = [
    { id: 1, store: "Best Burgers", location: "Makati, Manila", landmark: "Near Ayala Mall" },
    { id: 2, store: "Tasty Pizza", location: "Quezon City", landmark: "Beside MRT Station" },
  ];

  const handleOpenDialog = (user: any) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedUser(null);
    setOpenDialog(false);
  };

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" sx={{ width: "100vw", bgcolor: "white", px: 3 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
          <Box display="flex" alignItems="center">
            <Image src="/logo.png" alt="AffordaEats Logo" width={50} height={50} />
            <Typography variant="h5" fontWeight="bold" color="black" ml={2}>
              AffordaEats
            </Typography>
          </Box>

          <Button variant="contained" color="error" sx={{ fontSize: "1rem", fontWeight: "bold", px: 3 }} onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Box display="flex" gap={3}>
          {/* Users Section */}
          <Card sx={{
            flex: 1,
            p: 4,
            boxShadow: 5,
            borderRadius: 5,
          }}>
            <Typography variant="h5" fontWeight="bold">Users</Typography>
            {users.map((user) => (
              <Card key={user.id} sx={{
                mb: 2,
                boxShadow: 3,
                borderRadius: 5,
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.02)"
                  }
                }}>
                <CardContent>
                  <Typography variant="h6">{user.name}</Typography>
                  <Button variant="outlined" sx={{ mt: 2 }} onClick={() => handleOpenDialog(user)}>View Reviews</Button>
                </CardContent>
              </Card>
            ))}
          </Card>

          {/* Vendors Section */}
          <Card sx={{
            flex: 1,
            p: 4,
            boxShadow: 5,
            borderRadius: 5,
            }}>
            <Typography variant="h5" fontWeight="bold">Vendors</Typography>
            {vendors.map((vendor) => (
              <Card key={vendor.id} sx={{
                mb: 2,
                boxShadow: 4,
                borderRadius: 5,
                }}>
                <CardContent>
                  <Typography variant="h6">{vendor.store}</Typography>
                  <Typography color="textSecondary">{vendor.location} ({vendor.landmark})</Typography>
                </CardContent>
              </Card>
            ))}
          </Card>
        </Box>
      </Container>

      {/* User Reviews Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        {selectedUser && (
          <>
            <DialogTitle>{selectedUser.name}'s Reviews</DialogTitle>
            <DialogContent>
              {selectedUser.reviews.map((review, index) => (
                <Typography key={index}>- {review}</Typography>
              ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}