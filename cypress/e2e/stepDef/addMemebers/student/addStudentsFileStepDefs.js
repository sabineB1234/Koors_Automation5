import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import loginActions from '../../../../pageObjects/pageActions/authentification/login/loginActions';
import addStudentActions from '../../../../pageObjects/pageActions/addMemebers/addStudent/addStudentActions';
import addStudentsFileActions from '../../../../pageObjects/pageActions/addMemebers/addStudent/addStudentsFileActions';

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

When(/^I click on the student button/, () => {
  addStudentActions.clickOnStudentButton();
});

And(/^I verify number (.*) on students page/, (studentnumber) => {
  addStudentActions.VerifyNumberStudentsAdds (studentnumber)
});

And(/^I click on add a student button/, () => {
  addStudentActions.clickOnAddButton();
});

Then(/^I click on invite button /, () => {
  addStudentActions.clickOnValidateButton();
});

When(/^I click on import a list button/, () => {
  addStudentsFileActions.clickOnImprStudentFileButton();
});

And(/^I verify(.*)import students file text is visible/,(importfiletext) => {
  addStudentsFileActions.verifyVisibilityImportStudentsFileText (importfiletext) ;
}); 

And(/^I click on select a file button and downloard a file/, () => {
  const fileName = 'Studentslist.xlsx'; 
  addStudentsFileActions.clickOnSelectStudentFileButton(fileName);
});

And(/^I click on checkbox/, () => {
  addStudentsFileActions.clickOnCheckBoxButton();
});

And(/^I click on continue button/, () => {
  addStudentsFileActions.clickOnContinueButton()
});

And(/^I click on send invitations button/, () => {
  addStudentsFileActions.clickOnSendInvitationsButton();
});

And(/^I click on confirm and send button/, () => {
  addStudentsFileActions.clickOnConfirmAndsendButton();
});

Then(/^I verify I am on student page/, () => {
  addStudentsFileActions.VerifyVisibilityOfStudentPage();
});

And(/^I click on select file button and downloard an empty file/, () => {
  const emptyfilename = 'emptyfile.xlsx'; 
  addStudentsFileActions.clickOnSelectStudentEmptyFileButton(emptyfilename);
});

And(/^I verify (.*) error add file text is visible/,(addfileerrortext) => {
  addStudentsFileActions.verifyVisibilityAddFileErrorText (addfileerrortext) 
}); 

And(/^I verify (.*) consent text is visible/,(checkboxerrortext) => {
  addStudentsFileActions.verifyVisibilityCheckBoxErrorText (checkboxerrortext);
}); 

And(/^I click on cancil button/, () => {
  addStudentsFileActions.clickOnCancilButton();
});

And(/^I click on annuler button to cancil/, () => {
  addStudentsFileActions.clickOnAnnulerButton()
});

And(/^I verify number on students (.*)on stuents page/,(numberstudentstwo) => {
  addStudentsFileActions.VerifyNumberStudentsFileAddsTwo (numberstudentstwo)
}); 



