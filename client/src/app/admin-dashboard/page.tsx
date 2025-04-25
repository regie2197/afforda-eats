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
  Toolbar
} from "@mui/material";
import Image from "next/image";

export default function AdminDashboard() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedStore, setSelectedStore] = useState<{
    store: string;
    location: string;
    landmark: string;
    reviews: string[];
  } | null>(null);

  const users = [
    { id: 1, name: "John Doe", role: "User" },
    { id: 2, name: "Jane Smith", role: "User" },
  ];

  const vendors = [
    { id: 1, name: "Vendor One", store: "Best Burgers", location: "Makati, Manila", landmark: "Near Ayala Mall", reviews: ["Great food!", "Fast delivery!"] },
    { id: 2, name: "Vendor Two", store: "Tasty Pizza", location: "Quezon City", landmark: "Beside MRT Station", reviews: ["Excellent crust!", "Affordable prices!"] },
  ];

  const handleOpenDialog = (store: any) => {
    setSelectedStore(store);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedStore(null);
    setOpenDialog(false);
  };

  return (
    <>
      {/* ✅ Navbar with Success Color & Shadow */}
      <AppBar position="static" sx={{ width: "100vw", bgcolor: "success.main", boxShadow: 4 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
          <Box display="flex" alignItems="center">
            <Image src="/logo.png" alt="AffordaEats Logo" width={40} height={40} />
            <Typography variant="h6" fontWeight="bold" ml={2}>
              AffordaEats Admin Dashboard
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ Admin Dashboard Enclosed in a Card */}
      <Box 
        sx={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f7f7f7",
          py: 4
        }}
      >
        <Container maxWidth="lg">
          <Card sx={{ p: 4, boxShadow: 5, borderRadius: 4 }}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
              Admin Dashboard
            </Typography>

            {/* ✅ Users Section with Hover Effect */}
            <Typography variant="h5" fontWeight="bold" mb={2}>All Users</Typography>
            {users.map((user) => (
              <Card 
                key={user.id} 
                sx={{ 
                  mb: 2, 
                  boxShadow: 3, 
                  transition: "0.3s", 
                  "&:hover": { boxShadow: 6, transform: "scale(1.02)" } 
                }}
              >
                <CardContent>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography color="textSecondary">{user.role}</Typography>
                </CardContent>
              </Card>
            ))}

            {/* ✅ Vendors & Stores Section with Dialogs */}
            <Typography variant="h5" fontWeight="bold" mt={4} mb={2}>All Vendors & Stores</Typography>
            {vendors.map((vendor) => (
              <Card key={vendor.id} sx={{ mb: 2, boxShadow: 4 }}>
                <CardContent>
                  <Typography variant="h6">{vendor.store}</Typography>
                  <Typography color="textSecondary">{vendor.location} ({vendor.landmark})</Typography>
                  <Button variant="outlined" sx={{ mt: 2 }} onClick={() => handleOpenDialog(vendor)}>View Store Details</Button>
                </CardContent>
              </Card>
            ))}

            {/* ✅ Store Details Dialog */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
              {selectedStore && (
                <>
                  <DialogTitle>{selectedStore.store}</DialogTitle>
                  <DialogContent>
                    <Typography>Location: {selectedStore.location}</Typography>
                    <Typography>Landmark: {selectedStore.landmark}</Typography>
                    <Typography variant="subtitle2" fontWeight="bold" mt={2}>Reviews:</Typography>
                    {selectedStore.reviews.map((review, index) => (
                      <Typography key={index}>- {review}</Typography>
                    ))}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">Close</Button>
                  </DialogActions>
                </>
              )}
            </Dialog>
          </Card>
        </Container>
      </Box>
    </>
  );
}