import { Given, When, Then } from "@cucumber/cucumber";
// const { Given, When, Then } = require("@cucumber/cucumber");
// import { getRestaurants } from "@/lib/restaurant/restaurant";

Given("The user is on the Homepage", function () {});

When(
  "The browser sends request to the server for restauratns",
  async function () {
    // this.restaurants = await getRestaurants();
  }
);

Then("An array of restaurants or an empty array is returned", function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Restaurants", this.restaurants);
  return "pending";
});
