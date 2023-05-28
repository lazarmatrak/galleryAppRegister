/// <reference types = "cypress" />
import { faker } from '@faker-js/faker';
import Login from '../../page_objects/login';

const login = new Login();
let email = faker.internet.email();
let password = faker.internet.password();


describe("Login functionality tests",()=>{

    beforeEach(()=>{
        cy.visit("https://gallery-app.vivifyideas.com/login");
        console.log(email,password);
    })

    context('Positive Login test cases',()=>{

        it('Valid email and password entered',()=>{
           login.loginUser(email,password);
        })
    })

    context("Negative login test cases",()=>{

        it("Bad Credentials - Non-existing email",()=>{
            
        })

        it("Bad Credentials - Incorrect password",()=>{

        })
    })
})