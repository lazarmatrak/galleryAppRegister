class CreateGallery{

    get goToCreateGallery(){
        return cy.get('.mr-auto > :nth-child(1) > .nav-link');
    }

    get createGalleryTitle(){
        return cy.get('.title-style').contains("Create Gallery");
    }

    get titleInputField(){
        return cy.get('#title');
    }

    get descriptionInputField(){
        return cy.get('#description');
    }

    get imagesInputField(){
        return cy.get('.input-group > .form-control').type("https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg");
        //https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg
    }

    get addImageBtn(){
        return cy.get('form > :nth-child(3) > :nth-child(3)');
    }

    get submitGalleryBtn(){
        return cy.get('form > :nth-child(4)');
    }
    
    get cancelGalleryCreationBtn(){
        return cy.get('form > :nth-child(5)');
    }

}

export default CreateGallery