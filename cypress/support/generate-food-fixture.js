import { createFood } from './user-faker.utils.js';
import fs from 'fs';

// Generate food data using the createFood function
const foodData = createFood();

// Define the path for the fixture file
const fixturePath = 'cypress/fixtures/foodData.json';

// Write the generated food data to the fixture file
fs.writeFileSync(fixturePath, JSON.stringify(foodData, null, 2), 'utf-8');

console.log(`Food fixture file has been generated at: ${fixturePath}`);