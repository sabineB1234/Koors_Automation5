Feature: Add training course 
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
    And I click on crééer un cours button
    Then I verify I am on description page 
    And I fill course informations title in the following details
      | Field             | Value          |
      | TitreDuCours      | Cypress        |
      | ThematiqueDucours | Automatisation |    
    And I select and click on intermediare button  
    And I fill descriptions course in the following details
      | Field                     |  Value                        |
      | ResumeIntroductif         |  Resume introductif           |
      | ObjectifsPedagogiques     |  Objectifs pédagogiques       | 
      | Prerequis                 |  Prerequis                    | 
      | ConnaissancesCompetences  |  Connaissances et compétences | 
    And I click on selectionner une photo button and downloard a picture
    And I click ajouter une URL send https://www.youtube.com/watch?v=tRI5ruE7yCA and click on integrer la video button
    And I click on pubier button and retour button
    And I click on contenu button
    Then I verify I am on contenu du cours page
    And I click on nouveau chapitre button
    And I fill titre du chapitre Introduction a cypress 
    And I fill description du chapitre Cypress pour les debutants
    And I click ajouter une URL send https://www.youtube.com/watch?v=tRI5ruE7yCA and click on integrer la video button
    And I click on selectionner une fichier button and downloard a file
    And I click on titre du cours button
    And I click on pubier button and fill Nouveau cours a publier
    And I click on nouveau test button
    And I click on test de connaissance button and on valider button
    And I click on questions fermées button
    And I fill descriptions tests in the following details
      | Field              | Value                    |
      | Question           | Question                 |
      | IndiquezRéponse1   | Indiquez la réponse 1    | 
      | IndiquezRéponse2   | Indiquez la réponse 2    | 
    And I click on ajouter une explication button and I fill descriptions question Explications 
    And I click on ajouter une reponse button and I fill reponse question 
    And I click on enregitrer test de connaissance button 
    And I click on titre du cours button 
    And I click on nouveau test button    
    And I click on examen final button and on valider button
    And I click on questions ouvertes button
    And I fill descriptions examen final in the following details
      | Field            | Value              |
      | TitreExamen      | Examen Final       |
      | Questionouverte  | question ouverte   | 
      | Consignes        | consignes          | 
    And I select the question value
    And I click on questions fermées button 
    And I fill descriptions tests examen final in the following details
      | Field              | Value                    |
      | Question           | Question                 |
      | IndiquezRéponse1   | Indiquez la réponse 1    | 
      | IndiquezRéponse2   | Indiquez la réponse 2    | 
      | IndiquezRéponse3   | Indiquez la réponse 3    | 
    And I click on ajouter une explication button for final examen and I fill descriptions question Explications on examen final page
    And I click on enregitrer button 
    And I click on formation button to formations page
    Then I verify I am on formation page 




