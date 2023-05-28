class Register {
  get firstNameInputField() {
    return cy.get("#first-name");
  }
  get lastNameInputField() {
    return cy.get("#last-name");
  }
  get emailInputField() {
    return cy.get("#email");
  }
  get passwordInputField() {
    return cy.get("#password");
  }
  get passwordConfirmInputField() {
    return cy.get("#password-confirmation");
  }
  get termsCheckbox() {
    return cy.get(".form-check-input");
  }
  get submitBtn() {
    return cy.get(".btn");
  }
}

export default Register;
