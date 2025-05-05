class loginPage {

    // locators
    usernameInput = 'input[name="username"]'
    passwordInput = 'input[name="password"]'

    fillLoginForm(username, password){
        if (username != '' && password != ''){
            cy.get(this.usernameInput).should('be.visible').and('contain', '').and('not.be.disabled').type(username).should('have.value', username)
            cy.get(this.passwordInput).should('be.visible').and('contain', '').and('not.be.disabled').type(password).should('have.value', password)
        } else if (username != '' && password == ''){
            cy.get(this.usernameInput).should('be.visible').and('contain', '').and('not.be.disabled').type(username).should('have.value', username)
        } else if (username == '' && password != ''){
            cy.get(this.passwordInput).should('be.visible').and('contain', '').and('not.be.disabled').type(password).should('have.value', password)
        }
        
        cy.contains('button', 'Login').click();
    }

    verifyErrMessage(errorcode){
        if(errorcode == 1){
            // Invalid Username and Password
            cy.contains('Incorrect username or password.').should('exist').should('be.visible');
        } else {
            // Empty fields
            cy.contains('Please enter username and password').should('exist').should('be.visible');
        }
    }

}

export default new loginPage()