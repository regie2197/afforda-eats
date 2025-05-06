describe('User Registration UI Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login'); // Adjust this if your route is different
    cy.NavLogIn();
    cy.contains('button', 'Register').click();
    cy.contains('button', 'User').click();
  });

  it('TC_UI_Register_01: Verify the user registration page loads correctly', () => {
    cy.url().should('include', '/register/user');
  });

  it('TC_UI_Register_02: Verify the user registration form appears correctly', () => {
    cy.get('form').should('be.visible').and('be.centered');
  });

  it('TC_UI_Register_03: Verify the user registration form input functionality and its labels', () => {
    cy.get('input[name="firstName"]').should('be.visible').and('have.attr', 'placeholder', 'First Name');
    cy.get('input[name="lastName"]').should('be.visible').and('have.attr', 'placeholder', 'Last Name');
    cy.get('input[name="email"]').should('be.visible').and('have.attr', 'placeholder', 'Email');
    cy.get('input[name="username"]').should('be.visible').and('have.attr', 'placeholder', 'Username');
    cy.get('input[name="password"]').should('be.visible').and('have.attr', 'placeholder', 'Password');
  });

  it('TC_UI_Register_04: Verify the user registration form shows the Logo "AffordaEats"', () => {
    cy.get('img[alt="AffordaEats"]').should('be.visible');
  });

  it('TC_UI_Register_05: Verify the user registration form shows correct title header', () => {
    cy.contains('h1', 'Create your Account').should('be.visible');
  });

  it('TC_UI_Register_06: Verify the user registration page\'s "register" button is visible', () => {
    cy.contains('button', 'Register').should('be.visible').and('be.enabled');
  });

  it('TC_UI_Register_07: Verify the user registration page\'s "Login" Link is visible and functioning', () => {
    cy.contains('a', 'Login').should('be.visible').click();
    cy.url().should('include', '/login');
  });

  it('TC_UI_Register_08: Verify the user registration page\'s form input fields accept alphanumeric and special characters', () => {
    cy.get('input[name="firstName"]').type('John1!');
    cy.get('input[name="lastName"]').type('Doe1!');
    cy.get('input[name="email"]').type('JohnDoe1!@email.com');
    cy.get('input[name="username"]').type('JoJo1!');
    cy.get('input[name="password"]').type('Password123!');
  });

  it('TC_UI_Register_09: Verify the user registration page\'s form password input field is masked on input', () => {
    cy.get('input[name="password"]').type('Password123!').should('have.attr', 'type', 'password');
  });

  it('TC_UI_Register_10: Verify the user registration page\'s right side image is correct', () => {
    cy.get('img[src*="user-login.jpg"]').should('be.visible');
  });

  it('TC_UI_Register_11: Verify the user registration page\'s "register" button changes color on hover', () => {
    cy.contains('button', 'Register').trigger('mouseover').should('have.css', 'background-color');
  });

  it('TC_UI_Register_12: Verify the user registration page\'s "register" button handles registration correctly', () => {
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="email"]').type('JohnDoe@email.com');
    cy.get('input[name="username"]').type('JohnDoe');
    cy.get('input[name="password"]').type('Password123!');
    cy.contains('button', 'Register').click();
    cy.url().should('include', '/home');
  });

  it('TC_UI_Register_13: Verify the First Name field accepts white spaces', () => {
    cy.get('input[name="firstName"]').type('John Smith');
  });

  it('TC_UI_Register_14: Verify the Last Name field accepts white spaces', () => {
    cy.get('input[name="lastName"]').type('Doe Smith');
  });

  it('TC_UI_Register_15: Verify the Email field does not accept white spaces', () => {
    cy.get('input[name="email"]').type('John Doe@email.com');
    cy.contains('button', 'Register').click();
    cy.contains('Invalid email format').should('be.visible');
  });

  it('TC_UI_Register_16: Verify the Email field does not accept input without "@" symbol', () => {
    cy.get('input[name="email"]').type('JohnDoeemail.com');
    cy.contains('button', 'Register').click();
    cy.contains('Invalid email format').should('be.visible');
  });

  it('TC_UI_Register_17: Verify the Username field does not accept white spaces', () => {
    cy.get('input[name="username"]').type('John Doe');
    cy.contains('button', 'Register').click();
    cy.contains('Invalid username').should('be.visible');
  });

  it('TC_UI_Register_18: Verify form submission does not accept input with fewer than 6 characters', () => {
    cy.get('input[name="password"]').type('12345');
    cy.contains('button', 'Register').click();
    cy.contains('Password must be at least 6 characters').should('be.visible');
  });

  it('TC_UI_Register_19: Verify form submission does not accept empty form submission', () => {
    cy.contains('button', 'Register').click();
    cy.contains('All fields are required').should('be.visible');
  });

  it('TC_UI_Register_20: Verify user registration button functionality', () => {
    cy.contains('button', 'User').click();
    cy.url().should('include', '/register/user');
  });
});

