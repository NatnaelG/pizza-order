import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
// import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

Given("A logged in user is in the {string} page", async function (path) {
  this.path = path;
  await this.page.goto(`https://pizza-order-sepia.vercel.app/${path}`);
});

When("The user orders a menu with the specified quantity and toppings", async function () {
  await this.page
    .locator(
      `text="Order"`
    )
    .click();
});

Then("The user should see a success modal", async function () {
  await this.page.waitForURL(`https://pizza-order-sepia.vercel.app/`);
});

// Then("The user should be redirected to {string} page", async function (path) {
//   await this.page.waitForURL(`https://pizza-order-sepia.vercel.app/${path}`);
// });
