import { test, expect } from "@playwright/test";

test("Locators Test Scenarios", async ({ page }) => {
  await page.goto("https://pankaj-kulsange.vercel.app/");
  await page.getByRole("button", { name: "Hire Me" }).first().click();
  console.log("test");
  console.log(await page.locator("div h1 span").textContent());
  // manually add wait because allTextContents method don't have the  in build wait
  await page.locator("button.px-8").first().waitFor();
  const buttonTitles = await page.locator("button.px-8").allTextContents();
  console.log(buttonTitles);
});

test.only("@Web Client App login", async ({ page }) => {
  //js file- Login js, DashboardPage
  const email = "anshika@gmail.com";
  const productName = "zara coat 3";
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").type("Iamking@000");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
});
