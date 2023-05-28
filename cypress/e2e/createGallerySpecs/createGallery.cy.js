/// <reference types="cypress" />
import Login from '../../page_objects/login'
import CreateGallery from '../../page_objects/createGallery';
import { faker } from '@faker-js/faker';

const login = new Login();
const createGallery = new CreateGallery();
let randomTitle = faker.lorem.word(5);
let randomDescription = faker.lorem.sentence();



describe("Create gallery tests",()=>{
    
    beforeEach(()=>{
        cy.visit("/login");
        login.loginUser("matrak94@gmail.com", "mypass1234");
        cy.wait(2000);
    })

    it("Visit Create Gallery Page",()=>{
        cy.visit("/create");
        let currentUrl = cy.url();
        currentUrl.should("eql","https://gallery-app.vivifyideas.com/create");
        cy.wait(2000);
    });

    it("Create a Gallery",()=>{
        cy.visit("/create");
        createGallery.titleInputField.type(randomTitle);
        createGallery.descriptionInputField.type(randomDescription);
        createGallery.imagesInputField;
        createGallery.submitGalleryBtn.click();
    })
})