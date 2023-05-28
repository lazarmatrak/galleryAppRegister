/// <reference types="cypress" />

import Register from '../../page_objects/register'
import { faker } from '@faker-js/faker';
const register = new Register();


let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let email = faker.internet.email({firstName:firstName,lastName:lastName});
let password = faker.internet.password();


describe("Gallery App Registration test suite - POSITIVE", () => {
  context("Positive Register test case", () => {
    beforeEach(() => {
      cy.visit(Cypress.config("baseUrl"));
    });
    it("Successfully register user", () => {
      register.firstNameInputField.type(firstName);
      register.lastNameInputField.type(lastName);
      register.emailInputField.type(email);
      register.passwordInputField.type(password);
      register.passwordConfirmInputField.type(password);
      register.termsCheckbox.check();
      register.submitBtn.click();
      
    });
  });

  context("Gallery App Registration test suite - NEGATIVE", () => {
    beforeEach(() => {
      cy.visit(Cypress.config("baseUrl"));
    });

    //generating new user because the email from the successfull login is taken already
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let email = faker.internet.email({firstName:firstName,lastName:lastName});
    let password = faker.internet.password();


    it("First Name - Empty field", () => {
      register.lastNameInputField.type(lastName);
      register.emailInputField.type(email);
      register.passwordInputField.type(password);
      register.passwordConfirmInputField.type(password);
      register.termsCheckbox.check();
      register.submitBtn.click();
      cy.wait(2000);
    });

    it("Last Name - Empty field", () => {
      register.firstNameInputField.type(firstName);
      register.emailInputField.type(email);
      register.passwordInputField.type(password);
      register.passwordConfirmInputField.type(password);
      register.termsCheckbox.check();
      register.submitBtn.click();
      cy.wait(2000);
    });

    it("Email - Empty field", () => {
      register.firstNameInputField.type(firstName);
      register.lastNameInputField.type(lastName);
      register.passwordInputField.type(password);
      register.passwordConfirmInputField.type(password);
      register.termsCheckbox.check();
      register.submitBtn.click();
      cy.wait(2000);
    });

    it("Password - Empty field", () => {
      register.firstNameInputField.type(firstName);
      register.lastNameInputField.type(lastName);
      register.emailInputField.type(email);
      register.passwordConfirmInputField.type(password);
      register.termsCheckbox.check();
      register.submitBtn.click();
      cy.wait(2000);
    });

    it("Password Confirmation - Empty field", () => {
      register.firstNameInputField.type(firstName);
      register.lastNameInputField.type(lastName);
      register.emailInputField.type(email);
      register.passwordInputField.type(password);
      register.termsCheckbox.check();
      register.submitBtn.click();
      cy.wait(2000);
    });

    it("Terms and Agreement - Not check", () => {
      register.firstNameInputField.type(firstName);
      register.lastNameInputField.type(lastName);
      register.emailInputField.type(email);
      register.passwordInputField.type(password);
      register.passwordConfirmInputField.type(password);
      register.submitBtn.click();
      cy.wait(2000);
    });
  });
});
