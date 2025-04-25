import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const userId = req.user?.id; // This should come from your auth middleware
  const { name, streetNumber, streetName, city, zipcode, country } = req.body;

  // 400 Bad Request: Missing required fields or invalid data
  if (!name || !streetName || !city || !zipcode || !country) {
    return res.status(400).json({ error: 'All fields are required (name, address)' });
  }

  // 401 Unauthorized: User not logged in
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized: User not logged in' });
  }

  try {
    // Check if the user exists (404 Not Found if not)
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create location
    const location = await prisma.location.create({
      data: {
        streetNumber,
        streetName,
        city,
        zipcode,
        country,
      },
    });

    // Create store linked to user and location
    const store = await prisma.store.create({
      data: {
        name,
        ownerId: userId,
        location: {
          connect: { id: location.id }
        },
      },
    });

    // 200 OK: Successfully created the store
    res.status(200).json(store);

  } catch (error) {
    console.error('Error creating store:', error);
    // 500 Internal Server Error: Something went wrong on the server side
    res.status(500).json({ error: 'Failed to create store' });
  }
});

// Get all stores for the authenticated user
router.get('/',  async (req, res) => {
    const userId = req.user?.id;
  
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: User not logged in' });
    }
  
    try {
      const stores = await prisma.store.findMany({
        where: {
          ownerId: userId, // Get only stores belonging to the logged-in user
        },
        include: {
          location: true, // Include location details
        },
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
router.get('/:id',  async (req, res) => {
    const userId = req.user?.id;
    const storeId = parseInt(req.params.id);
  
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: User not logged in' });
    }
  
    try {
      const store = await prisma.store.findUnique({
        where: {
          id: storeId,
        },
        include: {
          location: true, // Include location details
        },
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
router.put('/:id',  async (req, res) => {
    const userId = req.user?.id;
    const storeId = parseInt(req.params.id);
    const { name, streetNumber, streetName, city, zipcode, country } = req.body;
  
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: User not logged in' });
    }
  
    try {
      // Check if the store exists and if the user is the owner
      const store = await prisma.store.findUnique({
        where: {
          id: storeId,
        },
      });
  
      if (!store || store.ownerId !== userId) {
        return res.status(404).json({ error: 'Store not found or you are not the owner' });
      }
  
      // Update location
      const location = await prisma.location.update({
        where: {
          id: store.locationId,
        },
        data: {
          streetNumber,
          streetName,
          city,
          zipcode,
          country,
        },
      });
  
      // Update store
      const updatedStore = await prisma.store.update({
        where: {
          id: storeId,
        },
        data: {
          name,
          locationId: location.id, // Make sure the store is still linked to the correct location
        },
      });
  
      res.status(200).json(updatedStore);
    } catch (error) {
      console.error('Error updating store:', error);
      res.status(500).json({ error: 'Failed to update store' });
    }
  });
  router.patch('/:id', async (req, res) => {
    const userId = req.user?.id; // This should come from your auth middleware
    const storeId = parseInt(req.params.id);  // Store ID from URL
    const { name, streetNumber, streetName, city, zipcode, country } = req.body;
  
    // 400 Bad Request: Missing required fields or invalid data
    if (!name && !streetName && !city && !zipcode && !country) {
      return res.status(400).json({ error: 'At least one field (name or address) must be provided to update the store' });
    }
  
    // 401 Unauthorized: User not logged in
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: User not logged in' });
    }
  
    try {
      // Check if the store exists and if the user is the owner
      const store = await prisma.store.findUnique({
        where: {
          id: storeId,
        },
      });
  
      if (!store || store.ownerId !== userId) {
        // 404 Not Found or Unauthorized: Store not found or user is not the owner
        return res.status(404).json({ error: 'Store not found or you are not the owner' });
      }
  
      // Update location if provided (only update fields that are given)
      let updatedLocation = undefined;
      if (streetNumber || streetName || city || zipcode || country) {
        updatedLocation = await prisma.location.update({
          where: {
            id: store.locationId,
          },
          data: {
            streetNumber: streetNumber || store.location.streetNumber,
            streetName: streetName || store.location.streetName,
            city: city || store.location.city,
            zipcode: zipcode || store.location.zipcode,
            country: country || store.location.country,
          },
        });
      }
  
      // Update store with new name and possibly new locationId
      const updatedStore = await prisma.store.update({
        where: {
          id: storeId,
        },
        data: {
          name: name || store.name,  // Only update if name is provided
          locationId: updatedLocation ? updatedLocation.id : store.locationId,  // Only update if location is changed
        },
      });
  
      // 200 OK: Successfully updated the store
      res.status(200).json(updatedStore);
    } catch (error) {
      console.error('Error updating store:', error);
      // 500 Internal Server Error: Something went wrong on the server side
      res.status(500).json({ error: 'Failed to update store' });
    }
  });
  
  // Delete store by ID
router.delete('/:id',  async (req, res) => {
    const userId = req.user?.id;
    const storeId = parseInt(req.params.id);
  
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: User not logged in' });
    }
  
    try {
      // Check if the store exists and if the user is the owner
      const store = await prisma.store.findUnique({
        where: {
          id: storeId,
        },
      });
  
      if (!store || store.ownerId !== userId) {
        return res.status(404).json({ error: 'Store not found or you are not the owner' });
      }
  
      // Delete the store
      await prisma.store.delete({
        where: {
          id: storeId,
        },
      });
  
      res.status(200).json({ message: 'Store deleted successfully' });
    } catch (error) {
      console.error('Error deleting store:', error);
      res.status(500).json({ error: 'Failed to delete store' });
    }
  });
  
export default router;
