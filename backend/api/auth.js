// In your routes (e.g., authRoutes.js)
import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = express.Router();

const prisma = new PrismaClient();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

// Login Route
// POST /auth/login
router.post('/login', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    let user;

    // Check if the request has an email or username
    if (email) {
      user = await prisma.user.findFirst({
        where: { email }
      });
    } else if (username) {
      user = await prisma.user.findFirst({
        where: { username }
      });
    }

    if (!user) return res.status(404).json({ error: 'User not found' });

    // Check if the password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ error: 'Invalid credentials' });

    // ✅ Authentication successful
    // Since you're using Basic Auth, no token needs to be generated
    const { password: _, ...userWithoutPassword } = user;
    res.status(200).json({ message: 'Login successful', user: userWithoutPassword });

  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ error: 'An error occurred during login' });
  }
});


router.post('/register', async (req, res) => {
  const { email, username, password, firstName, lastName, accountType } = req.body;

  // Check for missing fields
  if (!email || !username || !password || !firstName || !lastName || !accountType) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Reject leading/trailing spaces
  if (
    email !== email.trim() ||
    username !== username.trim() ||
    firstName !== firstName.trim() ||
    lastName !== lastName.trim() ||
    accountType !== accountType.trim()
  ) {
    return res.status(400).json({ error: 'Fields must not have leading or trailing spaces.' });
  }

  // Reject spaces inside email or username
  if (/\s/.test(email)) {
    return res.status(400).json({ error: 'Email must not contain spaces.' });
  }
  if (/\s/.test(username)) {
    return res.status(400).json({ error: 'Username must not contain spaces.' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  // Validate password length
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
  }

  try {
    // Check for existing email
    const existingEmail = await prisma.user.findUnique({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ error: 'Email is already taken.' });
    }

    // Check for existing username
    const existingUsername = await prisma.user.findUnique({ where: { username } });
    if (existingUsername) {
      return res.status(400).json({ error: 'Username is already taken.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        firstName,
        lastName,
        accountType, // no need to uppercase manually now
      },
    });

    // Remove password before sending back
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json(userWithoutPassword);

  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

  export default router;
