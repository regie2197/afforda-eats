import express from 'express';
import { PrismaClient } from '@prisma/client';
const router = express.Router();
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

// POST Create User
router.post('/', async (req, res) => {
    try {
      const { email, username, password, firstName, lastName, accountType } = req.body;
  
      if (!email || !username || !password || !firstName || !lastName || !accountType) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
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
      res.status(200).json(newUser);
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
//GET Get all user
router.get('/', async (req, res) => {
    try {
      const users = await prisma.user.findMany();
  
      // 404 if no users are found
      if (!users || users.length === 0) {
        return res.status(404).json({ error: 'No users found' });
      }
      // 200 OK with list of users
      res.status(200).json(users);
    } catch (error) {
      // 500 Internal Server Error
      console.error('Server error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// GET Get User by ID
router.get('/:id', async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
  
      // 400 Bad Request if id is not a number
      if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid user ID' });
      }
  
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
  
      // 404 Not Found if user doesn't exist
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // 200 OK with user data
      res.status(200).json(user);
    } catch (error) {
      // 500 Internal Server Error
      console.error('Server error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  

// PUT Update User by ID
router.put('/:id', async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
  
      // 400 Bad Request if ID is invalid
      if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid user ID' });
      }
  
      const { email, username, password, firstName, lastName, accountType,  } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      // Attempt to update the user
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          email,
          username,
          password : hashedPassword,
          firstName,
          lastName,
          accountType,
        },
      });
  
      // 200 OK
      res.status(200).json(updatedUser);
    } catch (error) {
      // 404 Not Found if Prisma can't find the user to update
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // 500 Internal Server Error for anything else
      console.error('Update error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
// PATCH Partially Update User by ID
router.patch('/:id', async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
  
      // 400 Bad Request if ID is invalid
      if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid user ID' });
      }
  
      const { email, username, password, firstName, lastName, accountType} = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      // Find the user to partially update
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          email,
          username,
          password:hashedPassword,
          firstName,
          lastName,
          accountType,
        },
      });
  
      // 200 OK
      res.status(200).json(updatedUser);
    } catch (error) {
      // 404 Not Found if Prisma can't find the user to update
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // 500 Internal Server Error for anything else
      console.error('Partial update error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
    

// DELETE User by ID
router.delete('/:id', async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
  
      // 400 Bad Request if ID is invalid
      if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid user ID' });
      }
  
      // Attempt to delete the user
      const deletedUser = await prisma.user.delete({
        where: { id: userId },
      });
  
      // 204 No Content if deletion is successful (no body returned)
      res.status(204).send();
    } catch (error) {
      // 404 Not Found if the user is not found
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // 500 Internal Server Error for any other errors
      console.error('Delete error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  


  export default router;
