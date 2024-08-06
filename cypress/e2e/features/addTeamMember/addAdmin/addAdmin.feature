Feature: Add admin memeber
    As a director, I want to add an admin memeber 

Background: Successful director Login
    Given I am on the director login page
    When I enter email qa+uptotestg2@koors.io and password 123456789SF
    And I click on the login button
    And I am on the Activity page
    #When I click on the checkbox button
    And I click on professeur button 
    Then I click on add formation button

@SuccessfulAddAdminMember
Scenario: add succecful admin memeber 
    When I click on equipe button
    And I click on inviter un memebre button
    And I click on administrateur button
    And I fill e-mail admin 
    And I click on valider button on admin popup
    And I click on ok button 
    Then I verify I am on equipe page 

@InvalidAddAdminMember
Scenario: add invalid admin memeber 
    When I click on equipe button
    And I click on inviter un memebre button
    And I click on administrateur button
    And I fill invalid e-mail admin 
    And I verify error message equal to Veuillez saisir une adresse email valide.
    And I click on annuler buton on admin popup 
    Then I verify I am on equipe page 
