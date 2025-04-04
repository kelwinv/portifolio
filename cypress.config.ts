import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: "test/cypress/fixtures",
  screenshotsFolder: "test/cypress/screenshots",
  videosFolder: "test/cypress/videos",
  downloadsFolder: "test/cypress/downloads",
  supportFolder: "test/cypress/support",
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    supportFile: "test/cypress/support/component.ts",
  },
  e2e: {
    specPattern: "test/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:3000",
    supportFile: "test/cypress/support/e2e.ts",
  },
});
