/// <reference types = "cypress" />
import { faker } from '@faker-js/faker';
import Login from '../../page_objects/login';

const login = new Login();
let email = faker.internet.email();
let password = faker.internet.password();

/* 
    email = matrak94@gmail.com
    password = mypass1234
*/

describe("Login functionality tests",()=>{

    // POSITIVE TEST CASES
    context('Positive Login test cases',()=>{
        beforeEach(()=>{
            cy.visit("/login");
        });
    
        it("Landed on Login page",()=>{
            cy.get("h1").should("exist").and("contain.text","Please login");
            cy.wait(2000);
        });

        it.only('Valid email and password entered',()=>{
           login.loginUser("matrak94@gmail.com","mypass1234");
           cy.wait(2000);
        });


    })

    // NEGATIVE TEST CASES
    context("Negative login test cases",()=>{
        beforeEach(()=>{
            cy.visit("/login");
        });
    
        it("Bad Credentials - Non-existing email",()=>{
            login.loginUser(email + "21231421",password);
            cy.wait(2000);
        })

        it("Bad Credentials - Incorrect password",()=>{
            login.loginUser(email,password + "23124124");
            cy.wait(2000);
        })
    })
})