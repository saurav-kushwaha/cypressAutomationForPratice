const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gk4bx6',
  reporter: 'mochawesome',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    // set global environment variables
    "url":"https://rahulshettyacademy.com/angularpractice/"
  },
  // it used to run the failed test cases again in screenshot can see 
  retries: {
     runMode: 1 },
});
//npx cypress run --record --key 293dbe56-1cb2-4ac9-bd03-38e4f99271da