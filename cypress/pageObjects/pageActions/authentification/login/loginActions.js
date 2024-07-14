import selectorsLogin from "../../../../pageObjects/pageElements/authentification/login/loginElements";
class loginActions {

  visitLogin() {
   // cy.on('window:alert', (text) => {
   // console.log('Alert appeared with text: ', text);
    //cy.on('window:before:load', (win) => {
    //console.log('Before load event:', win);
    cy.visit("https://app.uat.koors.io/uptotestg2/auth/login");
    cy.viewport(1500,1320);
    
    //cy.screenshot('after-visit-login')
  }

  fillLoginCredentials(Email,Password) {
    cy.get( selectorsLogin.inputEmail).clear().type(Email);
    cy.get(selectorsLogin.inputPassWord).clear().type(Password);
  }
  
// Clic sur le bouton de connexion
clickOnLoginButton() {
  //cy.wait(2000);
  cy.get(selectorsLogin.buttonLogin).first().click(); // Utilisation de .first() pour cliquer sur le premier élément trouvé
  cy.log('The valider button is displayed');
  cy.wait(6000);
  //cy.on('window:alert', (text) => {
  //console.log('Alert appeared with text: ', text);
  //cy.on('window:before:load', (win) => {
   // console.log('Before load event:', win);
    //cy.screenshot('after-click-signup');
}

VerifyVisibilityOfActivityPage() {
cy.url().should("include", "/activity");
}

getErrorMessage(fields ,ErrorMessage){
    const field = fields.toString();
    cy.log('Field received: ' + field);
    let selector;
    switch (true){
    case field.includes("Email") :
        selector = selectorsLogin.InputErrorMessage;
        break;
    case field.includes("Password"):
        selector = selectorsLogin.InputErrorMessage;
        break;
        default:      
        throw new Error ("Invalid field provided");
    }
      cy.get(selector).invoke('text').then((text) => {
      cy.log('The message is: ' + text); 
      cy.get(selector).should("contain", ErrorMessage);
      expect(text.trim()).contains(ErrorMessage);
    });
  }
}

export default new loginActions()

   
