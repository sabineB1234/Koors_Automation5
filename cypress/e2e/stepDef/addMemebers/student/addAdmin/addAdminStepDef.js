import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import loginActions from '../../../../pageObjects/pageActions/authentification/login/loginActions';


Given(/^I am on the director login page/, () => {
    loginActions.visitLogin();
    });
  
  When(/^I enter email (.*) and password (.*)/,(Email,Password) => {
    loginActions.fillLoginCredentials(Email,Password);
    }); 
  
  And(/^I click on the login button/,() => {
    loginActions.clickOnLoginButton() ;
    });
  
  Then(/^I am on the Activity page/,() => {
    loginActions.VerifyVisibilityOfActivityPage() ;
    });

   When(/^I click on equipe button/,() => {
        
    }); 
   And(/^I click on inviter un memebre button/,() => {
    
    });

    And(/^I click on administrateur button/,() => {
    
    });
    
    And(/^I fill e-mail admin/,() => {
    
    });

    And(/^I click on valider button on admin popup/,() => {
    
    });
    
    And(/^I click on ok button/,() => {
    
    });

    Then(/^I verify I am on equipe page/,() => {
    
    });

    And(/^I fill invalid e-mail admin/,() => {
    
    });

    And(/^I verify error message equal to (.*)/,() => {
    
    });

    And(/^I click on annuler buton on admin popup/,() => {
    
    });
    
   
     