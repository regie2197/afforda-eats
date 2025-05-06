describe('Admin Dashboard - AffordaEats Logo and Title', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/admin-dashboard');
  });

  it('Display logo and title in the Admin Dashboard', () => {
    cy.get('img[alt="AffordaEats Logo"]').should('be.visible');
    cy.contains('AffordaEats').should('be.visible');
    cy.takeScreenshot('Verify Logo and Title');
  });

  it('Vendors are displayed in the admin dashboard', () => {
    cy.contains('Vendors').should('be.visible'); 
  
    cy.get('div').contains('Vendors').parent().within(() => {
        cy.get('h6').should('have.length.greaterThan', 0);
      });
      cy.takeScreenshot('Verify Vendors');
  });

  it('Users are displayed in the admin dashboard', () => {
    cy.contains('Users').should('be.visible');
  
    cy.get('div').contains('Users').parent().within(() => {
        cy.get('h6').should('have.length.greaterThan', 0);
      });
      cy.takeScreenshot('Verify Users');
  });

  it('each user has a "View Reviews" button that is enabled', () => {
    cy.contains('Users').should('be.visible');
  
    cy.get('div').contains('Users').parent().within(() => {
        cy.contains('View Reviews').should('exist');
        cy.get('button').contains('View Reviews').each(($btn) => {
            cy.wrap($btn).should('be.enabled');
          });
      });
      cy.takeScreenshot('Verify Review Button Enabled');
  });

  it('clicking "View Reviews" button opens a modal showing user reviews', () => {
    cy.contains('Users').should('be.visible');
    cy.contains('View Reviews').first().click();
    cy.get('.MuiDialog-container').should('be.visible');
    cy.get('.MuiDialogTitle-root').should('exist').and('contain.text', "'s Reviews");
    cy.takeScreenshot('Verify Review Button Opens Modal');
  });

  it('reviews modal has a Close button', () => {
    cy.contains('Users').should('be.visible');
    cy.contains('View Reviews').first().click();
    cy.get('.MuiDialog-container').should('be.visible');
    cy.get('button').contains('Close').should('be.visible').and('be.enabled');
    cy.takeScreenshot('Verify Close Button Enabled');
  });
  
  it('Close button on the reviews modal is enabled and clickable', () => {
    cy.contains('Users').should('be.visible');
    cy.contains('View Reviews').first().click();
    cy.get('.MuiDialog-container').should('be.visible');
    cy.get('button').contains('Close').should('be.visible').and('be.enabled');
    cy.get('button').contains('Close').click();
    cy.takeScreenshot('Verify Close Button clickable');
  });

  it('closes the user review modal after clicking the Close button', () => {
    cy.contains('Users').should('be.visible');

    cy.get('div').contains('Users').parent().within(() => {
        cy.get('button').contains('View Reviews').first().click();
      });
  
    cy.get('.MuiDialog-container').should('be.visible');
    cy.get('button').contains('Close').click();
    cy.get('.MuiDialog-container').should('not.exist');
    cy.takeScreenshot('Verify Close Button close the modal');
  });
  

  it('should close the reviews modal when clicking outside of it', () => {
    cy.contains('View Reviews').first().click();
    cy.get('.MuiDialog-root').should('be.visible');
    cy.get('body').click(0, 0);
    cy.get('.MuiDialog-root').should('not.exist');
    cy.takeScreenshot('Verify clicking outside the modal close the modal');
  });

  it('should display the Log Out button on the admin dashboard', () => {
    cy.get('button').contains('Logout').should('be.visible').and('be.enabled'); 
    cy.takeScreenshot('Verify Logout Button is Visible');
  });

  it('should redirect to the login page when the Log Out button is clicked', () => {
    
    cy.get('button').contains('Logout').click();
    cy.url().should('include', '/login'); 
    cy.takeScreenshot('Verify Logout Button logs out the user');
  });
  
});


