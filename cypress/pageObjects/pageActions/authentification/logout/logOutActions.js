import selectorsLogOut from "../../../../pageObjects/pageElements/authentification/logout/logOutElement";
import selectorsLogin from "../../../../pageObjects/pageElements/authentification/login/loginElements";
class logOutActions {

   visitLogin() {
      cy.visit("https://app.uat.koors.io/uptotestg2/auth/login");
      cy.viewport(1500,1320);
      cy.wait(2000);
    }

    fillLoginCredentials(Email,Password) {
      cy.get( selectorsLogin.inputEmail).clear().type(Email);
      cy.get(selectorsLogin.inputPassWord).clear().type(Password);
    }

    // Clic sur le bouton de connexion
    clickOnLoginButton() {
        cy.get(selectorsLogin.buttonLogin).first().click(); // Utilisation de .first() pour cliquer sur le premier élément trouvé
        cy.log('The valider button is displayed');
        cy.wait(6000);
    }

  clickOnCheckBoxButton() {
     cy.wait(5000)
     cy.get( selectorsLogOut.buttonCheckBox).click({force: true });
  }

  clickOnLogOutButton() { 
     cy.wait(2000);
     cy.get( selectorsLogOut.buttonLoginOut,{ timeout: 100000 })
     .should('be.visible') // Attendre que l'élément soit visible
     .click({ multiple: true, force: true }); // Utiliser force: true si nécessaire
  }
}
export default new logOutActions()



  