import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const userId = req.user?.id;
  const { name, streetNumber, streetName, city, zipcode, country } = req.body;

  if (!name || !streetName || !city || !zipcode || !country) {
    return res.status(400).json({ error: 'All fields are required (name, address)' });
  }

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized: User not logged in' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Create the location
    const location = await prisma.location.create({
      data: {
        streetNumber,
        streetName,
        city,
        zipcode,
        country,
      },
    });

    // Create store with the user as the owner and linked location
    const store = await prisma.store.create({
      data: {
        name,
        ownerId: userId,
        locationId: location.id,  // Use locationId directly instead of storeId
      },
    });

    res.status(200).json(store);
  } catch (error) {
    console.error('Error creating store:', error);
    res.status(500).json({ error: 'Failed to create store' });
  }
});


// Get all stores for the authenticated user
router.get('/', async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized: User not logged in' });
  }

  try {
    const stores = await prisma.store.findMany({
      where: { ownerId: userId },
      include: { location: true },
    });

    if (!stores.length) {
      return res.status(404).json({ error: 'No stores found for this user' });
    }

    res.status(200).json(stores);
  } catch (error) {
    console.error('Error fetching stores:', error);
    res.status(500).json({ error: 'Failed to fetch stores' });
  }
});


  // Get a specific store by ID
  router.get('/:id', async (req, res) => {
    const userId = req.user?.id;
    const storeId = parseInt(req.params.id);
  
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: User not logged in' });
    }
  
    try {
      const store = await prisma.store.findUnique({
        where: { id: storeId },
        include: { location: true },
      });
  
      if (!store || store.ownerId !== userId) {
        return res.status(404).json({ error: 'Store not found or you are not the owner' });
      }
  
      res.status(200).json(store);
    } catch (error) {
      console.error('Error fetching store:', error);
      res.status(500).json({ error: 'Failed to fetch store' });
    }
  });
  

  // Update store by ID
  router.put('/:id', async (req, res) => {
    const userId = req.user?.id;
    const storeId = parseInt(req.params.id);
    const { name, streetNumber, streetName, city, zipcode, country } = req.body;
  
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: User not logged in' });
    }
  
    try {
      const store = await prisma.store.findUnique({
        where: { id: storeId },
      });
  
      if (!store || store.ownerId !== userId) {
        return res.status(404).json({ error: 'Store not found or you are not the owner' });
      }
  
      // Update the location if necessary
      const updatedLocation = await prisma.location.update({
        where: { id: store.locationId },
        data: {
          streetNumber,
          streetName,
          city,
          zipcode,
          country,
        },
      });
  
      const updatedStore = await prisma.store.update({
        where: { id: storeId },
        data: {
          name,
          locationId: updatedLocation.id, // Link updated location
        },
      });
  
      res.status(200).json(updatedStore);
    } catch (error) {
      console.error('Error updating store:', error);
      res.status(500).json({ error: 'Failed to update store' });
    }
  });

  
  router.patch('/:id', async (req, res) => {
    const userId = req.user?.id;
    const storeId = parseInt(req.params.id);
    const { name, streetNumber, streetName, city, zipcode, country } = req.body;
  
    if (!name && !streetName && !city && !zipcode && !country) {
      return res.status(400).json({ error: 'At least one field (name or address) must be provided to update the store' });
    }
  
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: User not logged in' });
    }
  
    try {
      const store = await prisma.store.findUnique({
        where: { id: storeId },
      });
  
      if (!store || store.ownerId !== userId) {
        return res.status(404).json({ error: 'Store not found or you are not the owner' });
      }
  
      let updatedLocation;
      if (streetNumber || streetName || city || zipcode || country) {
        updatedLocation = await prisma.location.update({
          where: { id: store.locationId },
          data: {
            streetNumber: streetNumber || store.location.streetNumber,
            streetName: streetName || store.location.streetName,
            city: city || store.location.city,
            zipcode: zipcode || store.location.zipcode,
            country: country || store.location.country,
          },
        });
      }
  
      const updatedStore = await prisma.store.update({
        where: { id: storeId },
        data: {
          name: name || store.name,
          locationId: updatedLocation ? updatedLocation.id : store.locationId,
        },
      });
  
      res.status(200).json(updatedStore);
    } catch (error) {
      console.error('Error updating store:', error);
      res.status(500).json({ error: 'Failed to update store' });
    }
  });
  
  
  router.delete('/:id', async (req, res) => {
    const userId = req.user?.id;
    const storeId = parseInt(req.params.id, 10);
  
    if (isNaN(storeId)) {
      return res.status(400).json({ error: 'Invalid store ID' });
    }
  
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: User not logged in' });
    }
  
    try {
      const store = await prisma.store.findUnique({
        where: { id: storeId },
      });
  
      if (!store || store.ownerId !== userId) {
        return res.status(404).json({ error: 'Store not found or you are not the owner' });
      }
  
      await prisma.$transaction([
        prisma.food.deleteMany({ where: { storeId } }),
        prisma.review.deleteMany({ where: { storeId } }),
        prisma.storeHours.deleteMany({ where: { storeId } }),
        prisma.store.delete({ where: { id: storeId } }),
      ]);
  
      res.status(200).json({ message: 'Store and related data deleted successfully' });
    } catch (error) {
      console.error('Error deleting store:', error);
      res.status(500).json({ error: 'Failed to delete store' });
    }
  });
  
  
  
export default router;
