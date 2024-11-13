import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
// import _chromedriver from "chromedriver";
// import { Builder, Capabilities } from "selenium-webdriver";

import { Browser, chromium } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let browser: Browser;

Before({ tags: "@web" }, async function () {
  browser = await chromium.launch({ headless: false, timeout: 20000 });
  const context = await browser.newContext();
  this.page = await context.newPage();
});

After({ tags: "@web" }, async function () {
  await browser.close();
});
