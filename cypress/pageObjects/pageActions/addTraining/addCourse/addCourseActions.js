import selectorsAddCourse from "../../../../pageObjects/pageElements/addTraining/addCourse/addCourseElements";
import selectorsLogOut from "../../../../pageObjects/pageElements/authentification/logout/logOutElement";
class addCourseActions {

  
clickOnProfessorButton() {
    cy.wait(5000)
    cy.get(selectorsLogOut.buttonCheckBox).click({force: true });
    cy.get(selectorsAddCourse.professorButton, { timeout: 2000 })
     //cy.contains ('button' ,'Professeur')
     .trigger('mouseover') 
     .click({ force: true });
  }

  clickOnFormationButton() {
    cy.wait(2000);
    //cy.get(selectorsChoosingTrainingCourse.formationButton, { timeout: 2000 })
    //cy.contains('button','Formations')
    //.scrollIntoView()
    //.log('The Etudiants button is displayed')
    cy.visit("https://app.uat.koors.io/uptotestg2/courses/my-courses")
   // .click({ multiple: true, force: true });
      //.should('exist') 
      //.should('be.visible') 
      //.then((button) => {
      //cy.log('Button Add is found: ',button);  
      //cy.wrap(button)
       // .click({ multiple: true, force: true });
    //})
  }

  clickOnNouvelleFormationButton() {
    cy.wait(8000);
    cy.contains ('button' ,'Nouvelle formation')
    .invoke('css', 'background-color')
    .then((backgroundColor) => {
    cy.log('Background color: ' + backgroundColor)
    //cy.get(selectorsAddStudent.buttonInvite, { timeout: 2000 })
    //.should('be.visible') 
    cy.contains ('button' ,'Nouvelle formation')
    .click({ multiple: true, force: true });
  });
  }

  clickOnCreerCoursButton() {
    cy.wait(2000);
    cy.contains ('button' ,'Créer un cours')
    //cy.get(selectorsAddStudent.buttonInvite, { timeout: 2000 })
    //.should('be.visible') 
    .click({ multiple: true, force: true });
  }

  VerifyVisibilityOfDescriptionPage() {
    cy.url().should("include", "/course/description");
  }
  
  fillCourseInformationsTitleDetails(TitreDuCours,ThematiqueDucours) {
    cy.get(selectorsAddCourse.InputTitle).type(TitreDuCours);
    cy.get(selectorsAddCourse.InputThematique).type(ThematiqueDucours);
  }

  selectClickOnIntermediareButton() {
    cy.wait(2000);
    cy.get(selectorsAddCourse.buttonIntermediare, { timeout: 2000 })
    //cy.contains ('button' ,'Professeur')
    .invoke('css', 'background-color')
    .then((backgroundColor) => {
    cy.log('Background color: ' + backgroundColor)
    //cy.get(selectorsAddStudent.buttonInvite, { timeout: 2000 })
    //.should('be.visible') 
    cy.get(selectorsAddCourse.buttonIntermediare, { timeout: 2000 })
    .trigger('mouseover') 
    .click({ force: true });
   
    //cy.contains ('button' ,'Intermédiaire')
   // .should('be.visible')
    //.click({ multiple: true, force: true });
  });
  }

  fillCourseDescriptionsCourseDetails(ResumeIntroductif,ObjectifsPedagogiques,Prerequis,ConnaissancesCompetences) {
    cy.get(selectorsAddCourse.InputResumeIntroduction).should('be.visible').type(ResumeIntroductif);
    cy.get(selectorsAddCourse.InputObjectifsPedagogique).should('be.visible').type(ObjectifsPedagogiques);
    cy.get(selectorsAddCourse.InputPrerequis).should('be.visible').type(Prerequis);
    cy.get(selectorsAddCourse.InputConnaissanceCompetence).should('be.visible').type(ConnaissancesCompetences);
  }

  clickOnSelectionnerPhotoButton(PhotoName) {
    cy.wait(2000);
    cy.contains ('button' ,'SÉLECTIONNER UNE PHOTO')
    //cy.get(selectorsAddStudent.buttonInvite, { timeout: 2000 })
    //.should('be.visible') 
    .click({ multiple: true, force: true });
    cy.readFile('cypress/fixtures/Photo.jpeg').should('exist');
    cy.get('input[type="file"]').attachFile(PhotoName);
    cy.wait(2000);
  }

