/// <reference types ="cypress" />
describe('User Registration UI Testing', () => {
  beforeEach(() => {
    cy.wait(1000);
    cy.visit('http://localhost:3000'); 
    cy.UserReg();
    cy.wait(2000);
  });

  it('Verify the user registration page loads correctly', () => {
    cy.url().should('include', '/register/user');
  });

  it('Verify the user registration form appears correctly', () => {
    cy.get('form').should('be.visible');
  });

  it('Verify the user registration form input functionality and its labels', () => {
    cy.RegFormVisibility();
  });

  it('Verify the user registration form shows the Logo "AffordaEats"', () => {
    cy.get('img[alt="AffordaEats Logo"]').should('be.visible');
    cy.contains('h5', 'AffordaEats').should('be.visible');
  });

  it('Verify the user registration form shows correct title header', () => {
    cy.contains('h6', 'Create your account').should('be.visible');
  });

  it('Verify the user registration page\'s "register" button is visible', () => {
    cy.contains('button', 'Register').should('be.visible').and('be.enabled');
  });

  it('Verify the user registration page\'s "Login" Link is visible and functioning', () => {
    cy.contains('a', 'Login').should('be.visible').click();
    cy.url().should('include', '/login');
  });

  it('Verify the user registration page\'s form input fields accept alphanumeric and special characters', () => {
    cy.RegFormFill();
  });

  it('Verify the user registration page\'s form password input field is masked on input', () => {
    cy.wait(2000);
    cy.get('input[name="password"]').type('Password123!').should('have.attr', 'type', 'password');
  });

  it('Verify the user registration page\'s right side image is correct', () => {
    cy.get('img[src*="user-login.jpg"]').should('be.visible');
  });

  it('Verify the user registration page\'s "register" button changes color on hover', () => {
    cy.contains('button', 'Register').trigger('mouseover').should('have.css', 'background-color');
  });

  it('Verify the user registration page\'s "register" button handles registration correctly', () => {
    cy.RegFormFill();
    cy.contains('button', 'Register').click();
    cy.url().should('include', '/home');
  });

  it('Verify the First Name field accepts white spaces', () => {
    cy.RegFormFill();
    cy.get('input[name="firstName"]').type(' Smith');
    cy.contains('button', 'Register').click();
    cy.url().should('include', '/home');
  });

  it('Verify the Last Name field accepts white spaces', () => {
    cy.RegFormFill();
    cy.get('input[name="lastName"]').type(' Doe');
    cy.contains('button', 'Register').click();
    cy.url().should('include', '/home');
  });

  it('Verify the Email field does not accept white spaces', () => {
    cy.RegFormFill();
    cy.get('input[name="email"]').clear();
    cy.get('input[name="email"]').type('John Doe@email.com');
    cy.contains('button', 'Register').click();
    cy.alertAssertion();
  });

  it('Verify the Email field does not accept input without "@" symbol', () => {
    cy.RegFormFill();
    cy.get('input[name="email"]').clear();
    cy.get('input[name="email"]').type('JohnDoeemail.com');
    cy.contains('button', 'Register').click();
    cy.alertAssertion();
  });

  it('Verify the Username field does not accept white spaces', () => {
    cy.RegFormFill();
    cy.get('input[name="username"]').clear();
    cy.get('input[name="username"]').type('John Doe');
    cy.contains('button', 'Register').click();
    cy.alertAssertion();
  });

  it('Verify form submission does not accept input with fewer than 6 characters', () => {
    cy.RegFormFill();
    cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type('12345');
    cy.contains('button', 'Register').click();
    cy.alertAssertion();
  });

  it('Verify form submission does not accept empty form submission', () => {
    cy.contains('button', 'Register').click();
    cy.alertAssertion();
  });

  it('Verify user registration button functionality', () => {
    cy.visit('http://localhost:3000'); 
    cy.UserReg();
    cy.url().should('include', '/register/user');
  });
});

