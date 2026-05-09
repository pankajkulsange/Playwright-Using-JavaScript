const config = {
  testDir: "./tests", // path or tests stored in folder
  reporter: "html", // html report generator
  timeout: 40 * 1000, // global wait overriding from 30 sec to 40 sec to load web elements/ components
  expect: {
    timeout: 40 * 1000, // wait for assertion validation wait overriding
  },
  use: {
    browserName: "chromium", // browser name: e.g. firefox, webkit, chromium, msedge
    headless: false, // by default playwright execute test in headless mode - to run in headless mode just make headless: true,
  },
};
module.exports = config; // wrapping everything in a variable and it will be available across the project
