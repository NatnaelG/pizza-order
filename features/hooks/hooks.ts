import { After, Before } from "@cucumber/cucumber";
import chromedriver from "chromedriver";
import { Builder, Capabilities } from "selenium-webdriver";

console.log("to use chromedriver", chromedriver);

const capabilities = Capabilities.chrome();
capabilities.set("chromeoptions", { w3c: false });

Before(function () {
  this.driver = new Builder().withCapabilities(capabilities).build();
  // console.log("In the Before function");
});

// After(async function () {
// //   await this.driver.quit();
// });
After(async function () {
  // if (scenario.result.status === "FAILED") {
  //   const world = this.attach;
  //   console.log("test this", this, world.attach);
  //   console.log("scenario test status", scenario.result.status);
  //   await this.driver
  //     .takeScreenshot()
  //     .then(function (screenShot, error) {
  //       if (!error) {
  //         console.log("about to be attached test this", world);
  //         // console.log("in side attach ", screenShot)
  //         world(screenShot, "image/png");
  //         // await fs.writeFileSync('./image.png', screenShot, 'base64');
  //       }
  //     });
  // }

    await this.driver.quit();
});
