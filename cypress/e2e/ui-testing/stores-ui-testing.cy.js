describe ('UI Testing - Store Page 01', () => {
    // TC_StorePage_01
    it('Should verify that Store Page is visible.', () =>{
        // Navigate to Store Page
        cy.visit('https://afforda-eats.vercel.app/store?id=1');
        cy.url().should('include', '/store?id=1');
    });

     // TC_StorePage_02
    it("Should verify that Store Page's information is successfully displayed. ", () =>{
        // Navigate to Store Page
        cy.visit('https://afforda-eats.vercel.app/store?id=1');
        cy.url().should('include', '/store?id=1');

        // Store name Section
        cy.get('.css-1siwxll > :nth-child(1)').should('be.visible')
          .find(':nth-child(1) > .MuiTypography-h4')
          .should('contain.text', 'Affordaeats Jollijeep');

        // 'About' Section
        cy.get('.css-1siwxll > :nth-child(1) > :nth-child(3)').should('be.visible')
          .find('.MuiTypography-body1')
          .should('contain.text', 'About');

        // 'Overall Rating' section
        cy.get('.css-8vivn4').should('be.visible')
          .find('> .MuiCardContent-root > .css-1n5khr6 > .MuiBox-root > .MuiTypography-root')
          .should('contain.text', 'Overall Rating');

        // Menu section
        cy.get('.css-1siwxll > :nth-child(2)').should('be.visible')
          .find('.MuiCardContent-root > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root')
          .should('contain.text', 'Menu');

          cy.get('.css-1siwxll > :nth-child(2)').should('be.visible')
          .find('img')
          .should('be.visible');

        // 'Location & Hours' section
        cy.get('.css-1qtduym > :nth-child(2)').should('be.visible')
          .find('.MuiCardContent-root > :nth-child(1) > .MuiBox-root > .MuiTypography-root')
          .should('contain.text', 'Location & Hours');

        // 'Photos' section
        cy.get('.css-1siwxll > :nth-child(3)').should('be.visible')
          .find('.MuiCardContent-root > .MuiTypography-root')
          .should('contain.text', 'Photos');

           cy.get('.css-1siwxll > :nth-child(3)').should('be.visible') 
             .find('img')
             .should('be.visible');

        // 'Latest Reviews' section
        cy.get('.css-1d9m7i1').should('be.visible')
          .find('.MuiGrid-container > .css-1n5khr6 > .MuiTypography-root')
          .should('contain.text', 'Latest Reviews');
    });

     // TC_StorePage_03
    it('Should verify that user can successfully create a review for Store Page with default rating value.', () =>{
        // Navigate to Store Page
        cy.visit('https://afforda-eats.vercel.app/store?id=1');
        cy.url().should('include', '/store?id=1');

        // 'Latest Reviews' section
        cy.get('.css-1d9m7i1').should('be.visible')
          .find('.MuiGrid-container > .css-1n5khr6 > .MuiTypography-root')
          .should('contain.text', 'Latest Reviews');

          // Click the 'Create Review' button
          cy.get('.MuiButtonBase-root').should('be.visible')
            .should('contain.text', 'Create Review')
            .click();

          // 'Create a Review' Dialog box container
          cy.get('.MuiDialog-container').should('be.visible')
          
          // Write comment
          cy.get('[rows="8"]')
            .should('be.visible')
            .type('Average food, not worth for the price tbh.')
            .should('have.value', 'Average food, not worth for the price tbh.');
         
          // Click the 'Submit' button
          cy.get('.MuiDialogActions-root > :nth-child(1)').should('be.visible')
            .should('contain.text', 'Submit')
            .click();
        
        // 'Create a Review' Dialog box container should not be visible after clicking 'Submit'
        cy.get('.MuiDialog-container').should('not.be.visible')
    });

     // TC_StorePage_04
    it('Should verify that user can successfully create a review for Store Page with 1-star rating value.', () => {
        // Navigate to Store Page
        cy.visit('https://afforda-eats.vercel.app/store?id=1');
        cy.url().should('include', '/store?id=1');

        // 'Latest Reviews' section
        cy.get('.css-1d9m7i1').should('be.visible')
          .find('.MuiGrid-container > .css-1n5khr6 > .MuiTypography-root')
          .should('contain.text', 'Latest Reviews');
          
          // Click the 'Create Review' button
          cy.get('.MuiButtonBase-root').should('be.visible')
            .should('contain.text', 'Create Review')
            .click();

          // 'Create a Review' Dialog box container
          cy.get('.MuiDialog-container').should('be.visible')

          // Select rating  
          cy.get('.MuiGrid-grid-xs-10').should('be.visible')
            .find('[for="«r1»"]')
            .click();

          // Write comment
          cy.get('[rows="8"]')
            .should('be.visible')
            .type('Average food, not worth for the price tbh.')
            .should('have.value', 'Average food, not worth for the price tbh.');

          // Click the 'Submit' button
          cy.get('.MuiDialogActions-root > :nth-child(1)').should('be.visible')
            .should('contain.text', 'Submit')
            .click();

        // 'Create a Review' Dialog box container should not be visible after clicking 'Submit'
        cy.get('.MuiDialog-container').should('not.be.visible')
    });

    // TC_StorePage_05
    it('Should verify that user can successfully create a review for Store Page with 2-stars rating value.', () => {
        // Navigate to Store Page
        cy.visit('https://afforda-eats.vercel.app/store?id=1');
        cy.url().should('include', '/store?id=1');

        // 'Latest Reviews' section
        cy.get('.css-1d9m7i1').should('be.visible')
          .find('.MuiGrid-container > .css-1n5khr6 > .MuiTypography-root')
          .should('contain.text', 'Latest Reviews');
          
          // Click the 'Create Review' button
          cy.get('.MuiButtonBase-root').should('be.visible')
            .should('contain.text', 'Create Review')
            .click();

          // 'Create a Review' Dialog box container
          cy.get('.MuiDialog-container').should('be.visible')

          // Select rating  
          cy.get('.MuiGrid-grid-xs-10').should('be.visible')
            .find('[for="«r2»"]')
            .click();

          // Write comment
          cy.get('[rows="8"]')
            .should('be.visible')
            .type('Average food, not worth for the price tbh.')
            .should('have.value', 'Average food, not worth for the price tbh.');

          // Click the 'Submit' button
          cy.get('.MuiDialogActions-root > :nth-child(1)').should('be.visible')
            .should('contain.text', 'Submit')
            .click();
            
        // 'Create a Review' Dialog box container should not be visible after clicking 'Submit'
        cy.get('.MuiDialog-container').should('not.be.visible')
    });

    // TC_StorePage_06
    it('Should verify that user can successfully create a review for Store Page with 3-stars rating value.', () => {
        // Navigate to Store Page
        cy.visit('https://afforda-eats.vercel.app/store?id=1');
        cy.url().should('include', '/store?id=1');

        // 'Latest Reviews' section
        cy.get('.css-1d9m7i1').should('be.visible')
          .find('.MuiGrid-container > .css-1n5khr6 > .MuiTypography-root')
          .should('contain.text', 'Latest Reviews');
          
          // Click the 'Create Review' button
          cy.get('.MuiButtonBase-root').should('be.visible')
            .should('contain.text', 'Create Review')
            .click();

          // 'Create a Review' Dialog box container
          cy.get('.MuiDialog-container').should('be.visible')

          // Select rating  
          cy.get('.MuiGrid-grid-xs-10').should('be.visible')
            .find('[for="«r3»"]')
            .click();

          // Write comment
          cy.get('[rows="8"]')
            .should('be.visible')
            .type('Average food, not worth for the price tbh.')
            .should('have.value', 'Average food, not worth for the price tbh.');

          // Click the 'Submit' button
          cy.get('.MuiDialogActions-root > :nth-child(1)').should('be.visible')
            .should('contain.text', 'Submit')
            .click();
            
        // 'Create a Review' Dialog box container should not be visible after clicking 'Submit'
        cy.get('.MuiDialog-container').should('not.be.visible')
    });

    // TC_StorePage_07
    it('Should verify that user can successfully create a review for Store Page with 4-stars rating value.', () => {
        // Navigate to Store Page
        cy.visit('https://afforda-eats.vercel.app/store?id=1');
        cy.url().should('include', '/store?id=1');

        // 'Latest Reviews' section
        cy.get('.css-1d9m7i1').should('be.visible')
          .find('.MuiGrid-container > .css-1n5khr6 > .MuiTypography-root')
          .should('contain.text', 'Latest Reviews');
          
          // Click the 'Create Review' button
          cy.get('.MuiButtonBase-root').should('be.visible')
            .should('contain.text', 'Create Review')
            .click();

          // 'Create a Review' Dialog box container
          cy.get('.MuiDialog-container').should('be.visible')

          // Select rating  
          cy.get('.MuiGrid-grid-xs-10').should('be.visible')
            .find('[for="«r4»"]')
            .click();

          // Write comment
          cy.get('[rows="8"]')
            .should('be.visible')
            .type('Average food, not worth for the price tbh.')
            .should('have.value', 'Average food, not worth for the price tbh.');

          // Click the 'Submit' button
          cy.get('.MuiDialogActions-root > :nth-child(1)').should('be.visible')
            .should('contain.text', 'Submit')
            .click();
            
        // 'Create a Review' Dialog box container should not be visible after clicking 'Submit'
        cy.get('.MuiDialog-container').should('not.be.visible')
    });

    // TC_StorePage_08
    it('Should verify that user can create a review for Store Page without any special characters.', () =>{
        // Navigate to Store Page
        cy.visit('https://afforda-eats.vercel.app/store?id=1');
        cy.url().should('include', '/store?id=1');

        // 'Latest Reviews' section
        cy.get('.css-1d9m7i1').should('be.visible')
          .find('.MuiGrid-container > .css-1n5khr6 > .MuiTypography-root')
          .should('contain.text', 'Latest Reviews');

          // Click the 'Create Review' button
          cy.get('.MuiButtonBase-root').should('be.visible')
            .should('contain.text', 'Create Review')
            .click();

          // 'Create a Review' Dialog box container
          cy.get('.MuiDialog-container').should('be.visible')
          
          // Write comment
          cy.get('[rows="8"]')
            .should('be.visible')
            .type('Average food not worth for the price')
            .should('have.value', 'Average food, not worth for the price tbh.');
         
          // Click the 'Submit' button
          cy.get('.MuiDialogActions-root > :nth-child(1)').should('be.visible')
            .should('contain.text', 'Submit')
            .click();
        
        // 'Create a Review' Dialog box container should not be visible after clicking 'Submit'
        cy.get('.MuiDialog-container').should('not.be.visible')
    });

    // TC_StorePage_09
    it('Should verify that user cannot create a review for Store Page when the feedback input is empty.', () =>{
        // Navigate to Store Page
        cy.visit('https://afforda-eats.vercel.app/store?id=1');
        cy.url().should('include', '/store?id=1');

        // 'Latest Reviews' section
        cy.get('.css-1d9m7i1').should('be.visible')
          .find('.MuiGrid-container > .css-1n5khr6 > .MuiTypography-root')
          .should('contain.text', 'Latest Reviews');

          // Click the 'Create Review' button
          cy.get('.MuiButtonBase-root').should('be.visible')
            .should('contain.text', 'Create Review')
            .click();

          // 'Create a Review' Dialog box container
          cy.get('.MuiDialog-container').should('be.visible')
          
          // Write comment
          cy.get('[rows="8"]')
            .should('be.visible')
            .should('have.value', '');
         
          // Click the 'Submit' button
          cy.get('.MuiDialogActions-root > :nth-child(1)').should('be.visible')
            .should('contain.text', 'Submit')
            .click();

          // 'Create a Review' Dialog box container should remain visible
          cy.get('.MuiDialog-container').should('be.visible')
    });

     // TC_StorePage_10
    it('Should verify that user can successfully cancel a written review for Store Page.', () => {
        // Navigate to Store Page
        cy.visit('https://afforda-eats.vercel.app/store?id=1');
        cy.url().should('include', '/store?id=1');

        // 'Latest Reviews' section
        cy.get('.css-1d9m7i1').should('be.visible')
          .find('.MuiGrid-container > .css-1n5khr6 > .MuiTypography-root')
          .should('contain.text', 'Latest Reviews');
          
          // Click the 'Create Review' button
          cy.get('.MuiButtonBase-root').should('be.visible')
            .should('contain.text', 'Create Review')
            .click();

          // 'Create a Review' Dialog box container
          cy.get('.MuiDialog-container').should('be.visible')

          // Select rating  
          cy.get('.MuiGrid-grid-xs-10').should('be.visible')
            .find('[for="«r1»"]')
            .click();

          // Write comment
          cy.get('[rows="8"]')
            .should('be.visible')
            .type('Average food, not worth for the price tbh.')
            .should('have.value', 'Average food, not worth for the price tbh.');

          // Click the 'Cancel' button
          cy.get('.MuiDialogActions-root > :nth-child(2)').should('be.visible')
            .should('contain.text', 'Cancel')
            .click();
            
        // 'Create a Review' Dialog box container should not be visible after clicking 'Cancel'
        cy.get('.MuiDialog-container').should('not.be.visible')
    });
});

