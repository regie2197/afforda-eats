/// <reference types ="cypress" />

// add faker here
import { faker } from '@faker-js/faker';

describe('Feature - Store Test Suite', () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000/store?id=1')
        //cy.visit('http://localhost:3000/home')
        //cy.get(':nth-child(1) > .container').click()
        //cy.visit('https://afforda-eats.vercel.app/store?id=1')
        cy.url().should('include', '/store?id=1')
    })

    it('Verify Store page contains all elements', () => {

        // Verify Logo is visible
        cy.get('img[src="/logo.png"]').should('be.visible')
        // Verify Brand Name is visible
        cy.get('a[href="#homepage"]').should('be.visible').and('contain', 'AffordaEats');
        // Verify burger menu icon is visible
        cy.get('div.AppBar_burger__0Q3Dm').should('be.visible');
        // Verify store image
        cy.get('img[alt="Picture of the Webpage"]').should('be.visible');
        // Verify store name
        cy.get('div.MuiTypography-h4').contains('Affordaeats Jollijeep').should('be.visible');
        // Verify store motto
        cy.get('p.MuiTypography-body2').contains('Masarap • Mesherep • Meisirip').should('be.visible');
        // Verify photos
        cy.contains('Photos').should('be.visible')
        //cy.get('ul.MuiImageList-root.css-z436pq-MuiImageList-root').should('be.visible');
        // Verify Overall Rating Details
        cy.contains('Overall Rating').should('be.visible');
        // Check filled stars
        cy.get('span.MuiRating-iconFilled')
        .should('have.length', 3) // Ensure there are 3 filled stars
        .should('be.visible');

        // Check empty stars
        cy.get('span.MuiRating-iconEmpty')
        .should('have.length', 2) // Ensure there are 2 empty stars
        .should('be.visible');

        cy.contains('3 out of 5 stars (24 reviews)').should('be.visible');

        // Verify Location & Store hours details
        cy.contains('Location & Hours').should('be.visible');
        cy.contains('Location').should('be.visible');
        cy.get('iframe').should('be.visible')
        //cy.get('p.MuiTypography-body2.css-ouizud-MuiTypography-root').should('be.visible');
        cy.contains('Operating Hours').should('be.visible');
        //cy.get('p.MuiTypography-body2.css-ouizud-MuiTypography-root').should('be.visible');
        // Verify Reviews
        cy.contains('Latest Reviews').should('be.visible');
        cy.contains('button', 'Create Review').should('be.visible');
    })

    // Verify review
    it('Verify Create Review is complete', () => {
        // Click button
        cy.contains('button', 'Create Review').should('be.visible').click()
        // Verify Create Review view
        cy.contains('Create a Review').should('be.visible')
        cy.contains('Rating:').should('be.visible')
        cy.get('[type="radio"][value="5"]').should('be.checked');
        cy.contains('Feedback:').should('be.visible')
        
        cy.writeFeedback(100)
        
        cy.contains('button', 'Submit').should('be.visible')
        cy.contains('button', 'Cancel').should('be.visible').click()
    })

    it('Verify user can cancel review', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.contains('button', 'Cancel').should('be.visible').click()
        // Check cancelled by checking if the review dialog box disappears
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify after user submit/cancel review, review is reset.', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[type="radio"][value="3"]').click({force : true})
        cy.writeFeedback(100)
        cy.contains('button', 'Cancel').should('be.visible').click()
        // Check cancelled by checking if the review dialog box disappears
        //cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[type="radio"][value="5"]').should('be.checked');
        cy.get('[rows="8"]').shadow('contains', '')
    })

    it('Verify user can submit review', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        
        cy.get('[type="radio"][value="3"]').click({force : true})
        cy.get('input[type="radio"][value="3"]').should('be.checked'); 

        cy.writeFeedback(100)
        cy.contains('button', 'Submit').should('be.visible').click()
        // Check submitted by checking if the review dialog box disappears
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
        // message that the comment is submitted
    })

    //star ratings check
    it('Verify user can give 1 star rating', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[type="radio"][value="1"]').click({force : true})
        cy.get('input[type="radio"][value="1"]').should('be.checked'); 

        cy.writeFeedback(100)
        cy.contains('button', 'Submit').should('be.visible').click()
        // Check submitted by checking if the review dialog box disappears
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify user can give 5 star rating', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        
        cy.get('[type="radio"][value="5"]').click({force : true})
        cy.get('[type="radio"][value="5"]').click({force : true})
        cy.get('input[type="radio"][value="5"]').should('be.checked'); 

        cy.writeFeedback(100)

        cy.contains('button', 'Submit').should('be.visible').click()
        // Check submitted by checking if the review dialog box disappears
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');

    })

    it('Verify user cannot give 0 star rating', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[type="radio"][value="5"]').click({force : true})
        cy.get('input[type="radio"][value="5"]').should('not.be.checked'); 

        cy.writeFeedback(100)
        cy.contains('button', 'Submit').should('be.visible').click()
        // Check not submitted by checking if the review dialog box disappears
        cy.get('.MuiDialog-paper[role="dialog"]').should('be.visible');
        // Check error message
        cy.contains('Please give a rating.').should('be.visible')
    })

    // feedback check
    it('Verify user can give review without feedback', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[type="radio"][value="3"]').click({force : true})
        cy.get('input[type="radio"][value="3"]').should('be.checked'); 

        cy.contains('button', 'Submit').should('be.visible').click()
        // Check submitted by checking if the review dialog box disappears
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify user can give review with 500 character feedback', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[type="radio"][value="3"]').click({force : true})
        cy.get('input[type="radio"][value="3"]').should('be.checked'); 
        cy.writeFeedback(500)
        cy.contains('button', 'Submit').should('be.visible').click()
        // Check submitted by checking if the review dialog box disappears
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify user can give review with 499 character feedback', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[type="radio"][value="3"]').click({force : true})
        cy.get('input[type="radio"][value="3"]').should('be.checked'); 
        cy.writeFeedback(499)
        cy.contains('button', 'Submit').should('be.visible').click()
        // Check submitted by checking if the review dialog box disappears
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify user cannot give review with 501 character feedback', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[type="radio"][value="3"]').click({force : true})
        cy.get('input[type="radio"][value="3"]').should('be.checked'); 
        cy.writeFeedback(501)
        //cy.contains('button', 'Submit').should('be.visible').click()
        // Check submitted by checking if the review dialog box disappears
        //cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify user can give review with 1 character feedback', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[type="radio"][value="3"]').click({force : true})
        cy.get('input[type="radio"][value="3"]').should('be.checked'); 
        cy.writeFeedback(1)
        cy.contains('button', 'Submit').should('be.visible').click()
        // Check submitted by checking if the review dialog box disappears
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify user can write feedback with special characters', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[type="radio"][value="3"]').click({force : true})
        cy.get('input[type="radio"][value="3"]').should('be.checked'); 
        
        const specialMessage = faker.lorem.sentence() + ' !@#$%^&*()_+[]{}|;:,./<>?';
        cy.get('[rows="8"]').should('be.visible').type(specialMessage)
    
        cy.contains('button', 'Submit').should('be.visible').click()
        // Check submitted by checking if the review dialog box disappears
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify user cannot submit empty review', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[type="radio"][value="5"]').click({force : true})
        cy.get('input[type="radio"][value="5"]').should('not.be.checked'); 

        cy.contains('button', 'Submit').should('be.visible').click()
        // Check not submitted by checking if the review dialog box disappears
        cy.get('.MuiDialog-paper[role="dialog"]').should('be.visible')
        // Check error message
        cy.contains('Please give a feedback.').should('be.visible')
    })


})

