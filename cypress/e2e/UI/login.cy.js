/// <reference types ="cypress" />

describe('Feature 1 - Login Test Suite', () => {

    // create constant test data for valid and invalid data
    const vUser = 'tester'
    const vPassword = 'password123'
    const ivUser = 'notTester'
    const ivPassword = 'notPassword123'

    // go to the affordaeats page
    beforeEach(() =>{
        cy.visit('http://localhost:3000/login')
        //cy.visit('https://afforda-eats.vercel.app/login')
        cy.url().should('include', '/login')
    })

    // verify all exists
    it('Verify all elements exists.', () => {
        cy.get('img[src="/login-illustration.jpg"]').should('be.visible') // image
        cy.get('img[src="/logo.png"]').should('be.visible') // logo
        cy.contains('h5', 'AffordaEats').should('be.visible').and('contain', 'AffordaEats') // Brand name check
        cy.contains('h6', 'Login to your account').should('be.visible');
        cy.get('input[name="username"]').should('be.visible').and('contain', '').type('tester').should('have.value', 'tester') // username
        cy.get('input[name="password"]').should('be.visible').and('contain', '').type('password').should('have.value', 'password')
        cy.get('input[type="password"]').should('exist') // password is a password field
        cy.get('button[type="submit"]').should('contain.text', 'Login').and('be.visible').and('not.be.disabled') // login button
        cy.contains('button', 'Register').should('be.visible').and('not.be.disabled') // register
    })

    // Successful Login
    it('Verify Successful Login when using Valid Username and Password', () => {
        cy.Login(vUser, vPassword)
        //cy.visit('https://afforda-eats.vercel.app/home')// only checking
        cy.url().should('include', '/home')
    })

    // Tests for invalid inputs
    it('Verify Unsuccessful Login when using Invalid Username',() => {
        cy.Login(ivUser, vUser)
        cy.url().should('include', '/login')
        cy.VerifyErrMes(1)
    })

    it('Verify Unsuccessful Login when using Invalid Password',() => {
        cy.Login(vUser, ivPassword)
        cy.url().should('include', '/login')
        cy.VerifyErrMes(1)
    })

    it('Verify Unsuccessful Login when using Invalid Username and Password',() => {
        cy.Login(ivUser, ivPassword)
        cy.url().should('include', '/login')
        cy.VerifyErrMes(1)
    })

    // Tests for blanks
    it('Verify Unsuccessful Login when Password is Blank',() => {
        cy.Login(vUser, '')
        cy.url().should('include', '/login')
        cy.VerifyErrMes(2)
    })

    it('Verify Unsuccessful Login when Username is Blank',() => {
        cy.Login('', vPassword)
        cy.url().should('include', '/login')
        cy.VerifyErrMes(2)
    })

    it('Verify Unsuccessful Login when Username and Password are both Blank',() => {
        cy.Login('', '')
        cy.url().should('include', '/login')
        cy.VerifyErrMes(2)
    })

    it('Verify Can Login with special characters',() => {
        cy.Login('t2$ter@!', 'p@ssw()rd!2#')
        cy.url().should('include', '/home')
    })

    
    

    

})