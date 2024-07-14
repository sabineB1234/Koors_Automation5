Feature: Director adds new student with valid and invalid credentials
    As a director, I want to add a new student 

Background: Successful director Login
    Given I am on the director login page
    When I enter email qa+uptotestg2@koors.io and password 123456789SF
    And I click on the login button
    Then I am on the Activity page
    When I click on the student button
    #And I verify number Étudiants 20 on students page 
    And I click on add a student button
    #Then I click on invite button 
    When I click on import a list button

@validAddStudentsFile 
Scenario: Successful students file add
   # And I verify Importer la liste des étudiants import students file text is visible
    And I click on select a file button and downloard a file 
    And I click on checkbox 
    And I click on continue button 
    And I click on send invitations button 
    And I click on confirm and send button 
    Then I verify I am on student page 

@InvalidAddStudentsFile
Scenario: Unsuccessful students file add
    And I click on continue button
    And I verify Vous devez ajouter votre fichier Excel error add file text is visible
   #And I verify J'ai le consentement des utilisateurs enregistrés dans ce fichier, selon la loi de protection des données personnelles du pays en vigueur.  consent text is visible
    And I click on cancil button  
    Then I verify I am on student page

@EmptydAddStudentsFile
Scenario: Unsuccessful students add with empty file 
    #And I verify Importer la liste des étudiants import students file text is visible
    And I click on select file button and downloard an empty file 
    And I click on checkbox 
    And I click on continue button 
    And I click on send invitations button 
    And I click on confirm and send button 
    Then I verify I am on student page 

@CancildAddStudentsFile
Scenario: Cancil students file add
    #And I click on select a file button and downloard a file 
    And I click on checkbox 
    And I click on continue button 
    And I click on annuler button to cancil 
    #And I click on cancil button   
   #And I verify number on students Étudiants 20 on stuents page 
    Then I verify I am on student page