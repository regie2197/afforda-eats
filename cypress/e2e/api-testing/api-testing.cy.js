import createUser from '../../support/user-faker.utils.js'

describe('API Endpoint Testing', () => {
    const newUser = createUser()
    let userId

    it('POST request for creating a new user', () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/register",
            body: newUser
        }).should((response) => {
            expect(response.status).to.eq(201)
            userId = response.body.id
        })
    })

    it('Verify user registration with missing fields in the request body', () => {
        const Reg_missingfield = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/register",
            body: { 
                username: Reg_missingfield.username,
                password: Reg_missingfield.password,
                email: Reg_missingfield.email
            },
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("All fields are required.")
        })
    })


    it('Verify User registration with leading and trailing spaces on fields', () => {
        const reg_space = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/register",
            body: { ...reg_space, firstName: "Sofia  ", lastName: "  Lawson" },
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("Fields must not have leading or trailing spaces.")
        })
    })

    it('POST request for Login In using email', () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/login",
            body: {
                email: newUser.email,
                password: newUser.password
            }
        }).should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('POST request for Login In using username', () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/login",
            body: {
                username: newUser.username,
                password: newUser.password
            }
        }).should((response) => {
            expect(response.status).to.eq(200)
        })
    })










    it('DELETE request for deleting user by ID', () => {
        const credential = `${newUser.username}:${newUser.password}`
        cy.api({
            method: 'DELETE',
            url: "http://localhost:4000/api/user/" + userId,
            headers: {
                Authorization: 'Basic ' + btoa(credential),
            }
        }).should((response) => {
            expect(response.status).to.eq(204)
        })
    })

})