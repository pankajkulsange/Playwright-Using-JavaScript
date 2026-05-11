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
  // handling radio button
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  // validating radion button - assertion
  await expect(await page.locator(".radiotextsty").last()).toBeChecked();
  console.log(await page.locator(".radiotextsty").last().isChecked());
  // handling checkbox
  await page.locator("#terms").click();
  // assertion for radio button
  await expect(await page.locator("#terms")).toBeChecked();
  // uncheck checkbox
  await page.locator("#terms").uncheck();
  // assertion for radio button uncheck
  await expect(await page.locator("#terms").isChecked()).toBeFalsy();
});
