import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Create a food item
router.post('/', async (req, res) => {
  const { name, price, description, storeId } = req.body;

  if (!name || !price || !description || !storeId) {
    return res.status(400).json({ error: 'All fields (name, price, description, storeId) are required' });
  }

  try {
    const store = await prisma.store.findUnique({ where: { id: storeId } });
    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }

    const food = await prisma.food.create({
      data: {
        name,
        price,
        description,
        storeId,
      },
    });

    res.status(200).json(food);
  } catch (error) {
    console.error('Error creating food:', error);
    res.status(500).json({ error: 'Failed to create food' });
  }
});

// Get all foods for a store
router.get('/', async (req, res) => {
  const storeId = parseInt(req.params.storeId);

  if (isNaN(storeId)) {
    return res.status(400).json({ error: 'Invalid store ID' });
  }

  try {
    const foods = await prisma.food.findMany({ where: { storeId } });

    if (!foods.length) {
      return res.status(404).json({ error: 'No food items found for this store' });
    }

    res.status(200).json(foods);
  } catch (error) {
    console.error('Error fetching foods:', error);
    res.status(500).json({ error: 'Failed to fetch foods' });
  }
});

// Get a single food item
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid food ID' });
  }

  try {
    const food = await prisma.food.findUnique({ where: { id } });

    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }

    res.status(200).json(food);
  } catch (error) {
    console.error('Error fetching food:', error);
    res.status(500).json({ error: 'Failed to fetch food' });
  }
});

// PATCH (Partial Update) a food item
router.patch('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, description } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid food ID' });
  }

  try {
    const food = await prisma.food.findUnique({ where: { id } });

    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }

    const updatedFood = await prisma.food.update({
      where: { id },
      data: {
        name: name ?? food.name,
        price: price ?? food.price,
        description: description ?? food.description,
      },
    });

    res.status(200).json(updatedFood);
  } catch (error) {
    console.error('Error updating food:', error);
    res.status(500).json({ error: 'Failed to update food' });
  }
});

// DELETE a food item
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid food ID' });
  }

  try {
    const food = await prisma.food.findUnique({ where: { id } });

    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }

    await prisma.food.delete({ where: { id } });

    res.status(200).json({ message: 'Food deleted successfully' });
  } catch (error) {
    console.error('Error deleting food:', error);
    res.status(500).json({ error: 'Failed to delete food' });
  }
});

export default router;
