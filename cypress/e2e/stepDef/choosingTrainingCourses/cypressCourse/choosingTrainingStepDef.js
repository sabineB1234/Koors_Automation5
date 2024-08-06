import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginActions from "../../../../pageObjects/pageActions/authentification/login/loginActions";
import chooseTrainingCourse from "../../../../pageObjects/pageActions/choosingTrainingCourses/cypressCourse/choosingTrainingCorActions";

Given(/^I am on the director login page/, () => {
  loginActions.visitLogin();
  });

When(/^I enter email (.*) and password (.*)/,(Email,Password) => {
  loginActions.fillLoginCredentials(Email,Password);
  }); 

And(/^I click on the login button/,() => {
  loginActions.clickOnLoginButton() ;
  });

And(/^I am on the Activity page/,() => {
  loginActions.VerifyVisibilityOfActivityPage();
  });

Then(/^I click on formation button to choose/,() => {
  chooseTrainingCourse.clickOnFormationButton();
    });
  
When(/^I click on dropdown list button/, () => {
   chooseTrainingCourse.clickOnProfessorButton();
  });

And(/^I choose uptoTest profesor/, () => {
  chooseTrainingCourse.selectProfessor();
});

And(/^I verify name course (.*)/, (cypressmessage) => {
  chooseTrainingCourse.getCypressMessage(cypressmessage);
});

And(/^I click on cypress course/, () => {
  chooseTrainingCourse.clickOnCypressButton();
});

Then(/^I verify I am on cypress page course/, () => {
  chooseTrainingCourse.VerifyVisibilityOfCypressPage();
});

And(/^I fill name course in search input (.*) and click/, (coursname) => {
  chooseTrainingCourse.sendTrainingCourseName(coursname);
});

And(/^I click on Cypress course/,() => {
  chooseTrainingCourse.clickOnAValiderButton ();
   });

When(/^I click on formation À valider button/,() => {
    chooseTrainingCourse.clickOnAValiderButton ();
     });

And(/^I verify statut cypress course (.*)/,(statutmessage) => {
  chooseTrainingCourse.getStatutMessage(statutmessage);
   });

And(/^I click first appearing course/, () => {
    cy.get('.table-white', { timeout: 10000 }).contains('À valider').click();
 });

And(/^I validate/,() => {
  chooseTrainingCourse.clickOnValiderButton();
     });

Then (/^I should see Cours publié avec succés/,() => {
  chooseTrainingCourse.getStatutMessage();
       });    
      
Then (/^I should see Cours publié avec succès/, ()=>{
  chooseTrainingCourse.verifyVisibilityOfSuccessPublication() 
     }); 
   
    
    