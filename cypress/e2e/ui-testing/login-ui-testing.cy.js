describe('Login Page module', () => {
    const validUsername = 'johnDoe12433433';
    const validPassword = 'MySecur34e2Password12333';
    const invalidUsername = 'wrongusername';
    const invalidPassword = 'wrongPassword';
      
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
    });
      

    it('Display and  interact with username and password fields', () => {

        cy.get('input[name="username"]')
            .should('exist')
            .should('be.visible')
            .should('be.enabled')
            .type(validUsername)
            .should('have.value', validUsername);
    
        cy.get('input[name="password"]')
            .should('exist')
            .should('be.visible')
            .should('be.enabled')
            .type(validPassword)
            .should('have.value', validPassword);
    
        cy.get('input[name="password"]').should('have.attr', 'type', 'password');
        cy.takeScreenshot('Form is enabled');
    });

    it('Display a Login button that is clickable and accessible', () => {
        
        cy.get('[data-testid="login-button"]')
            .should('exist')
            .should('be.visible')
            .should('be.enabled')
            .click(); 

        cy.get('[data-testid="login-button"]')
            .invoke('attr', 'type')
            .should('eq', 'submit');

            cy.takeScreenshot('Login Button is Enabled');
    });

    it('Log in with correct credentials and redirects to /home', () => {
        cy.get('input[name="username"]').type(validUsername);
        cy.get('input[name="password"]').type(validPassword);
        cy.get('[data-testid="login-button"]').click();
        cy.url({ timeout: 10000 }).should('include', '/home');
        cy.takeScreenshot('Login with Correct Credentials');
    });

    it('Log in with correct username and shows an alert on login with incorrect password', () => {
        cy.get('input[name="username"]').type(validUsername);
        cy.get('input[name="password"]').type(invalidPassword);
        cy.get('[data-testid="login-button"]').click();
    
        cy.on('window:alert', (str) => {
        expect(str).to.contain('Login failed');
        });
    
        cy.url().should('include', '/login');
        cy.takeScreenshot('Login with incorrect password');
    });

    it('Log in with correct password and shows an alert on login with incorrect username', () => {
        cy.get('input[name="username"]').type(invalidUsername);
        cy.get('input[name="password"]').type(validPassword);
        cy.get('[data-testid="login-button"]').click();

        cy.on('window:alert', (str) => {
            expect(str).to.contain('Login failed');
        });
    
        cy.url().should('include', '/login');
        cy.takeScreenshot('Login with incorrect username');
        });

    it('Shows an alert on login with with incorrect username and password (non-existent)', () => {
        cy.get('input[name="username"]').type(invalidUsername);
        cy.get('input[name="password"]').type(invalidPassword);
        cy.get('[data-testid="login-button"]').click();
    
        cy.on('window:alert', (str) => {
        expect(str).to.contain('Login failed');
        });
    
        cy.url().should('include', '/login');
        cy.takeScreenshot('Login with non-existent user');
    });
    
    it('Prevent login when password is empty with correct username', () => {

        cy.get('input[name="username"]').type(validUsername);
        cy.get('input[name="password"]').should('have.value', '');
        cy.get('[data-testid="login-button"]').click();

        cy.on('window:alert', (str) => {
            expect(str).to.contain('Login failed'); 
        });
        cy.url().should('include', '/login');
        cy.takeScreenshot('Login with empty password');
    });

    it('Prevent login when username is empty with correct password', () => {

        cy.get('input[name="username"]').should('have.value', '');
        cy.get('input[name="password"]').type(validPassword);
        cy.get('[data-testid="login-button"]').click();

        cy.on('window:alert', (str) => {
            expect(str).to.contain('Login failed'); 
        });
        cy.url().should('include', '/login');
        cy.takeScreenshot('Login with empty username');
        });

    it('Prevent login when username and password is empty', () => {

        cy.get('input[name="username"]').should('have.value', '');
        cy.get('input[name="password"]').should('have.value', '');
        cy.get('[data-testid="login-button"]').click();

        cy.on('window:alert', (str) => {
            expect(str).to.contain('Login failed'); 
        });
        cy.url().should('include', '/login');
        cy.takeScreenshot('Login without credentials');
        });
       
    });
    