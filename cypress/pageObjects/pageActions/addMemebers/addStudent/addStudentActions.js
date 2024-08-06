import selectorsAddStudent from "../../../../pageObjects/pageElements/addMemebers/addStudent/AddStudentsFileElements";

class addStudentActions {

  clickOnStudentButton() {
    cy.wait(2000); 
    cy.contains ('button' ,'Étudiants').click({ multiple: true, force: true });
   // cy.get(selectorsAddStudent.ButtonStudents, { timeout: 2000 })
      //.scrollIntoView()
      //.log('The Etudiants button is displayed')
      //.should('exist') 
      //.should('be.visible') 
      //.then((button) => {
      //cy.log('Button Add is found: ', button);  
      //cy.wrap(button).click({ force: true });
   // })
    cy.visit("https://app.uat.koors.io/uptotestg2/students/all");
    cy.viewport(1500,1320);
  }

  clickOnAddButton() {
    cy.wait(2000);
    //cy.get(selectorsAddStudent.buttonAdd, { timeout: 2000 })
    cy.contains ('button','Ajouter un étudiant')
    .should('be.visible') 
    .click({ multiple: true, force: true });
  }

  clickOnInviteButton() {
    cy.wait(2000);
    cy.contains ('button' ,'Inviter')
    //cy.get(selectorsAddStudent.buttonInvite, { timeout: 2000 })
    //.should('be.visible') 
    .click({ multiple: true, force: true });
  }

  fillStudentCridentials(LastName, FirstName,Email) {
    cy.wait(2000);
    //const StudentEmailRandom = randomEmail();
    cy.get(selectorsAddStudent.inputName)
    //cy.contains ('input','Nom')
    .type(LastName);
    cy.get(selectorsAddStudent.inputFirstName)
    //cy.contains ('input','Prénom')
    .type(FirstName);
    cy.get(selectorsAddStudent.inputEmail)
    //cy.contains ('input','E-mail')
    .type(Email);
    //cy.get(selectorsAddStudent.inputEmail).clear().type(StudentEmailRandom);
  }
  
  clickOnValidateButton() {
    cy.wait(2000);
    cy.get(selectorsAddStudent.buttonValidate, { timeout: 2000 })
    .should('be.visible') 
    cy.contains ('button' ,'INVITER')
    .click({ multiple: true, force: true });
  }

  getMessageSucces(messagesucces) {
    cy.get(selectorsAddStudent.InvitSuccessMessage, { timeout: 2000 })
    .should('exist') // Vérifiez que l'élément existe
    .invoke('text')
    .then((text) => {
      // Affichez le texte récupéré dans les logs de Cypress
      cy.log('The message is: ' + text.trim());
      // Exemple d'assertion
      expect(text.trim()).to.equal(messagesucces);
    });
  }

  clickOnRetourButton () {   
    cy.wait(2000);
    cy.get(selectorsAddStudent.ButtonRetour)
    .click();
  }
  
  VerifyVisibilityOfStudentPage() {
    cy.url().should("include", "/students/all");
  }

  fillStudentInformationToCancil(LastNamecancil, FirstNamecancil,studentEmailcancil) {
    cy.screenshot('before-click'); 
    cy.get(selectorsAddStudent.inputName).clear().type(LastNamecancil);
    cy.get(selectorsAddStudent.inputFirstName).clear().type(FirstNamecancil);
    cy.get(selectorsAddStudent.inputEmail).clear().type(studentEmailcancil);
    cy.screenshot('after-click');
  }
  
  clickOnCancelButton() {
    cy.wait(2000);
      //cy.get(selectorsAddStudent.buttonCancil,{ timeout: 2000 })
      //.should('be.visible') // Attendre que l'élément soit visible
      cy.contains ('button' ,'ANNULER')
      .click({ force: true }); // Utiliser for);
  }

  fillStudentInformationToDelete(LastNameDelete, FirstNameDelete,studentEmailDelete) {
    cy.get(selectorsAddStudent.inputName).clear().type(LastNameDelete);
    cy.get(selectorsAddStudent.inputFirstName).clear().type(FirstNameDelete);
    cy.get(selectorsAddStudent.inputEmail).clear().type(studentEmailDelete);
  }

  clickOnDeleteButton() {
    cy.get(selectorsAddStudent.buttonDelete ,{ timeout: 2000 })
      //.should('be.visible') 
      .click({ force: true }); 
  }
  
  getErrorMessage(fields, ErrorMessage) {
    const field = fields.toString();
    let selector;
    switch (true) {
      case field.includes("Emailinvalid"):
        selector = selectorsAddStudent.EmailErrorMessage;
        break; 
      case field.includes("Emaildejautilisé"):
        selector = selectorsAddStudent.EmailErrorMessage;
        break;
      default:
        throw new Error("Invalid field provided");
    }
    cy.get(selector).invoke('text').then((text) => {
      cy.log('The message is: ' + text); 
      cy.screenshot('before-click'); 
      cy.get(selector).should("contain", ErrorMessage);
      expect(text.trim()).contains(ErrorMessage);
      cy.screenshot('after-click');
    });
}

getNumberStudentMessage (numberstudentmessage) {
  cy.get(selectorsAddStudent.InputStudentNumber, { timeout: 2000 })
  .should('exist') // Vérifiez que l'élément existe
  .invoke('text')
  .then((text) => {
  // Affichez le texte récupéré dans les logs de Cypress
  cy.log('The message is: ' + text.trim());
  // Exemple d'assertion
    expect(text.trim()).to.equal(numberstudentmessage);
  });
}

}
export default new addStudentActions()

function randomEmail(){
  return `qa+.............@koors.io`;
}