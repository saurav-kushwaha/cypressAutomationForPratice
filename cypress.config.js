const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gk4bx6',
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
//npx cypress run --record --key 293dbe56-1cb2-4ac9-bd03-38e4f99271da