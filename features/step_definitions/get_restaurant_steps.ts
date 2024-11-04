import { Given, Then } from "@cucumber/cucumber";
import { getRestaurants } from "../../src/lib/restaurant/restaurant.ts";
import assert from "assert";

Given("The user is on the Homepage", async function () {
  this.restaurants = await getRestaurants();
});

Then(
  "An array of restaurants or {string} is returned",
  function (failedMessage) {
    assert(
      (typeof this.restaurants === "object" && this.restaurants.length > 0) ||
        this.restaurants === failedMessage,
      "Get restaurant didn't act as expected "
    );
    console.log("response", this.restaurants);
  }
);
