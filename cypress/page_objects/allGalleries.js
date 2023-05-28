import { faker } from "@faker-js/faker";


class AllGalleries{
    
    get formControlInputField(){
        return cy.get('.form-control');
    }

    get filterButton(){
        return cy.get('.input-group-append > .btn');
    }

    // get logoutBtn(){
    //     return cy.get('.ml-auto > :nth-child(3) > .nav-link');
    // }

    get mainTitle(){
        return cy.get('.title-style');
    }

    get loadMoreBtn(){
        return cy.get(':nth-child(3) > :nth-child(2) > .btn');
    }

    get galleryGrid(){
        return cy.get('.grid');
    }
    get firstGallery(){
        return cy.get(':nth-child(1) > h2 > .box-title');
    }
    
    searchGallery(){
        this.formControlInputField.type(faker.word.adjective());
        this.filterButton.click();
    }


}

export default AllGalleries