/* ------------------------------- IMPORTS -------------------------------------- */
import { createVendor } from '../support/user-faker.utils.js';
import { createStore } from '../support/user-faker.utils.js';
import { createFoodData } from '../support/user-faker.utils.js';
import RegisterPage from './registerPage.js';


/* ----------------------------- GLOBAL COMMANDS ------------------------------ */
Cypress.Commands.add('takeScreenshot', (prefix = '') => {
    const timestamp = new Date().toISOString().split('T')[0]; 
    const testName = Cypress.mocha.getRunner().suite.title + '-' + Cypress.mocha.getRunner().test.title;

    const screenshotName = `${prefix}-${testName}-${timestamp}`;
    cy.screenshot(screenshotName); // 
  });







































/* ----------------------------- USER/REGIST API COMMANDS ----------------------- */































































/* ----------------------------- FOOD API COMMANDS ----------------------------- */

Cypress.Commands.add('createFood', () =>{
    let foodData = createFoodData()
    cy.writeFile('cypress/fixtures/foodData.json', foodData);
    cy.api({
        method: 'POST',
        url: 'http://localhost:4000/api/food',
        body: foodData
    }).should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('name', `${foodData.name}`)
    })
})













































/* ----------------------------- REVIEW API COMMANDS --------------------------- */























































/* ----------------------------- STORE API COMMANDS ----------------------------- */
Cypress.Commands.add('createVendor', () => {
    let vendorData = createVendor()
    cy.writeFile('cypress/fixtures/vendorData.json', vendorData);
    cy.api({
        method: 'POST',
        url: 'http://localhost:4000/api/register',
        body: vendorData
    }).should((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('email', `${vendorData.email}`)
        expect(response.body).to.have.property('username', `${vendorData.username}`)
    })
});

Cypress.Commands.add('createStore', () => {
    let storeData = createStore()
    cy.writeFile('cypress/fixtures/storeData.json', storeData);
})

Cypress.Commands.add('createFood', () => {
    const foodData = createFoodData();
    cy.writeFile('cypress/fixtures/foodData.json', foodData);
  
    cy.readFile('cypress/fixtures/vendorData.json').then((vendorData) => {
      cy.api({
        method: 'POST',
        url: 'http://localhost:4000/api/food',
        body: foodData,
        auth: {
          username: vendorData.username,
          password: vendorData.password,
        },
      }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', foodData.name);
      });
    });
  });
  


/* ----------------------------- LOGIN UI COMMANDS ----------------------------- */





























































/* ----------------------------- REGIST UI COMMANDS ----------------------------- */

Cypress.Commands.add('UserReg', () => {
    cy.get('[data-testid=go-to-register]').click();
    cy.wait(1000);
    cy.contains('button','User').click();
});

Cypress.Commands.add('VendorReg', () => {
  cy.get('[data-testid=go-to-register]').click();
  cy.wait(1000);
  cy.contains('button','Vendor').click();
});

Cypress.Commands.add('RegFormVisibility', () => {
  RegisterPage.visibleAndLabel(RegisterPage.firstNameField, 'First Name');
  RegisterPage.visibleAndLabel(RegisterPage.lastNameField, 'Last Name');
  RegisterPage.visibleAndLabel(RegisterPage.emailField, 'Email');
  RegisterPage.visibleAndLabel(RegisterPage.usernameField, 'Username');
  RegisterPage.visibleAndLabel(RegisterPage.passwordField, 'Password');
});

Cypress.Commands.add('RegFormFill' , () => {
  RegisterPage.fillRegistrationForm();
});

Cypress.Commands.add('alertAssertion' , () => {
  cy.once('window:alert', (text) => {
    expect(text).to.equal('Registration failed: Please try again');
  });
});






































































/* ----------------------------- HOMEPAGE UI COMMANDS ----------------------------- */






























































/* ----------------------------- STORE UI COMMANDS ----------------------------- */



