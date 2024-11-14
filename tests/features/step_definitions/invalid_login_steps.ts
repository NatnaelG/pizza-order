import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

When(
  "The user trys to log in with invaild credentails with {string} and {string}",
  async function (email, password) {
    await this.page.fill("input#email", email);
    await this.page.fill("input#password", password);

    await this.page.locator("button#Login").click();
  }
);

Then("An error message must be displayed", async function () {
  const locator = await this.page.locator(`[data-id="error"]`);
  const _text = await locator.innerText();

  const count = await locator.count();

  expect(count).toBeGreaterThan(0);
});