  clickOnSelectionnerURLAndAddURLButton(url) {
    cy.wait(2000);
    cy.contains ('button' ,'Ajouter une url de vidéo à intégrer')
    //cy.get(selectorsAddStudent.buttonInvite, { timeout: 2000 })
    //.should('be.visible') 
    .click({ multiple: true, force: true });
  
    cy.get(selectorsAddCourse.InputURL).clear().type(url);

    cy.wait(2000);
    cy.get(selectorsAddCourse.IntegrerVideoButton, { timeout: 2000 })
    .should('be.visible') 
    //cy.contains ('button' ,'intégrer la vidéo')
    .click({ multiple: true, force: true });
   
  }
  clickOnPublierAndRetourButton() {
    cy.wait(2000);
    cy.contains ('button' ,'Publier')
    .click({ multiple: true, force: true });
    cy.contains ('button' ,'retour au cours')
    .click({ multiple: true, force: true });
   
  }

  //clickOnRetourButton() {
    //cy.wait(2000);
    //cy.get(selectorsAddCourse.TitreCoursButton)
    //.should('exist')
    //.click({ multiple: true, force: true });
    //cy.contains ('button' ,'Publier')
    //.click({ multiple: true, force: true });
    //cy.contains ('button' ,'retour au cours')
   // .click({ multiple: true, force: true });
  
  
  clickOnContenuButton() {
    cy.wait(2000);
    cy.get(selectorsAddCourse.ContinuButton, { timeout: 2000 })
    //cy.contains ('button' ,'Contenu')
    .should('be.visible') 
    .invoke('css', 'background-color')
    .then((backgroundColor) => {
    cy.log('Background color: ' + backgroundColor)
    //cy.get(selectorsAddStudent.buttonInvite, { timeout: 2000 })
    //.should('be.visible') 
    cy.get(selectorsAddCourse.ContinuButton, { timeout: 2000 })
    .trigger('mouseover') 
    .click({ multiple: true, force: true });
  });
  }

  VerifyVisibilityOfContenuPage() {
    cy.url().should("include", "/course/content");
  }

  clickOnNouveauChapitreButton() {
    cy.wait(2000);
    cy.contains ('button' ,'NOUVEAU CHAPITRE')
    .should('be.visible') 
    .click({ multiple: true, force: true });
  }

  fillTitreChapitre(titrechapitre) {
    cy.get(selectorsAddCourse.InputTitreChapitre).clear().type(titrechapitre);
  }

  fillDescriptionChapitre(descriptionchapitre) {
    cy.get(selectorsAddCourse.InputResumeChapitre).clear().type(descriptionchapitre);
  } 

  clickOnSelectionnerButton(fileName) {
    cy.wait(2000);
    cy.get(selectorsAddCourse.ChoisirFichierbutton)
     //cy.contains ('button' ,'SÉLECTIONNER UN FICHIER')
    .should('be.visible') 
    .click({ multiple: true, force: true });
    cy.readFile('cypress/fixtures/Studentslist.xlsx').should('exist');
    cy.get('input[type="file"]').attachFile(fileName);
    cy.wait(2000);
  }

clickOnTitreCoursButton() {
    cy.wait(2000);
    cy.get(selectorsAddCourse.TitreCoursButton)
    .should('exist')
    .click({force: true });
}

  clickOnPublierAndFillCommentaire(Commentaire) {
    cy.wait(2000);
    cy.contains ('button' ,'Publier')
    .click({ multiple: true, force: true });
    cy.get(selectorsAddCourse.InputCommentaire, { timeout: 2000 })
    .type(Commentaire);
    cy.contains ('button' ,'Envoyer')
    .click({ multiple: true, force: true });
    cy.contains ('button' ,'retour au cours')
    .click({ multiple: true, force: true });
   
  }
  
  clickOnNouveauTestButton() {
    cy.wait(2000);
    cy.contains ('button' ,'NOUVEAU TEST')
    .should('be.visible') 
    .click({ multiple: true, force: true });
  }

  clickOnTestConnaissanceButton() {
    cy.wait(2000);
    cy.get(selectorsAddCourse.TestConnaissanceButton)
    //cy.contains ('button' ,'TEST DE CONNAISSANCE')
    .should('be.visible') 
    .click({ multiple: true, force: true });

    cy.contains ('button' ,'Valider')
    .should('be.visible') 
    .click({ multiple: true, force: true });
  }

  clickOnquestionsFermésButton() {
    cy.wait(2000);
    cy.contains ('button' ,'Questions fermées')
    .should('be.visible') 
    .click({ multiple: true, force: true });
  }

  fillQuestionDetails(Question ,IndiquezRéponse1,IndiquezRéponse2) {
    cy.get(selectorsAddCourse.InputQuestionText).clear().type(Question);
    cy.get(selectorsAddCourse.InputRepense1).clear().type(IndiquezRéponse1);
    cy.get(selectorsAddCourse.InputRepense2).clear().type(IndiquezRéponse2);
  }

