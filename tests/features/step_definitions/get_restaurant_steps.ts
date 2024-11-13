import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { getRestaurants } from "../../../src/lib/restaurant/restaurant.ts";
import assert from "assert";

setDefaultTimeout(60 * 1000);

Given("The user is on the Homepage", async function () {
  this.restaurants = await getRestaurants();
});

Then(
  "An array of restaurants or {string} is returned",
  function (failedMessage) {
    assert(
      (Array.isArray(this.restaurants) && this.restaurants.length < 7) ||
        this.restaurants === failedMessage,
      "Get restaurant didn't act as expected "
    );
  }
);
