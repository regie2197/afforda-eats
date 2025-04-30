describe('User Registration Flow', () => {
    const randomSuffix = Math.floor(Math.random() * 100);
    const user = {
      firstName: 'Test',
      lastName: 'User',
      email: `testuser${randomSuffix}@example.com`,
      username: `testuser${randomSuffix}`,
      password: 'TestPassword123!',
    };
  
    beforeEach(() => {
        cy.visit('http://localhost:3000/login'); // adjust this if your route is different
        cy.get('[data-testid="go-to-register"]').click();
        cy.contains('Select Account Type').should('be.visible');
        cy.contains('button', 'User').should('exist').click();
        cy.url().should('include', '/register/user');
    });
  
    it('should register a new user successfully', () => {
      cy.get('input[name="firstName"]').type(user.firstName);
      cy.get('input[name="lastName"]').type(user.lastName);
      cy.get('input[name="email"]').type(user.email);
      cy.get('input[name="username"]').type(user.username);
      cy.get('input[name="password"]').type(user.password);
  
      cy.contains('button', 'Register').click();
  
      // Wait for redirection after registration
      cy.url({ timeout: 10000 }).should('include', '/home');
    });
  });
  