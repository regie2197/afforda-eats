import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Create a food item
router.post('/', async (req, res) => {
  const { name, price, description, storeId } = req.body;

  // Data validation for required fields
  if (!name || !price || !description || !storeId) {
    return res.status(400).json({ error: 'All fields (name, price, description, storeId) are required' });
  }

  // Validate that price is a number and a positive value (can include decimals)
  const parsedPrice = parseFloat(price);

  if (isNaN(parsedPrice)) {
    return res.status(400).json({ error: 'Price must be a valid number' });
  }

  if (parsedPrice <= 0) {
    return res.status(400).json({ error: 'Price must be a positive number' });
  }

  try {
    // Check if store exists
    const store = await prisma.store.findUnique({ where: { id: storeId } });
    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }

    // Create the food item
    const food = await prisma.food.create({
      data: {
        name,
        price: parsedPrice, // Use the validated and parsed price
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
router.get('store/:storeId', async (req, res) => {
  const storeId = parseInt(req.params.storeId, 10);

  if (isNaN(storeId)) {
    return res.status(400).json({ error: 'Invalid store ID' });
  }

  try {
    // Fetch foods and include relations if necessary (e.g., reviews)
    const foods = await prisma.food.findMany({
      where: { storeId },
      include: {
        reviews: true,  // Optionally include related reviews if you need them
      },
    });

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
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid food ID' });
  }

  try {
    const food = await prisma.food.findUnique({
      where: { id },
      include: {
        reviews: true,  // Include related reviews if needed
      },
    });

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
  const id = parseInt(req.params.id, 10);
  const { name, price, description } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid food ID' });
  }

  // Validate price if provided
  let updatedPrice = price;
  if (updatedPrice) {
    const parsedPrice = parseFloat(updatedPrice);
    if (isNaN(parsedPrice)) {
      return res.status(400).json({ error: 'Price must be a valid number' });
    }
    if (parsedPrice <= 0) {
      return res.status(400).json({ error: 'Price must be a positive number' });
    }
    updatedPrice = parsedPrice;  // Assign validated price
  }

  try {
    const food = await prisma.food.findUnique({ where: { id } });

    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }

    // Update food item data
    const updatedFood = await prisma.food.update({
      where: { id },
      data: {
        name: name ?? food.name,
        price: updatedPrice ?? food.price,
        description: description ?? food.description,
      },
    });

    res.status(200).json(updatedFood);
  } catch (error) {
    console.error('Error updating food:', error);
    res.status(500).json({ error: 'Failed to update food' });
  }
});

// DELETE a food item (with cascade delete on related reviews)
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid food ID' });
  }

  try {
    const food = await prisma.food.findUnique({ where: { id } });

    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }

    // Cascade delete related reviews and delete the food item
    await prisma.$transaction([
      prisma.review.deleteMany({ where: { foodId: id } }),
      prisma.food.delete({ where: { id } }),
    ]);

    res.status(200).json({ message: 'Food and related reviews deleted successfully' });
  } catch (error) {
    console.error('Error deleting food:', error);
    res.status(500).json({ error: 'Failed to delete food' });
  }
});

export default router;
