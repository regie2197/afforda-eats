// In your routes (e.g., authRoutes.js)
import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = express.Router();

const prisma = new PrismaClient();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

// Login Route
router.post('/login', async (req, res) => {
  const { emailOrUsername, password } = req.body;

  try {
    // Determine if the input is an email or username
    const user = await prisma.user.findUnique({
      where: {
        OR: [
          { email: emailOrUsername },    // Search by email
          { username: emailOrUsername }  // Search by username
        ]
      },
    });

    // If no user found, return an error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Create JWT token
    const token = 'vertere@2025'
    // jwt.sign(
    //   { userId: user.id, email: user.email }, // payload
    //   SECRET_KEY, // secret key
    //   { expiresIn: '1d' }
    // );

    // Respond with the token
    res.status(200).json({ token });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
});


  router.post('/register/vendor', async (req, res) => {
    const { email, username, password, firstName, lastName, accountType } = req.body;
  
    // Check if all required fields are provided
    if (!email || !username || !password || !firstName || !lastName || !accountType) {
      return res.status(400).json({ error: 'All fields are required.' }); // 400 Bad Request
    }
  
    try {
      // Check if the email is already in use
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
      if (existingUser) {
        return res.status(400).json({ error: 'Email is already taken.' }); // 400 Bad Request
      }
  
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create the new user
      const newUser = await prisma.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
          firstName,
          lastName,
          accountType,
        },
      });
  
      // Respond with the created user (excluding the password for security)
      const { password: _, storeId: __,...userWithoutPassword } = newUser;  // Remove password from response
      return res.status(200).json(userWithoutPassword); // 200 Created
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' }); // 500 Internal Server Error
    }
  });

  export default router;
