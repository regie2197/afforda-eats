import { createUser } from '../../support/user-faker.utils.js'

describe('API - REGISTRATION testing', () => {
    const newUser = createUser()
    let userId
    const authCred = {
        "username": 'lemonsquare',
        "password": 'lemon123'
    }

    it.only('Verify successful POST request for creating a new user', () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: newUser,
            auth: authCred
        }).should((response) => {
            expect(response.status).to.eq(200)
            userId =response.body.id
        })
    })

    it('Verify unsuccessful user registration when there are missing required field in the request body', () => {
        const reg_missingField = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: {
                username: reg_missingField.username,
                password: reg_missingField.password,
                email: reg_missingField.email
            },
            failOnStatusCode: false,
            auth: authCred,
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("Missing required fields")
        })
    })


    it('Verify unsuccessful user registration when the required field values contains leading and trailing spaces', () => {
        const reg_spaceAround = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: { ...reg_spaceAround, firstName: "Sofia  ", lastName: "  Lawson" },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("Fields must not have leading or trailing spaces.")
        })
    })

    it('Verify unsuccessful user registration when email field value contains whitespace', () => {
        const reg_emailWhitespace = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: { ...reg_emailWhitespace, email: reg_emailWhitespace.firstName + " @email.com" },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("Email must not contain spaces.")
        })
    })

    it('Verify unsuccessful user registration when username field value contains whitespace', () => {
        const reg_usernameWhitespace = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: { ...reg_usernameWhitespace, username: "John Carl" },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("Username must not contain spaces.")
        })
    })

    it('Verify unsuccessful user registration when email is on an invalid format', () => {
        const reg_invalidEmail = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: { ...reg_invalidEmail, email: reg_invalidEmail.email + "email@com" },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("Invalid email format.")
        })
    })

    it('Verify unsuccessful user registration when the password field value has less than 6 character', () => {
        const reg_invalidPass = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: { ...reg_invalidPass, password: "l0co?" },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq('Password must be at least 6 characters long.')
        })
    })

    it('Verify unsuccessful user registration when the entered email already exists in the database', () => {
        const reg_sameEmail = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: { ...reg_sameEmail, email: newUser.email },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq('User with this email already exists')
        })
    })

    it('Verify unsuccessful user registration when the entered username already exists in the database', () => {
        const reg_sameUsername = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: { ...reg_sameUsername, username: newUser.username },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq('Username is already taken.')
        })
    })


    // GET ALL request

    it.only('Verify successful GET request for getting all user data', () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user",
            body: newUser,
            auth: authCred
        }).should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it.only('Verify unsuccessful fetching of all user data when no user are found', () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user/no-user",
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(404);
        });
    })

    it.skip('Verify unsuccessful fetching of all user data when the server is down', () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user",
            body: newUser,
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(500)
        })
    })

    it.only('Verify successful GET request for fetching user data by ID', () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user/" + userId ,
            body: newUser,
            auth: authCred
        }).should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it.only('Verify unsuccessful fetching of user data when the id is not a number', () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user/" + 'hello' ,
            body: newUser,
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
        })
    })

    it.only('Verify unsuccessful fetching of user data when user does not exist', () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user/" + '3000' ,
            body: newUser,
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(404)
        })
    })
    it.skip('Verify unsuccessful fetching of user data when the server is down', () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:5000/api/user/" + userId ,
            body: newUser,
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(500)
        })
    })

    // PUT request

    it.skip('Verify successful PUT Request for Updating User by ID', () => {
        cy.api({
            method: 'PUT',
            url: "http://localhost:4000/api/user/" + userId,
            body: newUser,
            auth: authCred
        }).should((response) => {
            expect(response.status).to.eq(200)
        })
    })





   

})