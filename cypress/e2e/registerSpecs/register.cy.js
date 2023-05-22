/// <reference types="cypress" />
describe('Gallery App Registration test suite',()=>{
    beforeEach(()=>{
        cy.visit(Cypress.config('baseUrl'))
    })
    const password = 'newpassword123';
    // Happy Path

    it('Successfully register user',()=>{
        cy.get('#first-name').type('Lazar')
        cy.get('#last-name').type('Matrak')
        cy.get('#email').type('warclock@gmail.com')
        cy.get('#password').type(password)
        cy.get('#password-confirmation').type(password)
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
    })

    // Sad Path
})