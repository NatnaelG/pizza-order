@web @accessContorl
Feature: Access Control

    Scenario: A non logged user attempts to order

        Given A non logged in user is in the homepage
        When The user attempts to order a menu
        Then The user should be redirected to login page