describe('Vendor Registration UI Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login'); // Adjust this if your route is different
    cy.NavLogIn();
    cy.contains('button', 'Register').click();
    cy.contains('button', 'Vendor').click();
  });

  it('TC_UI_Register_21: Verify the vendor registration page loads correctly', () => {
    cy.url().should('include', '/register/vendor');
  });

  it('TC_UI_Register_22: Verify the vendor registration form appears correctly', () => {
    cy.get('form').should('be.visible').and('be.centered');
  });

  it('TC_UI_Register_23: Verify the vendor registration form input functionality and its labels', () => {
    cy.get('input[name="firstName"]').should('be.visible').and('have.attr', 'placeholder', 'First Name');
    cy.get('input[name="lastName"]').should('be.visible').and('have.attr', 'placeholder', 'Last Name');
    cy.get('input[name="email"]').should('be.visible').and('have.attr', 'placeholder', 'Email');
    cy.get('input[name="username"]').should('be.visible').and('have.attr', 'placeholder', 'Username');
    cy.get('input[name="password"]').should('be.visible').and('have.attr', 'placeholder', 'Password');
  });

  it('TC_UI_Register_24: Verify the vendor registration form shows the Logo "AffordaEats"', () => {
    cy.get('img[alt="AffordaEats"]').should('be.visible');
  });

  it('TC_UI_Register_25: Verify the vendor registration form shows correct title header', () => {
    cy.contains('h1', 'Register your business').should('be.visible');
  });

  it('TC_UI_Register_26: Verify the vendor registration page\'s "register as vendor" button is visible', () => {
    cy.contains('button', 'Register as Vendor').should('be.visible').and('be.enabled');
  });

  it('TC_UI_Register_27: Verify the vendor registration page\'s "Login" Link is visible and functioning', () => {
    cy.contains('a', 'Login').should('be.visible').click();
    cy.url().should('include', '/login');
  });

  it('TC_UI_Register_28: Verify the vendor registration page\'s form input fields accept alphanumeric and special characters', () => {
    cy.get('input[name="firstName"]').type('John1!');
    cy.get('input[name="lastName"]').type('Doe1!');
    cy.get('input[name="email"]').type('JohnDoe1!@email.com');
    cy.get('input[name="username"]').type('JoJo1!');
    cy.get('input[name="password"]').type('Password123!');
  });

  it('TC_UI_Register_29: Verify the vendor registration page\'s form password input field is masked on input', () => {
    cy.get('input[name="password"]').type('Password123!').should('have.attr', 'type', 'password');
  });

  it('TC_UI_Register_30: Verify the vendor registration page\'s right side image is correct', () => {
    cy.get('img[src*="vendor-login.jpg"]').should('be.visible');
  });

  it('TC_UI_Register_31: Verify the vendor registration page\'s "register as vendor" button changes color on hover', () => {
    cy.contains('button', 'Register as Vendor').trigger('mouseover').should('have.css', 'background-color');
  });

  it('TC_UI_Register_32: Verify the vendor registration page\'s "register as vendor" button handles registration correctly', () => {
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="email"]').type('JohnDoe@email.com');
    cy.get('input[name="username"]').type('JohnDoe');
    cy.get('input[name="password"]').type('Password123!');
    cy.contains('button', 'Register as Vendor').click();
    cy.url().should('include', '/home');
  });

  it('TC_UI_Register_33: Verify the First Name field accepts white spaces', () => {
    cy.get('input[name="firstName"]').type('John Smith');
  });

  it('TC_UI_Register_34: Verify the Last Name field accepts white spaces', () => {
    cy.get('input[name="lastName"]').type('Doe Smith');
  });

  it('TC_UI_Register_35: Verify the Email field does not accept white spaces', () => {
    cy.get('input[name="email"]').type('John Doe@email.com');
    cy.contains('button', 'Register as Vendor').click();
    cy.contains('Invalid email format').should('be.visible');
  });

  it('TC_UI_Register_36: Verify the Email field does not accept input without "@" symbol', () => {
    cy.get('input[name="email"]').type('JohnDoeemail.com');
    cy.contains('button', 'Register as Vendor').click();
    cy.contains('Invalid email format').should('be.visible');
  });

  it('TC_UI_Register_37: Verify the Username field does not accept white spaces', () => {
    cy.get('input[name="username"]').type('John Doe');
    cy.contains('button', 'Register as Vendor').click();
    cy.contains('Invalid username').should('be.visible');
  });

  it('TC_UI_Register_38: Verify form submission does not accept input with fewer than 6 characters', () => {
    cy.get('input[name="password"]').type('12345');
    cy.contains('button', 'Register as Vendor').click();
    cy.contains('Password must be at least 6 characters').should('be.visible');
  });

  it('TC_UI_Register_39: Verify form submission does not accept empty form submission', () => {
    cy.contains('button', 'Register as Vendor').click();
    cy.contains('All fields are required').should('be.visible');
  });

  it('TC_UI_Register_40: Verify vendor registration button functionality', () => {
    cy.contains('button', 'Vendor').click();
    cy.url().should('include', '/register/vendor');
  });
});