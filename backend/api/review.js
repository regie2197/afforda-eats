import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Create a review
router.post('/', async (req, res) => {
  const { userId, foodId, storeId, content, rating } = req.body;

  if (!userId || !foodId || !content || !rating) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const food = await prisma.food.findUnique({ where: { id: foodId } });

    if (!user || !food) {
      return res.status(404).json({ error: 'User or food not found' });
    }

    const review = await prisma.review.create({
      data: {
        content,
        rating,
        userId,
        foodId,
        storeId,
      },
    });

    res.status(200).json(review);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Failed to create review' });
  }
});

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({
      include: {
        user: true,
        food: true,
        store: true,
      },
    });

    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// Get a single review
router.get('/:id', async (req, res) => {
  const reviewId = parseInt(req.params.id);

  try {
    const review = await prisma.review.findUnique({
      where: { id: reviewId },
      include: {
        user: true,
        food: true,
        store: true,
      },
    });

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.status(200).json(review);
  } catch (error) {
    console.error('Error fetching review:', error);
    res.status(500).json({ error: 'Failed to fetch review' });
  }
});

// Update a review
router.patch('/:id', async (req, res) => {
  const reviewId = parseInt(req.params.id);
  const { content, rating } = req.body;

  if (!content && !rating) {
    return res.status(400).json({ error: 'Nothing to update' });
  }

  try {
    const review = await prisma.review.findUnique({ where: { id: reviewId } });

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    const updatedReview = await prisma.review.update({
      where: { id: reviewId },
      data: {
        content,
        rating,
      },
    });

    res.status(200).json(updatedReview);
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({ error: 'Failed to update review' });
  }
});

// Delete a review
router.delete('/:id', async (req, res) => {
  const reviewId = parseInt(req.params.id);

  try {
    const review = await prisma.review.findUnique({ where: { id: reviewId } });

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    await prisma.review.delete({ where: { id: reviewId } });

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Failed to delete review' });
  }
});

export default router;
