import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import loginActions from '../../../../pageObjects/pageActions/authentification/login/loginActions';
import logOutActions from "../../../../pageObjects/pageActions/authentification/logout/logOutActions";
import addCourseActions from "../../../../pageObjects/pageActions/addTraining/addCourse/addCourseActions";

    Given(/^I am on the director login page/, () => {
    loginActions.visitLogin();
    });
  
    When(/^I enter email (.*) and password (.*)/,(Email,Password) => {
    loginActions.fillLoginCredentials(Email,Password);
    }); 
  
    And(/^I click on the login button/,() => {
    loginActions.clickOnLoginButton() ;
    });
  
    Then(/^I am on the Activity page/,() => {
    loginActions.VerifyVisibilityOfActivityPage() ;
    });
  
    When(/^I click on the checkbox button/, () => {
    logOutActions.clickOnCheckBoxButton();
    });
      
    And(/^I click on professeur button/, () => {
    addCourseActions.clickOnProfessorButton();
    });
      
    Then(/^I click on add formation button/, () => {
    addCourseActions.clickOnFormationButton();
    });
      
    When(/^I click on nouvelle formation button/, () => {
    addCourseActions.clickOnNouvelleFormationButton();
    });

    And(/^I click on crééer un cours button/, () => {
    addCourseActions.clickOnCreerCoursButton();
    });
      
    When(/^I verify I am on description page/, () => {
    addCourseActions.VerifyVisibilityOfDescriptionPage();
    });
    
    And (/^I fill course informations title in the following details/,(dataTable) => {
      const details = dataTable.rowsHash();
      cy.log('Details:', details);
      cy.log('TitreDuCours:', details.TitreDuCours);
      cy.log('ThematiqueDucours:', details.ThematiqueDucours);
      addCourseActions.fillCourseInformationsTitleDetails(details.TitreDuCours,details.ThematiqueDucours);
    })

    And(/^I select and click on intermediare button/, () => {
      addCourseActions.selectClickOnIntermediareButton();
    });    

    And (/^I fill descriptions course in the following details/,(dataTable) => {
      const details = dataTable.rowsHash();
      cy.log('Details:', details);
      cy.log('ResumeIntroductif:', details.ResumeIntroductif);
      cy.log('ObjectifsPédagogiques:', details.ObjectifsPedagogiques);
      cy.log('Prérequis:', details.Prerequis);
      cy.log('ConnaissancesCompétences:', details.ConnaissancesCompetences);
        
      addCourseActions.fillCourseDescriptionsCourseDetails(details.ResumeIntroductif,details.ObjectifsPedagogiques,details.Prerequis,details.ConnaissancesCompetences);
    })

    And(/^I click on selectionner une photo button and downloard a picture/, () => {
      const PhotoName = 'Photo.jpeg'; 
      addCourseActions.clickOnSelectionnerPhotoButton(PhotoName);
    });   
    
    And(/^I click ajouter une URL send (.*) and click on integrer la video button/, (url) => {
      addCourseActions.clickOnSelectionnerURLAndAddURLButton(url);
    });

    And(/^I click on pubier button and retour button/, () => {
      addCourseActions.clickOnPublierAndRetourButton();
    });
    
    And(/^I click on contenu button/, () => {
      addCourseActions.clickOnContenuButton();
    });

    Then(/^I verify I am on contenu du cours page/, () => {
      addCourseActions.VerifyVisibilityOfContenuPage();
    });

    And(/^I click on nouveau chapitre button/, () => {
      addCourseActions.clickOnNouveauChapitreButton();
    });

    And(/^I fill titre du chapitre (.*)/,(titrechapitre) => {
      addCourseActions.fillTitreChapitre(titrechapitre);
    });     
    
    And(/^I fill description du chapitre (.*)/,(descriptionchapitre) => {
      addCourseActions.fillDescriptionChapitre(descriptionchapitre)
    });

    And(/^I click on selectionner une fichier button and downloard a file/, () => {
      const fileName = 'Studentslist.xlsx'; 
      addCourseActions.clickOnSelectionnerButton(fileName);
    });

    And(/^I click on titre du cours button/, () => {
      addCourseActions.clickOnTitreCoursButton();
    });

    And(/^I click on pubier button and fill (.*)/, (Commentaire) => {
      addCourseActions.clickOnPublierAndFillCommentaire(Commentaire);
    });

    And(/^I click on nouveau test button/, () => {
      addCourseActions.clickOnNouveauTestButton();
    });

    And(/^I click on test de connaissance button and on valider button/, () => {
      addCourseActions.clickOnTestConnaissanceButton()
    });

    And(/^I click on questions fermées button/, () => {
      addCourseActions.clickOnquestionsFermésButton();
    });

    And (/^I fill descriptions tests in the following details/,(dataTable) => {
      const details = dataTable.rowsHash();
      cy.log('Details:', details);
      cy.log('Question:', details.Question);
      cy.log('IndiquezRéponse1:', details.IndiquezRéponse1);
      cy.log('IndiquezRéponse2:', details.IndiquezRéponse2);

      addCourseActions.fillQuestionDetails(details.Question ,details.IndiquezRéponse1,details.IndiquezRéponse2);
    })

    And(/^I click on ajouter une explication button and I fill descriptions question (.*)/, (descriptions) => {
      addCourseActions.clickOnAjouterExplicationButton(descriptions);
    });

    And(/^I click on ajouter une reponse button and I fill (.*)/, (reponsesup) => {
      addCourseActions.clickOnAjouterReponseButton(reponsesup);
    });
      
    And(/^I click on enregitrer test de connaissance button/, () => {
      addCourseActions.clickOnEnregistrerTestConnaissanceButton();
    });
      
    And(/^I click on examen final button and on valider button/, () => {
        addCourseActions.clickOnExamenFinaleButton();
    });

    And(/^I click on questions ouvertes button/, () => {
      addCourseActions.clickOnQuestionOuvertesButton();
    });

    And(/^I fill descriptions examen final in the following details/, (dataTable) => {
      const details = dataTable.rowsHash();
      cy.log('Details:', details);
      cy.log('TitreExamen:', details.TitreExamen);
      cy.log('Questionouverte:', details.Questionouverte);
      cy.log('Consignes:', details.Consignes);

      addCourseActions.fillEXamenFinalDetails(details.TitreExamen,details.Questionouverte,details.Consignes);
     });    
      
    And(/^I select the question value/, () => {
       addCourseActions.clickOnValeurQuestionButton();
     });    

     And (/^I fill descriptions tests examen final in the following details/,(dataTable) => {
      const details = dataTable.rowsHash();
      cy.log('Details:', details);
      cy.log('Question:', details.Question);
      cy.log('IndiquezRéponse1:', details.IndiquezRéponse1);
      cy.log('IndiquezRéponse2:', details.IndiquezRéponse2);
    
      addCourseActions.fillQuestionExamenFinalDetails(details.Question ,details.IndiquezRéponse1,details.IndiquezRéponse2);
  })
  And(/^I click on ajouter une explication button for final examen and I fill (.*) on examen final page/,(descriptions1) => {
     addCourseActions.clickOnAjouterExplicationExamenFinal12Button(descriptions1);
  });

  And(/^I click on enregitrer button/, () => {
     addCourseActions.clickOnEnregistrerButton();
     });    
                                    
  Then(/^I click on formation button to formations page/, () => {
      addCourseActions.clickOnFormationtoformationButton()
     });  
        
  Then(/^I verify I am on formation page/,() => {
      addCourseActions.VerifyVisibilityOfFormationsPage() ;
     });    