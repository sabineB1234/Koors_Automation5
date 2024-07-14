const selectorsLogOut = {
    inputEmail :'input[placeholder="E-mail"]',
    inputPassWord :'input[placeholder="Mot de passe"]',
    //buttonLogin : '#btn-cnx',
    buttonLogin : 'div:has(button:contains("Me connecter"))',
    buttonCheckBox : '#step-change-role_director',
    buttonLoginOut :'a:has(span:contains("Déconnexion"))',

    //buttonLoginOut :'.navbar-nav > :nth-child(11)',
    //buttonLoginOut : "#step-go-to-professor-from-director > :nth-child(1) > :nth-child(12)"
    
};
export default selectorsLogOut;
//div:has(button:contains("Me connecter"))
