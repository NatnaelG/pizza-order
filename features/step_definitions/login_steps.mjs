import { Given, When, Then } from "@cucumber/cucumber";
import { By } from "selenium-webdriver";
import assert from "assert";

Given("A user is on the login page", async function () {
  await this.driver.get("https://pizza-order-sepia.vercel.app/login");
});

When("A user logs in with valid credentails", async function () {
  await this.driver.findElement(By.id("email")).sendKeys("jet@gmail.com");
  await this.driver.findElement(By.id("password")).sendKeys("123456");
  await this.driver.findElement(By.id("Login")).click();
});

Then("The user should be redirected to homepage", async function () {
  let LogOutText = await this.driver.findElement(By.id("LogOut"));
  assert(LogOutText === "LogOut", "User Still not logged in!");
});
