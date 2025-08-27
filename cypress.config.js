const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    video: true,
    videoUploadOnPasses: true,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mocha-junit-reporter, spec",
      mochaJunitReporterReporterOptions: {
        mochaFile: "cypress/results/junit/results-[hash].xml",
        toConsole: true,
      }
    }
  },
});