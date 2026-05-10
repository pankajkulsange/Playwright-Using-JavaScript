import { test, expect } from "@playwright/test";

test.only("Locators Test Scenarios", async ({ page }) => {
  await page.goto("https://pankaj-kulsange.vercel.app/");
  await page.getByRole("button", { name: "Hire Me" }).first().click();
  console.log("test");
  console.log(await page.locator("div h1 span").textContent());
  // manually add wait because allTextContents method don't have the  in build wait
  await page.locator("button.px-8").first().waitFor();
  const buttonTitles = await page.locator("button.px-8").allTextContents();
  console.log(buttonTitles);
});
