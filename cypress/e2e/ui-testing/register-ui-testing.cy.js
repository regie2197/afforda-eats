describe('User Registration UI testing', () => {
  
    beforeEach(() => {
        cy.visit('http://localhost:3000/login'); // adjust this if your route is different
        cy.NavLogIn();
    });
  
    it('should register a new user successfully', () => {
      cy.contains('button','User').click();
    });

    
  });