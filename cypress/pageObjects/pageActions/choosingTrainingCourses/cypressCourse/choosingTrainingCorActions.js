
import selectorsChoosingTrainingCourse  from "../../../../pageObjects/pageElements/choosingtrainingCourses/cypressCourses/choosingTrainingCorElements";
class chooseTrainingCourse {

clickOnFormationButton() {
      cy.wait(2000);
      cy.get(selectorsChoosingTrainingCourse.formationButton, { timeout: 2000 })
      //cy.contains('button','Formations')
      .scrollIntoView()
      .log('The Etudiants button is displayed')
      cy.visit("https://app.uat.koors.io/uptotestg2/all-courses")
     // .click({ multiple: true, force: true });
        //.should('exist') 
        //.should('be.visible') 
        //.then((button) => {
        //cy.log('Button Add is found: ',button);  
        //cy.wrap(button)
         // .click({ multiple: true, force: true });
      //})
    }
    
clickOnProfessorButton() {
      cy.wait(2000);
      cy.get(selectorsChoosingTrainingCourse.prefessorButton, { timeout: 2000 })
      .should('be.visible') 
      .click({force: true });
    }
  
selectProfessor() {
      cy.wait(2000);
      cy.get(selectorsChoosingTrainingCourse.InputProfesorUpToTest, { timeout: 2000 })
      .should('be.visible') 
      .click({ multiple: true, force: true });
    }

getCypressMessage(cypressmessage) {
        cy.get(selectorsChoosingTrainingCourse.InputCypress, { timeout: 2000 })
        //cy.contains ('button' ,'cypress')
        .should('exist')
        .invoke('text')
        .then((text) => {
          // Affichez le texte récupéré dans les logs de Cypress
          cy.log('The message is: ' + text.trim());
          // Exemple d'assertion
          expect(text.trim()).contains(cypressmessage);
        });
      }
    
clickOnCypressButton() {
      cy.wait(2000);
      cy.get(selectorsChoosingTrainingCourse.InputCypress, { timeout: 2000 })
      .should('be.visible') 
      .click({force: true });
    }

VerifyVisibilityOfCypressPage() {
    cy.url().should("include", "/2895/description");
      }    

sendTrainingCourseName(coursname) {
      cy.wait(2000);
      cy.get(selectorsChoosingTrainingCourse.InputSearch, {timeout: 2000})
        .type(coursname) 
      cy.get(selectorsChoosingTrainingCourse.searchButton)
        .click();
    } 

clickOnAValiderButton () {   
      cy.wait(2000);
      cy.get(selectorsChoosingTrainingCourse.formationAValiderbutton)
        .click();
    } 

getStatutMessage(statutmessage) {
      cy.get(selectorsChoosingTrainingCourse.InputStatutAValider, { timeout: 2000 })
        .should('exist') // Vérifiez que l'élément existe
        .invoke('text')
        .then((text) => {
          // Affichez le texte récupéré dans les logs de Cypress
          cy.log('The message is: ' + text.trim());
          // Exemple d'assertion
          expect(text.trim()).to.equal(statutmessage);
        });
      }
    
      getNomberFormationsMessage(aucuneformationmsg) {   
        cy.wait(2000);
        cy.get(selectorsChoosingTrainingCourse.AucuneFormationMessage)   
        .should('exist')
        .invoke('text')
        .then((text) => {
          // Affichez le texte récupéré dans les logs de Cypress
          cy.log('The message is: ' + text.trim());
          // Exemple d'assertion
          expect(text.trim()).contains(aucuneformationmsg);
        });
      }

      }
  export default new chooseTrainingCourse()
  
  