  clickOnAjouterExplicationButton(descriptions) {
    cy.wait(2000);
    cy.contains ('button' ,'AJOUTER UNE EXPLICATION')
    .should('be.visible') 
    .click({ multiple: true, force: true });
    cy.get(selectorsAddCourse.InputexplicationText).clear().type(descriptions);
   
  }

  clickOnAjouterReponseButton(reponsesup) {
    cy.wait(2000);
    cy.contains ('button' ,'Ajouter une réponse')
    .should('be.visible') 
    .click({ multiple: true, force: true });
    cy.get(selectorsAddCourse.InputRepense3).clear().type(reponsesup);
    cy.get(selectorsAddCourse.BonneReponseBUtton)
    .click({ multiple: true, force: true })
  }

  clickOnEnregistrerTestConnaissanceButton() {
    cy.wait(2000);
    cy.screenshot('before-click');
    cy.get(selectorsAddCourse.EnregistrerTestConnaissanceButton)
    //cy.contains ('button' ,'ENREGISTRER')
    .should('be.visible') 
    .click({ multiple: true, force: true });
    cy.screenshot('after-click');
  }
  clickOnExamenFinaleButton() {
    cy.wait(2000);
    cy.get(selectorsAddCourse.ExamenFinalButton)
    //cy.contains ('button' ,'TEST DE CONNAISSANCE')
    .should('be.visible') 
    .click({ multiple: true, force: true });

    cy.contains ('button' ,'Valider')
    .should('be.visible') 
    .click({ multiple: true, force: true });
  }

  clickOnQuestionOuvertesButton() {
    cy.wait(2000);
    cy.get(selectorsAddCourse.questionsOuvertesButton)
    //cy.contains ('button' ,'TEST DE CONNAISSANCE')
    .should('be.visible') 
    .click({ multiple: true, force: true });
  }

  fillEXamenFinalDetails(TitreExamen,Questionouverte,Consignes) {
    cy.get(selectorsAddCourse.titleDeExamen).clear().type(TitreExamen);
    cy.get(selectorsAddCourse.QuestionOuverte1).clear().type(Questionouverte);
    cy.get(selectorsAddCourse.InputConsigne).clear().type(Consignes);
  }
  clickOnValeurQuestionButton() {
    cy.wait(2000);
    cy.get(selectorsAddCourse.InputValeurQuestion)
    //cy.contains ('button' ,'TEST DE CONNAISSANCE')
    .should('be.visible') 
    .click({ multiple: true, force: true });
    cy.get(selectorsAddCourse.InputValeurQuestion3)
    //cy.contains ('button' ,'TEST DE CONNAISSANCE')
    .should('be.visible') 
    .click({ multiple: true, force: true });
  }

  fillQuestionExamenFinalDetails(Question ,IndiquezRéponse1,IndiquezRéponse2,IndiquezRéponse3) {
    cy.get(selectorsAddCourse.InputExamenFinalQuestion).clear().type(Question);
    cy.get(selectorsAddCourse.InputExamenFinalRepense1).clear().type(IndiquezRéponse1);
    cy.get(selectorsAddCourse.InputExamenFinalRepense2).clear().type(IndiquezRéponse2);
    cy.get(selectorsAddCourse.BonneReponseBUttonExamen).click({ multiple: true, force: true });
    
  }
  clickOnAjouterExplicationExamenFinal12Button(descriptions1) {
    cy.wait(2000);
    cy.contains ('button' ,'AJOUTER UNE EXPLICATION')
    .should('be.visible') 
    .click({ multiple: true, force: true });
    cy.get(selectorsAddCourse.InputexplicationFinalExamenText)
    .type(descriptions1);
    cy.get(selectorsAddCourse.InputSupprimerButton)
    .click({ multiple: true, force: true });
   
  }

  clickOnEnregistrerButton() {
    cy.wait(2000);
    cy.get(selectorsAddCourse.EnregistrerButton)
    //cy.contains ('button' ,'TEST DE CONNAISSANCE')
    .should('be.visible') 
    .click({ multiple: true, force: true });
  }

  clickOnFormationtoformationButton() {
    cy.wait(2000);
    cy.get(selectorsAddCourse.FormationButton)
    //cy.contains ('button' ,'TEST DE CONNAISSANCE')
    .should('be.visible') 
    .click({ multiple: true, force: true });
  }
  VerifyVisibilityOfFormationsPage(){
  cy.url().should("include", "/my-courses");
  }
}
export default new addCourseActions()

function randomEmail(){
  return `qa+.............@koors.io`;
}