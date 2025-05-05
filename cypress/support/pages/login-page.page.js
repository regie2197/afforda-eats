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
        cy.get('#«Rl3rnb»').should('contain', 'Select Account Type');
        cy.get('.MuiDialogActions-root > :nth-child(1)').should('be.visible')
        cy.get('.MuiDialogActions-root > :nth-child(2)').should('be.visible')
    }

    clickLoginButton() {
        cy.get('a[href="/login"]').should('be.visible').and('not.be.disabled')
        cy.get('a[href="/login"]').click()
    }
    clickUserButton() {
        cy.get('.MuiDialogActions-root > :nth-child(1)').click()
    }
    clickVendorButton() {
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()
    }

}
