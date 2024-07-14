    @login
    Feature: director Login with valid and invalid credentials
    As a user  I want to log in to the website So that I can access to my account

    Background:
        Given I am on the director login page

    @validlogin
    Scenario: Successful director Login
        When I enter email qa+uptotestg2@koors.io and password 123456789SF
        And I click on the login button
        Then I am on Activity page

    @multipleInvalidLogin
    Scenario Outline: Login with multiple users
        When I enter email <Email> and password <Password>
        And I click on the login button
        Then under the fields <fields> I should see the messsage error <ErrorMessage>
        
        Examples:
            | Email                    | Password     | fields         | ErrorMessage                                     |
            | qa+uptotestgge2@koors.io | 12345678SF   | Email          | Le login et le mot de passe ne correspondent pas |
            | qa+uptotestg2@koors.io   | {BACKSPACE}  | Password       | E-mail ou mot de passe incorrecte                |
            | qa+ugfg2@koors.io        | 123456789SF  | Email          | Le login et le mot de passe ne correspondent pas |
            | qa+uptotestg2@koors.io   | 123456eh789SF| Password       | E-mail ou mot de passe incorrecte                |
            | {BACKSPACE}              | 123456789SF  | Email          | E-mail ou mot de passe incorrecte                |
            | {BACKSPACE}              | {BACKSPACE}  | Password       | E-mail ou mot de passe incorrecte                |