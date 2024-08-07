import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import loginActions from '../../../../pageObjects/pageActions/authentification/login/loginActions';
import addAdminMemeberActions from '../../../../pageObjects/pageActions/addTeamAdmin/addAdmin/addAdminActions';
import addCourseActions from "../../../../pageObjects/pageActions/addTraining/addCourse/addCourseActions";

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
    addAdminMemeberActions.clickOnEquipeButton();
    }); 

   And(/^I click on inviter un memebre button/,() => {
    addAdminMemeberActions.clickOnInviterMembreButton();
    });

    And(/^I click on administrateur button/,() => {
      addAdminMemeberActions.clickOnAdministrateurButton();
    });

    And(/^I click on ENVOYER button on admin PopUp/,() => {
      addAdminMemeberActions.clickOnEnvoyerButtonOnPopUp();
    });
    
    And(/^I fill e-mail admin/,() => {
      addAdminMemeberActions.fillCreateAnAccountEmail();
    });
    
    And(/^I click on ok button/,() => {
      addAdminMemeberActions.clickOnOKButton();
    });

    Then(/^I verify I am on equipe page/,() => {
      addAdminMemeberActions.VerifyVisibilityOfDescriptionPage();
    });

    And(/^I fill invalid e-mail admin (.*)/,(InvalidEmail) => {
      addAdminMemeberActions.fillInvalidEmail(InvalidEmail);
    });

    And(/^I verify error message equal to (.*)/,(expectederrormsg) => {
      addAdminMemeberActions.verifyEmailErrorMessage(expectederrormsg);
    });

    And(/^I click on annuler buton on admin popup/,() => {
      addAdminMemeberActions.clickOnAnnulerButton();
    });
    
   
     