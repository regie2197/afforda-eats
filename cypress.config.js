import { defineConfig } from 'cypress'

export default defineConfig({
  retries: 5,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
