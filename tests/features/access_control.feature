@web @accessContorl
Feature: Access Control

    @clickOrderButton
    Scenario: A non logged in user attempts to order by clicking order button

        Given A non logged in user is in the homepage
        When The user attempts to order a menu
        Then The user should be redirected to "login" page

    @urlQuery
    Scenario: A non logged in user attempts order item page using query

        Given A non logged in user enters "https://pizza-order-sepia.vercel.app/order-item/5a2439a1-a22e-4cd5-8f22-47b3a5057a22"
        Then The user should be redirected to "login" page


    @loggedIn @clickOrderButton
    Scenario: A logged in user attempts to order by clicking order button

        Given A logged in user is in the homepage
        When The user attempts to order a menu
        Then The user should be redirected to "order-item/5a2439a1-a22e-4cd5-8f22-47b3a5057a22" page

    @loggedIn @urlQuery
    Scenario: A logged in user attempts order item page using query

        Given A logged in user enters "https://pizza-order-sepia.vercel.app/order-item/5a2439a1-a22e-4cd5-8f22-47b3a5057a22"
        Then The user should be redirected to "order-item/5a2439a1-a22e-4cd5-8f22-47b3a5057a22" page