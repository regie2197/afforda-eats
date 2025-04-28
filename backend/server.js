import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client'; // Import PrismaClient
import authenticate from './middleware/authMiddleware.js';
import authRoutes from './api/auth.js';
import foodRoutes from './api/food.js';
import reviewRoutes from './api/review.js';
import storeRoutes from './api/store.js';
import userRoutes from './api/user.js';

dotenv.config();

const app = express();
const prisma = new PrismaClient(); // Initialize Prisma

const corsOptions = {
  origin: 'http://localhost:3000', // Allow only frontend origin
  credentials: true, // Allow cookies to be sent with requests
};

app.use(cors(corsOptions));
app.use(express.json());

// Attach Prisma to each request
app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Use the routes
app.use('/api', authRoutes);
app.use('/api/food', authenticate, foodRoutes); // Protect the food routes
app.use('/api/review', authenticate, reviewRoutes); // Protect the review routes
app.use('/api/store', authenticate, storeRoutes); // Protect the store routes
app.use('/api/user', authenticate, userRoutes); // Protect the user routes

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
