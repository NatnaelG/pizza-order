@web @login
Feature: Login

    @validCredentials
    Scenario Outline: A user attempts login with correct credentails

        Given A user is on the "login" page
        When The user logs in with valid credentails with <email> and <password>

        Then The user should be redirected to homepage
        And "LOGOUT" button should be there

        Examples:
            | email              | password |
            | "jet@gmail.com"    | "123456" |
            # | "invaild@gmail.com" | "password" |
            | "jetres@gmail.com" | "123456" |

    @invalidCredentials
    Scenario Outline: A user attempts login with incorrect credentials

        Given A user is on the "login" page

        # | firstName | lastName | birthDate |

        # | Annie M. G. | Schmidt  | 1911-03-20 |
        # | Roald       | Dahl     | 1916-09-13 |
        # | Astrid      | Lindgren | 1907-11-14 |
        When The user trys to log in with invaild credentails with <email> and <password>
        Then An error message must be displayed

        Examples:
            | email               | password   |
            | "invaild@gmail.com" | "password" |
            # | "jetres@gmail.com"  | "123456"   |
            | "jet@gmail.com"     | "1234"     |