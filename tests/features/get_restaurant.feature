@get_restaurant
Feature: Get Restauratns

    Scenario: The user lands on the homepage

        Given The user is on the Homepage
        Then An array of restaurants or "Something went wrong." is returned