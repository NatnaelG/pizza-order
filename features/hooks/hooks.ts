import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import _chromedriver from "chromedriver";
import { Builder, Capabilities } from "selenium-webdriver";

setDefaultTimeout(60 * 1000);

const capabilities = Capabilities.chrome();
capabilities.set("chromeoptions", { w3c: false });

Before({ tags: "@web" }, function () {
  this.driver = new Builder().withCapabilities(capabilities).build();
});

After({ tags: "@web" }, async function () {
  await this.driver.quit();
});
