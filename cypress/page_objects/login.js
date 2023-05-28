class Login{

    get loginInputField(){
        return cy.get('#email');
    }

    get passwordInputField(){
        return cy.get('#password');
    }

    get submitBtn(){
        return cy.get('.btn');
    }
    loginUser(email,password){
        this.loginInputField.type(email);
        this.passwordInputField.type(password);
        this.submitBtn.click();
    }

}

export const login =  new Login();