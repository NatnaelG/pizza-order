@login
Feature: Login

    @web
    Scenario Outline: A user attempts login with correct credentails

        Given A user is on the "login" page
        When A user logs in with valid credentails with <email> and <password>

        Then The user should be redirected to homepage
        And "LOGOUT" button should be there

        Examples:
            | email              | password |
            | "jet@gmail.com"    | "123456" |
            | "jetres@gmail.com" | "123456" |