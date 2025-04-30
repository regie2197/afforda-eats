"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  Link
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomTextField from "@/components/CustomTextField";
import Image from "next/image";
import "@/styles/globals.css";
import api from "../../../../../api/api";

export default function VendorRegister() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Use the imported `api` instance to make the register request
      const response = await api.post('/register', {
        firstName: form.firstName,
        lastName: form.lastName,
        username: form.username,
        email: form.email,
        password: form.password,
        accountType: 'STORE_OWNER' , // if you're allowing "user" or "vendor"
      });
  
      if (response.status === 201 || response.status === 200) {
        console.log('Registration success:', response.data);
        router.push('/home'); // Redirect after successful registration
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error: any) {
      console.error('Registration failed:', error.response?.data?.message || error.message);
      alert('Registration failed: ' + (error.response?.data?.message || 'Please try again'));
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#c6c7cd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Card
          sx={{
            width: "100%",
            display: "flex",
            minHeight: 500,
            overflow: "hidden",
            borderRadius: 5,
            boxShadow: 4,
            flexDirection: { xs: "column", sm: "row-reverse" },
            bgcolor: "white",
            p: 1,
          }}
        >
          {/* Right Half - Image */}
          <Box
            sx={{
              width: "50%",
              position: "relative",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Image
              src="/vendor-login.jpg"
              alt="Vendor Register Visual"
              fill
              style={{ objectFit: "cover", borderRadius: "12px" }}
            />
          </Box>

          {/* Left Half - Form */}
          <Box sx={{ width: { xs: "100%", sm: "50%" }, p: 4 }}>
            <CardContent>
              {/* Logo and Title */}
              <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                <Image src="/logo.png" alt="AffordaEats Logo" width={40} height={40} />
                <Typography variant="h5" fontWeight="bold" ml={1}>
                  AffordaEats - Vendor
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom textAlign="center">
                Register Your Business
              </Typography>
              <form onSubmit={handleSubmit}>
                <CustomTextField
                  fullWidth
                  margin="normal"
                  label="First Name"
                  name="FirstName"
                  value={form.firstName}
                  onChange={handleChange}
                />
                <CustomTextField
                  fullWidth
                  margin="normal"
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
                <CustomTextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <CustomTextField
                  fullWidth
                  margin="normal"
                  label="Username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                />
                <CustomTextField
                  fullWidth
                  margin="normal"
                  label="Password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="outlined"
                  color="success"
                  fullWidth
                  sx={{
                    mt: 2,
                    "&:hover": {
                      bgcolor: "green",
                      color: "white",
                    },
                  }}
                >
                  Register as Vendor
                </Button>
              </form>

              <Box mt={2} textAlign="center">
                <Typography component="span">Already have an account? </Typography>
                <Link
                  href="/login"
                  underline="hover"
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  Login
                </Link>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}