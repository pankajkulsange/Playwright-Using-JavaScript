import { expect, test } from "@playwright/test";

test.only("UI Controls Test Case", async ({ page }) => {
  // Navigate to application
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  // storing paths in const
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const documentLink = page.locator("[href*='documents-request']");
  // handling static dropdown
  const dropDown = page.locator("select.form-control");
  await dropDown.selectOption("consult");
  //handling radio button
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  console.log(await page.locator(".radiotextsty").last().isChecked());
  // action performed outside that's why await used outside not inside
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  // action performed inside that's why await used inside not outside
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  // assertion - validating if have the attribute
  await expect(documentLink).toHaveAttribute("class", "blinkingText");
});
test.only("Child windows handling", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = await page.locator("#username");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[href*='documents-request']");
  const [newPage] = await Promise.all([
    context.waitForEvent("page"), // listen for any new page, stages of promise (pending, rejected, fulfilled)
    documentLink.click(), //newe page is open
  ]);
  const text = await newPage.locator(".red").textContent();
  console.log(text);
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0];
  console.log(domain);
  await page.locator("#username").type(domain);
  await page.pause();
  console.log(await page.locator("#username").inputValue());
});
