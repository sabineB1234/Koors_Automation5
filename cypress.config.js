const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default



module.exports = defineConfig({
  pageLoadTimeout: 60000 ,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Koors / SlashUp',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: true,
    json: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('file:preprocessor', cucumber());
      on('task', {
        downloadFile({ url, directory, fileName, userAgent, cookies }) {
          return require('cypress-downloadfile/lib/downloadFile')(url, directory, fileName, userAgent, cookies);
        }
      });
    },
    specPattern: "cypress/e2e/features/**/*.feature",
    excludeSpecPattern: '**/*.{js,ts}',
  },
});

