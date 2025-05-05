import { createUser} from '../../support/user-faker.utils.js'

describe('REGISTRATION API Testing', () => {
    const newUser = createUser()

    it('Verify successful POST request for creating a new user', () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/register",
            body: newUser
        }).should((response) => {
            expect(response.status).to.eq(201)
        })
    })

    it('Verify unsuccessful user registration when there are missing required field in the request body', () => {
        const reg_missingField = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/register",
            body: { 
                username: reg_missingField.username,
                password: reg_missingField.password,
                email: reg_missingField.email
            },
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("All fields are required.")
        })
    })


    it('Verify unsuccessful user registration when the required field values contains leading and trailing spaces', () => {
        const reg_spaceAround = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/register",
            body: { ...reg_spaceAround, firstName: "Sofia  ", lastName: "  Lawson" },
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
            url: "http://localhost:4000/api/register",
            body: {
                ...reg_emailWhitespace, 
                email: `${reg_emailWhitespace.firstName} @email.com`
            },
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
            url: "http://localhost:4000/api/register",
            body: { ...reg_usernameWhitespace, 
                username: `${reg_usernameWhitespace.firstName} ${reg_usernameWhitespace.lastName}` 
            },
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
            url: "http://localhost:4000/api/register",
            body: { ...reg_invalidEmail, email: "sofiaemail@com"},
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
            url: "http://localhost:4000/api/register",
            body: { ...reg_invalidPass, password: "l0co?"},
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
            url: "http://localhost:4000/api/register",
            body: { ...reg_sameEmail, email: newUser.email },
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq('Email is already taken.')
        })
    })

    it('Verify unsuccessful user registration when the entered username already exists in the database', () => {
        const reg_sameUsername = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/register",
            body: { ...reg_sameUsername, username: newUser.username},
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq('Username is already taken.')
        })
    })

})