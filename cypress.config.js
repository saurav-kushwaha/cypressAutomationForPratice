const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    // set global environment variables
    "url":"https://rahulshettyacademy.com/angularpractice/"
  },
});
