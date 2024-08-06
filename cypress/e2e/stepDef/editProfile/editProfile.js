import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

beforeEach(() => {
   cy.viewport(1920, 1080);
 });

Given(/^I am logged in as Director/, () => {
// Ensure user is logged in
cy.visit('https://app.uat.koors.io/uptotestg2/auth/login');
cy.get('#email').type('qa+uptotestg2@koors.io');
cy.get('#password').type('123456789SF');
cy.get('#btn-cnx').click();
   //cy.get('#go-to-prof-role').click({ multiple: true, force: true });
});

When (/^I am on Activity page/, () => {
cy.wait(4000);
cy.url().should('include','/activity');
}); 

And (/^I click on mon compte button/, () => {
cy.wait(6000);
cy.get('#step-change-role_director').click({ multiple: true, force: true });
cy.get(':nth-child(9) > .body-md').click({ multiple: true, force: true });
//cy.contains('Button', 'Mon compte').should('be.visible').click({ multiple: true, force: true });
cy.wait(6000);
cy.contains('.H3-Headline' ,"Profil").should('be.visible');

cy.wait(6000); 
//cy.contains('.btn-text', 'Modifier mon profil').click();
}); 

And (/^I Edit my informations/, () => {

cy.wait(2000);
//cy.contains('.btn-text', 'Modifier mon profil')
//Nom
cy.get('.profile-info-component > :nth-child(1) > .d-flex > .first-action-profile > .btn-text').click({force: true });
cy.wait(4000);
cy.get(':nth-child(2) > div[style=""] > .form-control').clear().type('Testname');
//Prenom
cy.get(':nth-child(1) > div[style=""] > .form-control').clear().type('testnom');
//Lieu de naissance
cy.get(':nth-child(2) > :nth-child(2) > .form-control').clear().type('Paris');


cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #demo-customized-select').click();
//Niveau scolaire
cy.get('[data-value="Master ou équivalent (BAC +4 ou + 5)"]').click();

//choisir une date 
//cy.get(':nth-child(1) > :nth-child(2) > .form-control').click();

// choisir la date 
cy.get('input[type="date"]').type('2023-12-31');
cy.get('input[type="date"]').invoke('val', '2023-12-31').trigger('change');
// choisir le genre
cy.get('[for="femme"]').click(); 

//supprimer la photo
//cy.get('[style="padding-top: 16px;"] > .btn-text')
//click();
//cy.get(':nth-child(1) > :nth-child(2) > .form-control').click();

// clicker sur changer la photot 
cy.get(':nth-child(2) > .btn-Secondary')
.click({ force: true });

// clicker sur slectionner une photo
cy.get('.d-flex.mx-auto > .btn-Primary')
.click();
cy.readFile('cypress/fixtures/Avatarfemme.jpeg').should('exist');
const PhotoName = 'Avatarfemme.jpeg'; 
cy.get('input[type="file"]').attachFile(PhotoName);

// cliquer sur enregistrer 
cy.get('[style="padding-bottom: 56px;"] > .btn-Primary')
.click();
cy.wait(6000);

});

Then (/^I should save screenshot/, () => {
   cy.screenshot('before-click'); 
   cy.get('.justify-content-end > .btn-Secondary').scrollIntoView().click({ force: true });
   cy.screenshot('after-click'); 
});