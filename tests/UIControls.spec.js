import { expect, test } from "@playwright/test";

test.only("UI Controls Test Case", async ({ page }) => {
  // Navigate to application
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  // storing paths in const
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  // handling static dropdown
  const dropDown = page.locator("select.form-control");
  await dropDown.selectOption("consult");
  //handling radio button
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  console.log(await page.locator(".radiotextsty").last().isChecked());
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
});
