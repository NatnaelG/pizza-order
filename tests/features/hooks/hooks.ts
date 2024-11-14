import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
// import _chromedriver from "chromedriver";
// import { Builder, Capabilities } from "selenium-webdriver";

import { Browser, chromium } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let browser: Browser;

Before({ tags: "@web and not @loggedIn" }, async function () {
  browser = await chromium.launch({ headless: false, timeout: 20000 });
  const context = await browser.newContext();
  this.page = await context.newPage();
});

Before({ tags: "@web and @loggedIn" }, async function () {
  browser = await chromium.launch({ headless: false, timeout: 20000 });
  const context = await browser.newContext();
  this.page = await context.newPage();

  await this.page.goto(`https://pizza-order-sepia.vercel.app/login`);
  await this.page.fill("input#email", "jetres@gmail.com");
  await this.page.fill("input#password", "123456");

  await this.page.locator("button#Login").click();

  await this.page.waitForURL("https://pizza-order-sepia.vercel.app/");
});

After({ tags: "@web" }, async function () {
  await browser.close();
});
