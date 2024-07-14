
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginActions from "../../../../pageObjects/pageActions/authentification/login/loginActions";


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
  loginActions.VerifyVisibilityOfActivityPage() 
  });

Then(/^under the fields (.*) I should see the messsage error (.*)/, (fields,ErrorMessage) => {
   loginActions.getErrorMessage(fields,ErrorMessage)
});

