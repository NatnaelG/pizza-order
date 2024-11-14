import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
// import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

Given("A non logged in user is in the homepage", async function () {
  await this.page.goto(`https://pizza-order-sepia.vercel.app/`);
});

When(
  "The user attempts to order a menu",
  async function () {
    await this.page.locator(`button[data-id="order"]`).click();
  }
);

Then("The user should be redirected to login page", async function () {
  await this.page.waitForURL("https://pizza-order-sepia.vercel.app/");
});
