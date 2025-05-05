import { createUser} from '../../support/user-faker.utils.js'

describe('AUTH API Testing', () => {
    const newUser = createUser()

    before(() => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/register",
            body: newUser
        })
    })

    it('Verify successful POST request for login using email', () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/login",
            body: {
                email: newUser.email,
                password: newUser.password
            }
        }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.be.eql("Login successful")
            expect(response.body.user).to.have.property("id")
            expect(response.body.user).to.have.property("email", newUser.email)
            expect(response.body.user).to.have.property("username", newUser.username)
            expect(response.body.user).to.not.have.property("password")
            expect(response.body.user).to.have.property("firstName", newUser.firstName)
            expect(response.body.user).to.have.property("lastName", newUser.lastName)
            expect(response.body.user).to.have.property("accountType")
        })
    })

    it("Verify successful POST request for login using username", () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/login",
            body: {
                username: newUser.username,
                password: newUser.password
            }
        }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.be.eql("Login successful")
            expect(response.body.user).to.have.property("id")
            expect(response.body.user).to.have.property("email", newUser.email)
            expect(response.body.user).to.have.property("username", newUser.username)
            expect(response.body.user).to.not.have.property("password")
            expect(response.body.user).to.have.property("firstName", newUser.firstName)
            expect(response.body.user).to.have.property("lastName", newUser.lastName)
            expect(response.body.user).to.have.property("accountType")
        })
    })

    it("Verify unsuccessful POST request for login when the account does not exist", () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/login",
            failOnStatusCode: false,
            body: {
                username: "unregisteredUser",
                password: "wrongPass"
            }
        }).should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body.error).to.be.eql("User not found")
        })
    })

    it("Verify unsuccessful POST request for login when the password does not match", () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/login",
            failOnStatusCode: false,
            body: {
                username: newUser.username,
                password: "wrongPass"
            }
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.be.eql("Invalid credentials")

        })
    })

    it("Verify unsuccessful POST request for login when the account credential is missing in the request body", () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/login",
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
        })
    }) // 500 without error message

    it.skip("Verify unsuccessful POST request for login when a server error occurs", () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/login",
            failOnStatusCode: false,
            body: {
                username: newUser.username,
                password: newUser.password
            }
        }).should((response) => {
            expect(response.status).to.eq(400)
        })
    }) // not tested

    it("Verify successful GET request using valid username in the authentication headers", () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user",
            failOnStatusCode: false,
            auth: {
                username: newUser.username,
                password: newUser.password
            }
        }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an("array").and.to.not.be.empty;
        })
    })

    it("Verify successful GET request using valid email in the authentication headers", () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user",
            failOnStatusCode: false,
            auth: {
                username: newUser.email,
                password: newUser.password
            }
        }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an("array").and.to.not.be.empty;
        })
    }) // failed "Invalid username & password"

    
    it("Verify unsuccessful GET request with unregistered credentials in the authentication headers", () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user",
            failOnStatusCode: false,
            auth: {
                username: "unregistedUser",
                password: "wrongPass"
            }
        }).should((response) => {
            expect(response.status).to.eq(401)
            expect(response.body.error).to.be.eql("Invalid username or password")
        })
    })

    it("Verify unsuccessful GET request with missing authentication headers", () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user",
            failOnStatusCode: false,
        }).should((response) => {
            expect(response.status).to.eq(401)
            expect(response.body.error).to.be.eql("Authorization header missing or invalid")
        })
    })

    



    




})