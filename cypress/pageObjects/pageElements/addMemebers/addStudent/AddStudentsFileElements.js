
const selectorsAddStudentsFile = {
    NumberStudent: ".ms-3",
    ImporterUneListeButton :':nth-child(1) > .row > .w-100 > .unselected',
    //InputImporterLalisteMessage :'.form-title',
    //SelectionnerFichierButton :'.btn-Secondary large',
    //SelectFichierButton :'div:has(button:contains("Importer une liste"))',
    selectionnerButton : ".m-2 > .btn-Secondary",
    
    InputAddFileErrorMessage : '.error-input.mt-1',
    //CheckBoxConsentButton : '#checkBtn', 
    CheckBoxConsentButton : ':nth-child(4) > label',
    //InputCheckboxErrorMessage : '.body-sm.ms-2.error-input',
    InputCheckboxErrorMessage : ':nth-child(4) > .body-sm',
    //buttonContinuer : '.btn-Primary.large.success',
    //buttonCancel : '.btn-Secondary.large.me-3',
    buttonContinuer : '.w-100 > .btn-Primary',
    buttonCancil : ':nth-child(1) > .mt-4 > .w-100 > .btn-Secondary',
    //buttonEnvoyerInvitation : '.btn-Primary.large ',
    //buttonEnvoyerInvitation : 'div:has(button:contains("Envoyer les invitations"))',
    //buttonConfirmerEnvoyer :'div:has(button:contains("Confirmer et Envoyer"))',
    //ButtonAnnuler :".btn-Secondary large me-1",
    //buttonDelete : '.material-icons',

     //NumberStudentFile: '[style="width: max-content;"]',
     buttonEnvoyerInvitation : '.mx-4 > .btn-Primary',
     buttonRetour2 : '.mx-4 > .btn-Secondary',
     buttonConfirmerEnvoyer : '.col-md-12 > .btn-Primary',
     ButtonAnnuler :'.col-md-12 > .btn-Secondary',
     buttonDelete : '.btn-QuickActions > .material-icons-outlined',
};
 
export default selectorsAddStudentsFile;
 