Feature: Director adds new student with valid and invalid credentials
    As a director, I want to add a new student 

Background: Successful director Login
    Given I am on the director login page
    When I enter email qa+uptotestg2@koors.io and password 123456789SF
    And I click on the login button
    Then I am on the Activity page
    When I click on student button
    And I click on add student button
    #Then I click on invite button 
    
@validAddStudent
Scenario: Successful student add
    When I fill credentials lastname student BOUDJELLAL and firstname student sabine and e-mail address student sabine.boudjellal1@gmail.com 
    And I click on inviter button 
    And verify message succes Invitation envoyée avec succès
    And I click on retour button 
    Then I verify I am on the student page
    
@cancelAddStudent
Scenario: Cancel student add
    #When I fill the lastname student BOUDJELLAL the firstname student sabine and the e-mail address student sabine.boudjellal1@gmail.com to cancel
    And I click on cancel button 
    Then I verify I am on the student page
    
@deleteAddStudent
Scenario: Delete student add
    #When I fill the lastname student BOUDJELLAL the firstname student sabine and e-mail address student sabine.boudjellal1@gmail.com to delete
    And I click on delete button 
    Then I verify I am on the student page
    
@invaliCridentialsStudent
Scenario Outline: Unsuccessful student add with invalid cridentials
    When I fill credentials lastname student <Name> firstname student <Firstname> and e-mail address student <Email>
    And I click on inviter button 
    And under the fields <fields> I should see the error message <ErrorMessage>
    And I click on delete button 
    Then I verify I am on the student page
    Examples:
        | Name        | Firstname   | Email                        | fields            | ErrorMessage            | 
        | BOUDJELLAL  | sabine      | sabine.boudjellal1.gmail.com | EmailInvalid      | L'email est invalide    |
        | BOUDJELLAL  | sabine      | sabine.boudjellal1@gmail.com | EmailDejaUtilisé  | l'email deja existe     |
       #| BOUDJ#3#ELLAL| sabine     | sabine.boudjellal1.gmail.com | Namenvalid        | Le nom est invalide     |                
       #| BOUDJELLAL  | sa#@3bine   | sabine.boudjellal1.gmail.com | Firstnameinvalid  | Le prenom est invalide  |
        
#@MissingCridentialsStudent
#Scenario Outline: Unsuccessful student add with missiong cridentials
    #When I fill credentials lastname student <Name> firstname student <Firstname> and e-mail address student <Email>
    #And I click on inviter button 
    #And under the fields <fields> I should see the error message <ErrorMessage>
    #And I click on delete button 
    #Then I verify I am on the student page
    #Examples:     
        #| {BACKSPACE} | sabine      | sabine.boudjellal1.gmail.com  | NameEmpty        |                         |           
        #| BOUDJELLAL  | {BACKSPACE} | sabine.boudjellal1.gmail.com  | FirstnameEmpty   |                         |            
        #| BOUDJELLAL  | sabine      | {BACKSPACE}                   | EmailEmpty       |                         | 
        #| {BACKSPACE} | {BACKSPACE} | {BACKSPACE}                   | CridentielsEmpty |                         |             

#@deleteAddStudent
#Scenario: Delete student on activity page
    #When I verify student number 16
    #And I moove to sabine BOUDJELLAL student and I click
    #Then I click on delete button on activity page