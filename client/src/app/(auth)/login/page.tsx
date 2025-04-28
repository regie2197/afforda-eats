"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import CustomTextField from "@/components/CustomTextField";
import '@/styles/globals.css';

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const accountType = form.username === 'vendor' ? 'vendor' : 'user';
    router.push(`/home`);
  };

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);
  const handleRegisterRedirect = (type: 'user' | 'vendor') => {
    router.push(`/register/${type}`);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#c6c7cd',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        {/* Card with image + form split */}
        <Card
          sx={{
            width: '100%', 
            display: 'flex', 
            minHeight: 400, 
            overflow: 'hidden',
            borderRadius: 5,
            boxShadow: 4,
            p: 1
          }}>
          {/* Left Half - Image */}
          <Box
            sx={{
              width: '50%',
              position: 'relative',
              display: { xs: 'none', sm: 'block' }, // hide on mobile
            }}
          >
            <Image
              src="/login-illustration.jpg"
              alt="Login Visual"
              fill
              style={{ objectFit: 'cover',
                borderRadius: '12px',
              }}
            />
          </Box>

          {/* Right Half - Form */}
          <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 4 }}>
            <CardContent>
              {/* Logo and Title */}
              <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                <Image src="/logo.png" alt="AffordaEats Logo" width={40} height={40} />
                <Typography variant="h5" fontWeight="bold" ml={1}>
                  AffordaEats
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom textAlign="center">
                Login to your account
              </Typography>
              <form onSubmit={handleSubmit}>
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
                  name="password"
                  type="password"
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
                      color: "white" // Ensures text stays visible when background changes
                    }
                  }}
                >
                  Login
                </Button>
              </form>

              <Box mt={2} textAlign="center">
                <Typography component="span">Don’t have an account? </Typography>
                <Link 
                  component="button" 
                  onClick={handleOpenDialog} 
                  underline="hover" 
                  sx={{ fontWeight: 'bold', color: 'black' }} // Makes "Register" bold and black
                >
                  Register
                </Link>
              </Box>
            </CardContent>
          </Box>
        </Card>

        {/* Account Type Dialog */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Select Account Type</DialogTitle>
          <DialogContent>
            <Typography>Which account type are you registering as?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleRegisterRedirect('user')}>User</Button>
            <Button onClick={() => handleRegisterRedirect('vendor')}>Vendor</Button>
          </DialogActions>
        </Dialog>
        
      </Container>
    </Box>
  );
};

export default Login;
