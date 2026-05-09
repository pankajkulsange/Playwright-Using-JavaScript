// importing test from @playwright/test
const { test, expect } = require("@playwright/test");

// create test cases using test method
// My First Playwright Test - Test Case Name
// ()=> - arrow/ anonomus fucntion - make code lighter
// async - javascript do not execute code in sequence, using async await we can execute code step by step
// await - wait for to complete the code execution then only proceed forward
// browser, page - global fixers - globally available - we define browser info in test runner file (playwright.config.js)
test("My First Playwright Test", async ({ browser }) => {
  // create context : e.g. chrome - cookies, plugins, proxy (By pass login scenario)
  // creating new instance of browser context - you can inject cookies, proxy, plugins
  const context = await browser.newContext();
  // open new page in browser
  const page = await context.newPage();
  // navigate to url
  await page.goto("https://pankaj-kulsange.vercel.app/");
  // get title
  const title = await page.title();
  console.log(title);
  // assertion title by expect (default assertion): Pankaj Kulsange - QA Automation Engineer | Automation Testing Expert
  await expect(page).toHaveTitle(
    "Pankaj Kulsange - QA Automation Engineer | Automation Testing Expert",
  );
});
// if you don't want to inject any cookies/ plugins/ proxies the you can use page global fixer directly
test("My Second Playwright Test", async ({ page }) => {
  await page.goto("https://pankaj-kulsange.vercel.app/#case-studies-projects");
});
