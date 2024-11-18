import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

Given(
  "A user is on the {string} page",
  async function (
    path
    // dataTable: { rawTable: string[][] }
  ) {
    // let structuredData: {
    //   firstName: string[];
    // } | null = null;
    // dataTable.rawTable.map((row: string[], index: number) => {
    //   if (index === 0) {
    //     row.map((header: string) => {
    //       structuredData = {
    //         ...structuredData,
    //         [header as "firstName"]: [],
    //       };
    //     });
    //     return row;
    //   }
    //   row.map((data: string, dataIndex: number) => {
    //     const headerName: string = dataTable.rawTable[0][dataIndex];
    //     if (structuredData !== null && headerName in structuredData) {
    //       structuredData = {
    //         ...structuredData,
    //         [headerName]: [...structuredData[headerName as "firstName"], data],
    //       };
    //     }
    //   });
    //   return row;
    // });

    // console.log("structured data", structuredData);

    await this.page.goto(`https://pizza-order-sepia.vercel.app/${path}`);
    // await this.page.goto(`/login`);
    // await this.page.goto(`http://localhost:3000/login`);
  }
);

When(
  "The user logs in with valid credentails with {string} and {string}",
  async function (email, password) {
    await this.page.fill("input#email", email);
    await this.page.fill("input#password", password);

    await this.page.locator("button#Login").click();
  }
);

Then("The user should be redirected to homepage", async function () {
  await this.page.waitForURL("https://pizza-order-sepia.vercel.app/");
});

Then("{string} button should be there", async function (buttonText) {
  // const locator = await this.page.locator(`p#LogOut`);
  const locator = await this.page.locator(`text=LogOut`);
  const text = await locator.innerText();

  // const count = await locator.count();
  // expect(count).toBeGreaterThan(0);

  // await expect(locator).toHaveText("LogOut");
  expect(text).toBe(buttonText);
});
