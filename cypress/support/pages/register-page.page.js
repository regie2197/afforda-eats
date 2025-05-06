export class RegistrationPage {
    fillForm(user) {
        if (user.firstName) cy.get('input[name="firstName"]').type(user.firstName).and('have.value', user.firstName)
        if (user.lastName) cy.get('input[name="lastName"]').type(user.lastName).and('have.value', user.lastName)
        if (user.email) cy.get('input[name="email"]').type(user.email).and('have.value', user.email)
        if (user.username) cy.get('input[name="username"]').type(user.username).and('have.value', user.username)
        if (user.password) cy.get('input[name="password"]').type(user.password).and('have.value', user.password)
            // return cy.get('form'); 
    }
    fillFormVendor(vendor) {
        if (vendor.firstName) cy.get('input[name="firstName"]').type(vendor.firstName).and('have.value', vendor.firstName)
        if (vendor.lastName) cy.get('input[name="lastName"]').type(vendor.lastName).and('have.value', vendor.lastName)
        if (vendor.email) cy.get('input[name="email"]').type(vendor.email).and('have.value', vendor.email)
        if (vendor.username) cy.get('input[name="username"]').type(vendor.username).and('have.value', vendor.username)
        if (vendor.password) cy.get('input[name="password"]').type(vendor.password).and('have.value', vendor.password)
    }
    assertFields() {
        cy.get('input[type="text"][name="firstName"]').should('be.visible')
        cy.get('input[type="text"][name="lastName"]').should('be.visible')
        cy.get('input[type="text"][name="email"]').should('be.visible')
        cy.get('input[type="text"][name="username"]').should('be.visible')
        cy.get('input[type="password"][name="password"]').should('be.visible')

    }
    assertFieldsVendor() {
        cy.get('.css-1xzvf8u > img').should('be.visible')
        cy.get('input[type="text"][name="firstName"]').should('be.visible')
        cy.get('input[type="text"][name="lastName"]').should('be.visible')
        cy.get('input[type="text"][name="email"]').should('be.visible')
        cy.get('input[type="text"][name="username"]').should('be.visible')
        cy.get('input[type="password"][name="password"]').should('be.visible')

    }
    clickSubmit() {
        cy.get('.MuiButtonBase-root').should('be.visible').and('not.be.disabled');
        cy.get('.MuiButtonBase-root').click();
        // cy.wait(2000)
        
    }

    clickLoginLink() {
        cy.get('a[href="/login"]').click();
    }
}
