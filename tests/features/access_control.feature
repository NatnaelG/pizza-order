@web @accessContorl
Feature: Access Control

    @clickOrderButton
    Scenario: A non logged user attempts to order by clicking order button

        Given A non logged in user is in the homepage
        When The user attempts to order a menu
        Then The user should be redirected to "login" page

    @urlQuery
    Scenario: A non logged user attempts order item page using query

        Given A non logged in user enters "https://pizza-order-sepia.vercel.app/order-item/"
        Then The user should be redirected to "login" page