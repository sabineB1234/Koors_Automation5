const selectorsAddStudent = {
    inputEmail :'input[placeholder="E-mail"]',
    inputPassWord :'input[placeholder="Mot de passe"]',
    buttonLogin : '.btn-Primary',

    ButtonStudents :'#step-Etudiants-navbar_director',
    //ButtonStudents : ".step-Etudiants-navbar_director > .Etudiants > .span",
    //ButtonStudent :'a:has(span:contains("Etudiants"))',
    
    //buttonAdd : 'd-flex align-items-center',
    //buttonAdd :'.material-icons">add</span>',
    buttonAdd : '.flex-end > .btn-Primary',

    buttonInvite : '.btn-Tabs.me-3.d-flex.align-items-center',

    //inputName : 'input[placeholder="Nom"]',
    inputName : ':nth-child(1) > .form-control',
    
    //inputFirstName : 'input[placeholder="Prénom"]',
    inputFirstName : '.mt-4 > :nth-child(2) > .form-control',

    //inputEmail : 'input[placeholder="E-mail"]',
    inputEmail : ':nth-child(3) > .form-control',

    //inputNameErrorMessage :'' ,
    //inputFirstNameErrorMessage :'' ,

    //InputEmailErrorMessage : 'div:has(span:contains("email est invalide"))',
    EmailErrorMessage : '.mt-4 > :nth-child(3) > span',

    //InputEmailErrorMessage : '.div.mt-2 mb-4 span',
    InvitSuccessMessage : '.H4-Subtitle',
    
    //buttonValidate : '.btn-Primary.large.success',
    buttonValidate : '.mt-4 > .d-flex > .btn-Primary',
    
    ButtonRetour : '.mb-5 > .btn-Primary',

    //buttonCancil : '.btn-Secondary.large.me-3',
    buttonCancil : ':nth-child(1) > .mt-4 > .d-flex > .btn-Secondary',
    buttonDelete : '.btn-QuickActions',
    
    //InputStudentNumber : 'ms-3',
    InputStudentNumber : 'div:has(span:contains("16"))',
    //InputStudentSB : '',
    //DeleteStudentButton : '',
    //AnnulerInvitationButton : '',

 
};
 
export default selectorsAddStudent ;
 