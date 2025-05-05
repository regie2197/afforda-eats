<<<<<<< HEAD
export default {
  e2e: {
    setupNodeEvents(on, config) {
      supportFile: 'cypress/support/e2e.js'
      // implement node event listeners here
    },
  },
};
=======
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
>>>>>>> c4b753eb502f8c8970d824f0b52f9447d5d5fb6c
