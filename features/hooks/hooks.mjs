import { After, Before } from "@cucumber/cucumber";
import chromedriver from "chromedriver";
import { Builder, Capabilities } from "selenium-webdriver";


console.log("to use chromedriver", chromedriver)

const capabilities = Capabilities.chrome();
capabilities.set("chromeoptions", { w3c: false });

Before(function () {
  this.driver = new Builder().withCapabilities(capabilities).build();
  console.log("In the Before function");
});

After(async function () {
//   await this.driver.quit();
});
