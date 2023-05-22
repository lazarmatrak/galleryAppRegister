/// <reference types="cypress" />
const password = 'newpassword123';
describe('Gallery App Registration test suite - POSITIVE',()=>{
    beforeEach(()=>{
        cy.visit(Cypress.config('baseUrl'))
    })
    it('Successfully register user',()=>{
        cy.get('#first-name').type('Lazar')
        cy.get('#last-name').type('Matrak')
        cy.get('#email').type('warclock@gmail.com')
        cy.get('#password').type(password)
        cy.get('#password-confirmation').type(password)
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
    })    
})

describe('Gallery App Registration test suite - NEGATIVE', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('baseUrl'))
    })

    it('First Name - Empty field',()=>{
        cy.get('#last-name').type('Matrak')
        cy.get('#email').type('warclock@gmail.com')
        cy.get('#password').type(password)
        cy.get('#password-confirmation').type(password)
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
        cy.wait(2000)
    })

    it('Last Name - Empty field',()=>{
        cy.get('#first-name').type('Lazar')
        cy.get('#email').type('warclock@gmail.com')
        cy.get('#password').type(password)
        cy.get('#password-confirmation').type(password)
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
        cy.wait(2000)
    })

    it('Email - Empty field',()=>{
        cy.get('#first-name').type('Lazar')
        cy.get('#last-name').type('Matrak')
        cy.get('#password').type(password)
        cy.get('#password-confirmation').type(password)
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
        cy.wait(2000)
    })

    it('Password - Empty field',()=>{
        cy.get('#first-name').type('Lazar')
        cy.get('#last-name').type('Matrak')
        cy.get('#email').type('warclock@gmail.com')
        cy.get('#password-confirmation').type(password)
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
        cy.wait(2000)
    })

    it('Password Confirmation - Empty field',()=>{
        cy.get('#first-name').type('Lazar')
        cy.get('#last-name').type('Matrak')
        cy.get('#email').type('warclock@gmail.com')
        cy.get('#password').type(password)
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
        cy.wait(2000)
    })
    
    it('Terms and Agreement - Not check',()=>{
        cy.get('#first-name').type('Lazar')
        cy.get('#last-name').type('Matrak')
        cy.get('#email').type('warclock@gmail.com')
        cy.get('#password').type(password)
        cy.get('#password-confirmation').type(password)
        cy.wait(2000)
    })
})