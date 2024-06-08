/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // Use this configuration option to add custom reporters to Jest
  reporters: ["default", ["jest-html-reporters", {
    pageTitle: "Test Report",
    filename: "jest-test-report.html"
  }]],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)",
    // "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};

export default config;
