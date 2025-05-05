describe('Admin Dashboard', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/admin-dashboard')

    });
    it('Verify the layout of the admin dashboard page', () => {
        cy.get('img').should('have.attr', 'alt', 'AffordaEats Logo');
        cy.get('.MuiBox-root > .MuiTypography-root').should('be.visible')
        cy.get('.MuiContainer-root > .MuiBox-root > :nth-child(1)').should('be.visible')
        cy.get('.MuiContainer-root > .MuiBox-root > :nth-child(2)').should('be.visible')
        cy.get('.MuiToolbar-root > .MuiButtonBase-root').should('be.visible').and('not.be.disabled')

    });
    it('Verify format of "Users" user information', () => {
        cy.get('.MuiContainer-root > .MuiBox-root > :nth-child(1)').should('be.visible')
        cy.get('.MuiBox-root > :nth-child(1) > .MuiTypography-h5').and('contain', 'Users')
        cy.get(':nth-child(1) > :nth-child(2) > .MuiCardContent-root').should('be.visible').and('contain', 'View Reviews')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiButtonBase-root').should('be.visible').and('not.be.disabled')

    });
    it('Verify "View Review" button under Name in Users Card', () => {
        cy.get('.MuiContainer-root > .MuiBox-root > :nth-child(1)').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .MuiCardContent-root').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .MuiCardContent-root > .MuiTypography-root').should('exist');
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiButtonBase-root').click()
        cy.get('#«R1jrl7»').should('be.visible')
    });
    it('Verify user "Review" section after clicking "View Review" button', () => {
        cy.get('.MuiContainer-root > .MuiBox-root > :nth-child(1)').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .MuiCardContent-root').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .MuiCardContent-root > .MuiTypography-root').should('exist');
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiButtonBase-root').click()
        cy.get('#«R1jrl7»').should('be.visible')
        cy.get('.MuiDialogContent-root > :nth-child(1)').should('be.visible')
        cy.get('.MuiDialogContent-root > :nth-child(2)').should('be.visible')
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').should('be.visible').and('not.be.disabled')
    });
    it('Verify clicking "Close" button located in review section after clicking "View Review" button', () => {
        cy.get('.MuiContainer-root > .MuiBox-root > :nth-child(1)').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .MuiCardContent-root').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .MuiCardContent-root > .MuiTypography-root').should('exist');
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiButtonBase-root').click()
        cy.get('#«R1jrl7»').should('be.visible')
        cy.get('.MuiDialogContent-root > :nth-child(1)').should('be.visible')
        cy.get('.MuiDialogContent-root > :nth-child(2)').should('be.visible')
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').should('be.visible').and('not.be.disabled').click()
    });
        
    it('Verify clicking anywhere in the dim layer background in the webpage after clicking "View Review" button', () => {
        cy.get('.MuiContainer-root > .MuiBox-root > :nth-child(1)').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .MuiCardContent-root').should('be.visible');
        cy.get(':nth-child(1) > :nth-child(2) > .MuiCardContent-root > .MuiTypography-root')
            .invoke('text')
            .should('not.be.empty');
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiButtonBase-root').should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiButtonBase-root').click()
        cy.get('.MuiDialogActions-root').should('be.visible')
        cy.get('#«R1jrl7»')
            .invoke('text')
            .should('not.be.empty');
        cy.get('.MuiDialog-container.MuiDialog-scrollPaper.css-hz1bth-MuiDialog-container').should('be.visible');
        // Ensure the backdrop is visible and press ESC
        cy.get('body').click(0, 0)
        // cy.get('body').type('{esc}')
        //cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
        // Assert the modal is no longer visible
        cy.get('.MuiDialog-container.MuiDialog-scrollPaper.css-hz1bth-MuiDialog-container', { timeout: 2000 }).should('not.be.visible');
    });
    it('Verify clicking anywhere in the dim layer background in the webpage after clicking "View Review" button', () => {
        cy.get('.MuiContainer-root > .MuiBox-root > :nth-child(1)').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .MuiCardContent-root').should('be.visible');
        cy.get(':nth-child(1) > :nth-child(2) > .MuiCardContent-root > .MuiTypography-root')
            .invoke('text')
            .should('not.be.empty');
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiButtonBase-root').should('be.visible')
        cy.get(':nth-child(2) > .MuiCardContent-root > .MuiButtonBase-root').click()
        cy.get('.MuiDialogActions-root').should('be.visible')
        cy.get('#«R1jrl7»')
            .invoke('text')
            .should('not.be.empty');
        cy.get('.MuiDialog-container.MuiDialog-scrollPaper.css-hz1bth-MuiDialog-container').should('be.visible');
        // Ensure the backdrop is visible and press ESC
        // cy.get('body').click(0, 0)
        cy.get('body').type('{esc}')
        //cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
        // Assert the modal is no longer visible
        cy.get('.MuiDialog-container.MuiDialog-scrollPaper.css-hz1bth-MuiDialog-container', { timeout: 2000 }).should('not.be.visible');
    });
    it('Verify format of "Vendors" user information', () => {
        cy.get(':nth-child(2) > .MuiTypography-h5').should('be.visible').and('contain', 'Vendors')
        cy.get(':nth-child(1) > :nth-child(2) > .MuiCardContent-root').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > .MuiCardContent-root').should('contain', 'View Reviews')
        //Error as the admin-dashboard page doesn't have "View Reviews" button under Vendors Card
    });
    it('Verify "View Review" button under Name in Vendor Card', () => {
        cy.get(':nth-child(2) > .MuiTypography-h5').should('be.visible').and('contain', 'Vendors')
        cy.get(':nth-child(1) > :nth-child(2) > .MuiCardContent-root').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > .MuiCardContent-root').should('contain', 'View Reviews').click()
        //Also error as the admin-dashboard page doesn't have "View Reviews" button under Vendors Card
    });
    it('Verify "Logout" button functionality', () => {
        cy.get('.MuiToolbar-root > .MuiButtonBase-root').should('be.visible').and('not.be.disabled')
        cy.get('.MuiToolbar-root > .MuiButtonBase-root').click()
        cy.url().should('include', 'login')
    });
});

