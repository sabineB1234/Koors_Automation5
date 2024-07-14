import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginActions from "../../../../pageObjects/pageActions/authentification/login/loginActions";
import addStudentActions from "../../../../pageObjects/pageActions/addMemebers/addStudent/addStudentActions";

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
  loginActions.VerifyVisibilityOfActivityPage() 
  });

When(/^I click on student button/, () => {
  addStudentActions.clickOnStudentButton();
});

And(/^I click on add student button/, () => {
  addStudentActions.clickOnAddButton();
});

Then(/^I click on invite button/, () => {
  addStudentActions.clickOnInviteButton();
});

When(/^I fill credentials lastname student (.*) firstname student (.*) and e-mail address student (.*)/, (LastName, FirstName, Email) => {
  addStudentActions.fillStudentCridentials(LastName, FirstName,Email);
});

And(/^I click on inviter button/, () => {
  addStudentActions.clickOnValidateButton();
});

And(/^I verify message succes (.*)/,(messagesucces) => {
  addStudentActions.getMessageSucces(messagesucces);
   });

And(/^I click on retour button/,() => {
  addStudentActions.clickOnRetourButton();
   });

When(/^I fill the lastname student (.*) the firstname student (.*) and e-mail address student (.*) to cancel/, (LastNamecancil, FirstNamecancil,studentEmailcancil) => {
  addStudentActions.fillStudentInformationToCancil(LastNamecancil, FirstNamecancil,studentEmailcancil);
});

And(/^I click on cancel button/, () => {
  addStudentActions.clickOnCancelButton();
});

When(/^I fill the lastname student (.*) the firstname student (.*) and e-mail address student (.*) to delete/, (LastNameDelete, FirstNameDelete,studentEmailDelete) => {
  addStudentActions.fillStudentInformationToDelete (LastNameDelete, FirstNameDelete,studentEmailDelete);
});

And(/^I click on delete button/, () => {
  addStudentActions.clickOnDeleteButton();
});

And(/^under the fields (.*) I should see the message error (.*)/, (fields, ErrorMessage) => {
  addStudentActions.getErrorMessage(fields, ErrorMessage);
});

Then(/^I verify I am on the student page/,() => {
  addStudentActions.VerifyVisibilityOfStudentPage()  
});

When(/^I verify student number(.*)/,(numberstudentmessage) => {
  addStudentActions.getNumberStudentMessage(numberstudentmessage)
});

And(/^I moove to (.*) student and I click/,() => {
});

Then(/^I click on delete button on activity page/,() => {
  
});