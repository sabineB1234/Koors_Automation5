import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginActions from "../../../../pageObjects/pageActions/authentification/login/loginActions";
import logOutActions from "../../../../pageObjects/pageActions/authentification/logout/logOutActions";


Given(/^I am on the director login page/, () => {
  loginActions.visitLogin();
  });

When(/^I enter email (.*) and password (.*)/,(Email,Password) => {
  loginActions.fillLoginCredentials(Email,Password);
  }); 

And(/^I click on the login button/,() => {
  loginActions.clickOnLoginButton() ;
  });

Then(/^I am on Activity page/,() => {
  cy.url().should("include", "/activity");
  });
When(/^I click on the checkbox button/, () => {
    logOutActions.clickOnCheckBoxButton();
});

And (/^I click on the log out button/, () => {
    logOutActions.clickOnLogOutButton();
});

Then(/^I verify that the user is navigated to login page/, () => {
  cy.url().should("include", "/auth/login");
});
