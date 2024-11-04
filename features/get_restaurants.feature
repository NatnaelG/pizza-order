@get_restaurant
Feature: Get Restauratns

    Scenario: The user lands on the homepage

        Given The user is on the Homepage
        When The browser sends request to the server for restauratns
        Then An array of restaurants or an empty array is returned