describe('Vendor Registration UI Testing', () => {
  beforeEach(() => {
    cy.wait(1000);
    cy.visit('http://localhost:3000/login'); // Adjust this if your route is different
    cy.VendorReg();
    cy.wait(2000);
  });

  it('Verify the vendor registration page loads correctly', () => {
    cy.url().should('include', '/register/vendor');
  });

  it('Verify the vendor registration form appears correctly', () => {
    cy.get('form').should('be.visible');
  });

  it('Verify the vendor registration form input functionality and its labels', () => {
    cy.RegFormVisibility(); 
  });

  it('Verify the vendor registration form shows the Logo "AffordaEats"', () => {
    cy.get('img[alt="AffordaEats Logo"]').should('be.visible');
    cy.contains('h5', 'AffordaEats').should('be.visible');
  });

  it('Verify the vendor registration form shows correct title header', () => {
    cy.contains('h6', 'Register Your Business').should('be.visible');
  });

  it('Verify the vendor registration page\'s "register as vendor" button is visible', () => {
    cy.contains('button', 'Register as Vendor').should('be.visible').and('be.enabled');
  });

  it('Verify the vendor registration page\'s "Login" Link is visible and functioning', () => {
    cy.contains('a', 'Login').should('be.visible').click();
    cy.url().should('include', '/login');
  });

  it('Verify the vendor registration page\'s form input fields accept alphanumeric and special characters', () => {
    cy.RegFormFill();
  });

  it('Verify the vendor registration page\'s form password input field is masked on input', () => {
    cy.wait(2000);
    cy.get('input[name="password"]').type('Password123!').should('have.attr', 'type', 'password');
  });

  it('Verify the vendor registration page\'s right side image is correct', () => {
    cy.get('img[src*="vendor-login.jpg"]').should('be.visible');
  });

  it('Verify the vendor registration page\'s "register as vendor" button changes color on hover', () => {
    cy.contains('button', 'Register as Vendor').trigger('mouseover').should('have.css', 'background-color');
  });

  it('Verify the vendor registration page\'s "register as vendor" button handles registration correctly', () => {
    cy.RegFormFill();
    cy.contains('button', 'Register as Vendor').click();
    cy.url().should('include', '/home');
  });

  it('Verify the First Name field accepts white spaces', () => {
    cy.RegFormFill();
    cy.get('input[name="firstName"]').type(' Smith');
    cy.contains('button', 'Register as Vendor').click();
    cy.url().should('include', '/home');
  });

  it('Verify the Last Name field accepts white spaces', () => {
    cy.RegFormFill();
    cy.get('input[name="lastName"]').type(' Doe');
    cy.contains('button', 'Register as Vendor').click();
    cy.url().should('include', '/home');
  });

  it('Verify the Email field does not accept white spaces', () => {
    cy.RegFormFill();
    cy.get('input[name="email"]').clear();
    cy.get('input[name="email"]').type('John Doe@email.com');
    cy.contains('button', 'Register as Vendor').click();
    cy.alertAssertion();
  });

  it('Verify the Email field does not accept input without "@" symbol', () => {
    cy.RegFormFill();
    cy.get('input[name="email"]').clear();
    cy.get('input[name="email"]').type('JohnDoeemail.com');
    cy.contains('button', 'Register as Vendor').click();
    cy.alertAssertion();
  });

  it('Verify the Username field does not accept white spaces', () => {
    cy.RegFormFill();
    cy.get('input[name="username"]').clear();
    cy.get('input[name="username"]').type('John Doe');
    cy.contains('button', 'Register as Vendor').click();
    cy.alertAssertion();
  });

  it('Verify form submission does not accept input with fewer than 6 characters', () => {
    cy.RegFormFill();
    cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type('12345');
    cy.contains('button', 'Register as Vendor').click();
    cy.alertAssertion();
  });

  it('Verify form submission does not accept empty form submission', () => {
    cy.contains('button', 'Register as Vendor').click();
    cy.alertAssertion();
  });

  it('Verify vendor registration button functionality', () => {
    cy.visit('http://localhost:3000'); 
    cy.VendorReg();
    cy.url().should('include', '/register/vendor');
  });
});