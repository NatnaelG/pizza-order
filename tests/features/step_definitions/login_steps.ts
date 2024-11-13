import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

Given("A user is on the login page", async function () {
  await this.page.goto(`https://pizza-order-sepia.vercel.app/login`);
  // await this.page.goto(`http://localhost:3000/login`);
});

When("A user logs in with valid credentails", async function () {
  await this.page.fill("input#email", "jet@gmail.com");
  await this.page.fill("input#password", "123456");

  await this.page.locator("button#Login").click();
  await this.page.waitForURL("https://pizza-order-sepia.vercel.app/");
});

Then("The user should be redirected to homepage", async function () {
  expect(this.page.url()).toBe("https://pizza-order-sepia.vercel.app/");
});
