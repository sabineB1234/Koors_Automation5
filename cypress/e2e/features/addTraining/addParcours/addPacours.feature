Feature: Add training 
    As a professor , I want to add a course  

Background: Successful director Login
    Given I am on the director login page
    When I enter email qa+uptotestg2@koors.io and password 123456789SF
    And I click on the login button
    And I am on the Activity page
    #When I click on the checkbox button
    And I click on professeur button 
    Then I click on add formation button

@SuccessfulAddCourse
Scenario: Choosing training course by profesor 
    When I click on nouvelle formation button