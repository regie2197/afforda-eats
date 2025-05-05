/// <reference types ="cypress" />

// add faker here
import { faker } from '@faker-js/faker';
var fakeMessage

describe('Feature - Store Test Suite', () => {
    beforeEach(() =>{
        //cy.visit('http://localhost:3000/store?id=1')
        cy.visit('https://afforda-eats.vercel.app/store?id=1')
        cy.url().should('include', '/store?id=1')
    })

    it('Verify all elements exists', () => {
        cy.get('img[src="/logo.png"]').should('be.visible') // logo
        cy.get('a[href="#homepage"]').should('be.visible').and('contain', 'AffordaEats');
        cy.get('div.AppBar_burger__0Q3Dm').should('be.visible');
        cy.get('img[alt="Picture of the Webpage"]').should('be.visible');
        cy.get('div.MuiTypography-h4').contains('Affordaeats Jollijeep').should('be.visible');
        cy.get('p.MuiTypography-body2').contains('Masarap • Mesherep • Meisirip').should('be.visible');
        cy.contains('Photos').should('be.visible')
        //cy.get('ul.MuiImageList-root.css-z436pq-MuiImageList-root').should('be.visible');
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

        cy.contains('Location & Hours').should('be.visible');

        cy.contains('Location').should('be.visible');
        cy.get('iframe').should('be.visible')
        //cy.get('p.MuiTypography-body2.css-ouizud-MuiTypography-root').should('be.visible');
        cy.contains('Operating Hours').should('be.visible');
        //cy.get('p.MuiTypography-body2.css-ouizud-MuiTypography-root').should('be.visible');
        cy.contains('Latest Reviews').should('be.visible');
        cy.contains('button', 'Create Review').should('be.visible');

    })

    // check review
    it('Verify Create Review is complete', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.contains('Create a Review').should('be.visible')
        cy.contains('Rating:').should('be.visible')
        cy.get('[for="«r3»"]').click()
        cy.get('input[name="half-rating"][value="3"]').should('be.checked');
        cy.contains('Feedback:').should('be.visible')
        
        cy.writeFeedback(100)

        cy.contains('button', 'Submit').should('be.visible')
        cy.contains('button', 'Cancel').should('be.visible').click()
    })

    it('Verify can cancel review', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.contains('button', 'Cancel').should('be.visible').click()
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify user can submit review', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[for="«r1»"]').should('be.visible').click()
        cy.get('input[name="half-rating"][value="1"]').should('be.checked');
        cy.writeFeedback(100)
        cy.contains('button', 'Submit').should('be.visible').click()
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    //star ratings check
    it('Verify can give 1 star rating', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[for="«r1»"]').should('be.visible').click()
        cy.get('input[name="half-rating"][value="1"]').should('be.checked');
        cy.writeFeedback(100)
        cy.contains('button', 'Submit').should('be.visible').click()
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify can give 5 star rating', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        
        cy.get('[for="«r5»"]').click()
        cy.get('[for="«r5»"]').click()
        
        cy.get('input[name="half-rating"][value="5"]').should('be.checked');

        cy.writeFeedback(100)

        cy.contains('button', 'Submit').should('be.visible').click()
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');

    })

    it('Verify cannot give 0 star rating', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[for="«r1»"]').click()
        cy.get('[for="«r1»"]').click()
        cy.writeFeedback(100)
        cy.contains('button', 'Submit').should('be.visible').click()
        cy.get('.MuiDialog-paper[role="dialog"]').should('be.visible');
    })

    // feedback check
    it('Verify can give review without feedback', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[for="«r5»"]').should('be.visible').click()
        cy.contains('button', 'Submit').should('be.visible').click()
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify can give review with 500 character feedback', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[for="«r5»"]').should('be.visible').click()
        cy.writeFeedback(500)
        cy.contains('button', 'Submit').should('be.visible').click()
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify can give review with 499 character feedback', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[for="«r5»"]').should('be.visible').click()
        cy.writeFeedback(499)
        cy.contains('button', 'Submit').should('be.visible').click()
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify can give review with 501 character feedback', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[for="«r5»"]').should('be.visible').click()
        cy.writeFeedback(501)
        cy.contains('button', 'Submit').should('be.visible').click()
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify can give review with 1 character feedback', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[for="«r5»"]').should('be.visible').click()
        cy.writeFeedback(1)
        cy.contains('button', 'Submit').should('be.visible').click()
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })

    it('Verify can write feedback with special characters', () => {
        cy.contains('button', 'Create Review').should('be.visible').click()
        cy.get('[for="«r5»"]').should('be.visible').click()
        
        const specialMessage = faker.lorem.sentence() + ' !@#$%^&*()_+[]{}|;:,./<>?';
        cy.get('[rows="8"]').should('be.visible').type(specialMessage)
    
        cy.contains('button', 'Submit').should('be.visible').click()
        cy.get('.MuiDialog-paper[role="dialog"]').should('not.be.visible');
    })


})

