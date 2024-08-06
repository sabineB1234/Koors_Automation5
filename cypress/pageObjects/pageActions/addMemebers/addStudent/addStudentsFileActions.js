
import selectorsAddStudentsFile from '../../../../pageObjects/pageElements/addMemebers/addStudent/AddStudentsFileElements';

class addStudentsFileActions {

  VerifyNumberStudentsAdds (studentnumber) {
    cy.get(selectorsAddStudentsFile.NumberStudent)
    .invoke('text')
    .then((text) => {
    cy.log('The messgage is: '+ text); // Affiche "Hello, World!" dans les logs de Cypress
    expect(text).contains(studentnumber);
    });
    cy.contains(studentnumber).should('be.visible');
  }

clickOnImprStudentFileButton() { 
    cy.wait(2000);
    //cy.get(selectorsAddStudentsFile.ImporterUneListeButton)
    cy.contains ('button' ,'Importer une liste')
    .click({ multiple: true, force: true });
  }

verifyVisibilityImportStudentsFileText (importfiletext) {
    cy.get(selectorsAddStudentsFile.InputImporterLalisteMessage)
    .invoke('text')
    .then((text) => {
    cy.log('The messgage is: '+ text);
    cy.contains(importfiletext).should('be.visible');
    expect(text).contains(importfiletext); 
    });
  }

clickOnSelectStudentFileButton(fileName) { 
    cy.contains ('button' ,'SÉLECTIONNER UN FICHIER')
    .click({ force: true });
    cy.readFile('cypress/fixtures/Studentslist.xlsx').should('exist');
   // cy.get(selectorsAddStudentsFile.SelectFichierButton).click({force: true });
    cy.get('input[type="file"]').attachFile(fileName);
    cy.wait(2000);
  }

clickOnCheckBoxButton() { 
    cy.wait(2000);
    cy.get(selectorsAddStudentsFile.CheckBoxConsentButton).click();
  }

clickOnContinueButton() { 
    cy.wait(2000);
    //cy.get(selectorsAddStudentsFile.buttonContinuer)
    cy.contains('button', 'Continuer')
    .click({ multiple: true, force: true });
  }

clickOnSendInvitationsButton() { 
    cy.wait(2000);
    cy.get(selectorsAddStudentsFile.buttonEnvoyerInvitation)
    //cy.contains ('button' ,'ENVOYER LES INVITATIONS')
    .click({ multiple: true, force: true });
  }

clickOnConfirmAndsendButton() { 
    cy.wait(2000);
    cy.get(selectorsAddStudentsFile.buttonConfirmerEnvoyer)
    //cy.contains ('button' ,'CONFIRMER ET ENVOYER')
    //cy.contains('button', 'Envoyer les invitations')
    .click({ multiple: true, force: true });
   
  }

VerifyVisibilityOfStudentPage() {
    cy.url().should("include", "/students/all");
  }

clickOnSelectStudentEmptyFileButton(emptyfileName) { 
    cy.wait(2000); 
    //cy.get(selectorsAddStudentsFile.SelectFichierButton).click({force: true });
    cy.contains('button', 'SÉLECTIONNER UN FICHIER')
    .click({ force: true });
    cy.readFile('cypress/fixtures/Studentslist.xlsx').should('exist');
    cy.get('input[type="file"]').attachFile(emptyfileName);
    cy.wait(2000);
  
  }

verifyVisibilityAddFileErrorText (addfileerrortext) {
    cy.get(selectorsAddStudentsFile.InputAddFileErrorMessage)
    .invoke('text')
    .then((text) => {
    
    cy.log('The messgage is: '+ text);
    expect(text).contains(addfileerrortext); 
     });
    cy.contains(addfileerrortext).should('be.visible');
  }

verifyVisibilityCheckBoxErrorText (checkboxerrortext) {
    cy.get(selectorsAddStudentsFile.InputCheckboxErrorMessage)
    .invoke('text')
    .then((text) => {
    cy.log('The messgage is: '+ text);
    expect(text).contains(checkboxerrortext); 
     });
    cy.contains(checkboxerrortext).should('be.visible');
  }

clickOnCancilButton() { 
    cy.wait(2000);
    cy.get(selectorsAddStudentsFile.buttonCancil)
    //cy.contains ('button' ,'Annuler')
    .click({ multiple: true, force: true });
  }

clickOnAnnulerButton() { 
    cy.wait(2000);
    //cy.get(selectorsAddStudentsFile.ButtonAnnuler)
    cy.contains ('button' ,'ANNULER')
    .click({ multiple: true, force: true });
  }
 
VerifyNumberStudentsFileAddsTwo (numberstudentstwo) {
    cy.get(selectorsAddStudentsFile.NumberStudent)
    .invoke('text')
    .then((text) => {
    // Faites quelque chose avec le texte récupéré
    cy.log('The messgage is: '+ text); // Affiche "Hello, World!" dans les logs de Cypress
    expect(text).contains(numberstudentstwo); // Exemple d'assertion
    });
    cy.contains(numberstudentstwo).should('be.visible');
  }
}
  export default new addStudentsFileActions()