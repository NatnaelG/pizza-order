import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

When(
  "The user trys to log in with invaild credentails with {string} and {string}",
  async function (email, password) {
    await this.page.fill("input#email", email);
    await this.page.fill("input#password", password);

    await this.page.locator("button#Login").click();

    await new Promise((resolve) => setTimeout(resolve, 6000));
    await this.page.locator("text=SUBMITTING");
    
  }
);

Then("An error message must be displayed", async function () {
  await this.page.locator("text=LOGIN");
  // const locator = await this.page.locator(`p#LogOut`);
  const locator = await this.page.locator(`[data-id="error"]`);
  // const text = await locator.innerText();

  const count = await locator.count();
  console.log("count", count)
  
  expect(count).toBeGreaterThan(0);
});
