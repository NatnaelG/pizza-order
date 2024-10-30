import { Given, When, Then } from '@cucumber/cucumber'
// const { Given, When, Then } = require("@cucumber/cucumber");

Given("Lucy is located {int} metres from Sean", function (distance) {
  // Write code here that turns the phrase above into concrete actions
  console.log(distance)
  return "pending";
});

When("Sean shouts {string}", function (string) {
  // Write code here that turns the phrase above into concrete actions
  console.log(string)
  return "pending";
});

Then("Lucy hears Sean's message", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
