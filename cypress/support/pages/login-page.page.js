export class LoginPage {
    loginView() {
        cy.get('input[type="text"][name="username"]').should('be.visible');
        cy.get('input[type="password"][name="password"]').should('be.visible');
        cy.get('h5').contains('AffordaEats')
        cy.get('button[type="submit"]').should('be.visible').and('not.be.disabled');
        cy.get('button').should('contain', 'Register').and('not.be.disabled');
    }

    assertRegisterTextButton() {
        cy.get('button').should('contain', 'Register').and('not.be.disabled');
        cy.get('.MuiTypography-inherit').click()
        cy.get('#«Rahtrl7»').should('contain', 'Select Account Type');
        cy.get('.MuiButton-root')
            .should('be.visible')
            .and('contain', 'User');

        cy.get('.MuiButton-root')
            .should('be.visible')
            .and('contain', 'Vendor');
    }

    clickLoginButton() {
        cy.get('a[href="/login"]').should('be.visible').and('not.be.disabled')
        cy.get('a[href="/login"]').click()
    }
    clickUserButton() {
        // cy.get('.MuiDialogActions-root > :nth-child(1)').click()
        cy.contains('.MuiButton-root', 'User').click()
  
    }
    clickVendorButton() {
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()
    }

}
