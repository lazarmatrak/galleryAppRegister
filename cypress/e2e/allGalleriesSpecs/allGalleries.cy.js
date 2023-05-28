/// <reference types="cypress" />


import AllGalleries from "../../page_objects/allGalleries";

const allGalleries = new AllGalleries();

describe("Test cases for All Galleries page",()=>{
    beforeEach(()=>{
        cy.visit(Cypress.config("baseUrl"));
    });

    it("All Galleries title exists",()=>{
        allGalleries.mainTitle.should("exist");
        cy.wait(2000);
    });

    it("Gallery search",()=>{
        allGalleries.formControlInputField.type("Refined Metal Gloves");
        allGalleries.filterButton.click();
        cy.wait(2000)
    });

    it("Select first gallery",()=>{
        allGalleries.firstGallery.click();
    });


})