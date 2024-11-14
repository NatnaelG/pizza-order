@login
Feature: Login

    @web
    Scenario: A user attempts login with correct credentails

        Given A user is on the "login" page
        When A user logs in with valid credentails
        Then The user should be redirected to homepage
        And "LOGOUT" button should be there