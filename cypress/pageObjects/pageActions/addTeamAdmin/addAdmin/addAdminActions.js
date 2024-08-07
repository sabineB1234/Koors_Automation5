import selectorsAddAdminMember from "../../../../pageObjects/pageElements/addTeamMemeber/addAdmin/addAdminElements";

class addAdminMemeberActions {

    clickOnEquipeButton() {
        cy.wait(8000);
        cy.get('#step-team-navbar_director').contains ('Équipe')
        //cy.contains ('button' ,'Équipe')
        .invoke('css', 'background-color')
        .then((backgroundColor) => {
        cy.log('Background color: ' + backgroundColor)
        //cy.get(selectorsAddStudent.buttonInvite, { timeout: 2000 })
        //.should('be.visible') 
        cy.get('#step-team-navbar_director').contains ('Équipe')
        //cy.contains ('button' ,'Équipe')
        .click({ multiple: true, force: true });
      });
      }

clickOnInviterMembreButton() {
    cy.wait(8000);
    cy.contains ('button' ,'Inviter un membre')
    .invoke('css', 'background-color')
    .then((backgroundColor) => {
    cy.log('Background color: ' + backgroundColor)
    //cy.get(selectorsAddStudent.buttonInvite, { timeout: 2000 })
    //.should('be.visible') 
    cy.contains ('button' ,'Inviter un membre')
    .click({ multiple: true, force: true });
  });
  }

  clickOnAdministrateurButton() {
    cy.wait(2000);
    cy.get(selectorsAddAdminMember.AdministrateurButton).contains ('Administrateur')
    //cy.contains ('button' ,'Administrateur')
    //cy.get(selectorsAddStudent.buttonInvite, { timeout: 2000 })
    //.should('be.visible') 
    .click({ multiple: true, force: true });
    cy.wait(5000);
    }

  fillCreateAnAccountEmail() {
    cy.wait(5000);
    const Email = randomEmail();
    cy.get(selectorsAddAdminMember.InputEmailAddMember).type(Email, { parseSpecialCharSequences: false })// Remplacez par le sélecteur correct
    cy.log('Generated Email: ', Email);
    //cy.get(selectorsAddAdminMember.InputEmailAddMember)
  }

  clickOnEnvoyerButtonOnPopUp() {
      //.trigger('mouseover');
      cy.get(selectorsAddAdminMember.EnvoyerButton)
      .contains ('Envoyer')
      .click({ force: true });
   }

  clickOnOKButton() {
     cy.wait(2000);
     cy.screenshot('before-click');
     cy.contains ('button' ,'ok')
        //cy.get(selectorsAddStudent.buttonInvite, { timeout: 2000 })
        //.should('be.visible') 
       .scrollIntoView()
       .click({ multiple: true, force: true });
     cy.screenshot('after-click'); 
    }

  VerifyVisibilityOfDescriptionPage() {
    cy.url().should("include", "/professors/all");
    }

  fillInvalidEmail(InvalidEmail) {
    cy.get(selectorsAddAdminMember.InputEmailAddMember)
      .type(InvalidEmail, { parseSpecialCharSequences: false })
    }

  verifyEmailErrorMessage(expectederrormsg) {
    cy.get(selectorsAddAdminMember.InputEmailErrorMessage)
      .invoke('text')
      .then((text) => {
      expect(text.trim()).contains(expectederrormsg);
      });
    }

  clickOnAnnulerButton() {
    cy.get(selectorsAddAdminMember.AnnulerButton).contains ('ANNULER')
    //cy.contains ('button' ,'ANNULER'), { timeout: 10000 }
      .click({ force: true });
    }
}
export default new addAdminMemeberActions()

function randomEmail() {
    const timestamp = Date.now();
    const randomValue = Math.floor(Math.random() * 10000);
    return `user${timestamp}${randomValue}@yopmail.com`; // Utilisez un domaine de test valide
  }
