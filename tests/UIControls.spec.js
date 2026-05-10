import { test } from "@playwright/test";

test.only("UI Controls Test Case", async ({ page }) => {
  // Navigate to application
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  // storing paths in const
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const dropDown = page.locator("select.form-control");
  await dropDown.selectOption("consult");
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  await page.pause();
});
