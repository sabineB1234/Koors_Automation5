@logout 
Feature: Logout User 
as a user I want to delete my account automation  

@validlogout
Scenario: logout user account 
Given I am on the director login page
When I enter email qa+uptotestg2@koors.io and password 123456789SF
And I click on the login button
Then I am on Activity page
When I click on the checkbox button
And  I click on the log out button
Then I verify that the user is navigated to login page