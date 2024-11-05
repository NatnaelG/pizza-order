import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {
  By,
  //  until
} from "selenium-webdriver";
import assert from "assert";

// import chromedriver from "chromedriver";
// import { Builder, Capabilities } from "selenium-webdriver";

// console.log("to use chromedriver", chromedriver);

setDefaultTimeout(60 * 1000);

Given("A user is on the login page", async function () {
  // const capabilities = Capabilities.chrome();
  // capabilities.set("chromeoptions", { w3c: false });

  //   this.driver = new Builder().withCapabilities(capabilities).build();
  await this.driver.get("https://pizza-order-sepia.vercel.app/login");
  // await this.driver.get("http://localhost:3000/login");
});

When("A user logs in with valid credentails", async function () {
  await this.driver.findElement(By.id("email")).sendKeys("jet@gmail.com");
  await this.driver.findElement(By.id("password")).sendKeys("123456");
  await this.driver.findElement(By.id("Login")).click();
  // await this.driver.manage().setTimeouts({ implicit: 2000 });
});

Then(
  "The user should be redirected to homepage",
  // { timeout: 60 * 10000 },
  async function () {
    await this.driver.manage().setTimeouts({ implicit: 5000 });

    const LogOutText = await this.driver.findElement(By.id("LogOut")).getText();
    const currentUrl = await this.driver.getCurrentUrl();
    console.log("test Text", LogOutText, currentUrl);
    assert(
      // currentUrl === "http://localhost:3000/",
      currentUrl === "https://pizza-order-sepia.vercel.app/",
      "User Still not logged in!"
    );
  }
);
