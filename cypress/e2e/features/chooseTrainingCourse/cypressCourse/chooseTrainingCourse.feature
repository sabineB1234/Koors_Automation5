Feature: student choose training courses 
    As a student, I want to choose a course  

Background: Successful director Login
    Given I am on the director login page
    When I enter email qa+uptotestg2@koors.io and password 123456789SF
    And I click on the login button
    And I am on the Activity page
    Then I click on add formation button
    
@vchooseAllTrainingByProfesor
Scenario: Choosing training course by profesor 
    When I click on dropdown list button
    And I choose uptoTest profesor
    And I verify name course cypress
    And I click on cypress course 
    Then I verify I am on cypress page course

@chooseAllTrainingBySearchField
Scenario: Choosing training course by search field
    When I fill name course in search input cypress and click
    And I verify statut cypress course À valider
    And I verify name course cypress
    And I click on cypress course 
    Then I verify I am on cypress page course

@chooseTRainingCourseAValider
Scenario: Choosing training course a valider 
    When I click on formation À valider button
    Then I verify the text Aucune formation en ligne.
