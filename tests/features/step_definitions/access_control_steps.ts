import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
// import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

Given("A non logged in user is in the homepage", async function () {
  await this.page.goto(`https://pizza-order-sepia.vercel.app/`);
});

Given("A non logged in user enters {string}", async function (path) {
  await this.page.goto(`${path}`);
});

When("The user attempts to order a menu", async function () {
  await this.page
    .locator(
      `button[data-id="order 5a2439a1-a22e-4cd5-8f22-47b3a5057a22 Popular"]`
    )
    .click();
});

Then("The user should be redirected to {string} page", async function (path) {
  await this.page.waitForURL(`https://pizza-order-sepia.vercel.app/${path}`);
});
