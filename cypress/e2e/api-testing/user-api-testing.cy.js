import { createUser } from '../../support/user-faker.utils.js'

describe('USER API Testing', () => {
    const newUser = createUser()
    const mockUrl = 'https://5b381790-b05b-424d-80b7-54f5d3408db2.mock.pstmn.io'
    let userId
    const authCred = {
        "username": 'lemonsquare',
        "password": 'lemon123'
    }

    it('Verify successful POST request for creating a new user', () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: newUser,
            auth: authCred
        }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id')
            userId = response.body.id
            expect(response.body).to.have.property('username', newUser.username)
            expect(response.body).to.have.property('email', newUser.email)
            expect(response.body.password).to.not.equal(newUser.password);
            expect(response.body).to.have.property('firstName', newUser.firstName)
            expect(response.body).to.have.property('lastName', newUser.lastName)
            expect(response.body).to.have.property('accountType', 'USER')
        })
    })

    it('Verify unsuccessful request when the authentication header is missing', () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: newUser,
            failOnStatusCode: false,
        }).should((response) => {
            expect(response.status).to.eq(401)
            expect(response.body.error).to.eq("Authorization header missing or invalid")
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
    }) // 200 failed

    it('Verify unsuccessful user registration when email field value contains whitespace', () => {
        const reg_emailWhitespace = createUser() 
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: {
                ...reg_emailWhitespace, 
                email: `${reg_emailWhitespace.firstName} @email.com`
            },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.error).to.eq("Email must not contain spaces.");
        });
    }) // 200 failed

    it('Verify unsuccessful user registration when username field value contains whitespace', () => {
        const reg_usernameWhitespace = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: { ...reg_usernameWhitespace, 
                username: `${reg_usernameWhitespace.firstName} ${reg_usernameWhitespace.lastName}` 
            },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("Username must not contain spaces.")
        })
    }) // 200 failed

    it('Verify unsuccessful user registration when email is on an invalid format', () => {
        const reg_invalidEmail = createUser()
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/user",
            body: { ...reg_invalidEmail, email: reg_invalidEmail.firstName + "emailcom" },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("Invalid email format.")
        })
    }) // 200 failed

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
    }) // 200 failed

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
    }) // 500 no error message

    it('Verify unsuccessful fetching of user data when the server is down', () => {
        cy.api({
            method: 'GET',
            url: mockUrl + "/api/user",
            body: newUser,
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(500)
            expect(response.body.error).to.be.eql("Internal server error")
        })
    })

    // GET ALL request

    it('Verify successful GET request for getting all user data', () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user",
            body: newUser,
            auth: authCred
        }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an("array").and.to.not.be.empty;
        })
    })

    it('Verify unsuccessful fetching of all user data when no user are found', () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user/no-user",
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(404);
            expect(response.body.error).to.eq("No users found")

        });
    })

    // GET by ID request

    it('Verify successful GET request for fetching user data by ID', () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user/" + userId,
            body: newUser,
            auth: authCred
        }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', userId)
            expect(response.body.password).to.not.equal(newUser.password);
        })
    })

    it('Verify unsuccessful fetching of user data when the id is not a number', () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user/" + newUser.username,
            body: newUser,
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("Invalid user ID")
        })
    })

    it('Verify unsuccessful fetching of user data when user does not exist', () => {
        cy.api({
            method: 'GET',
            url: "http://localhost:4000/api/user/" + '300000',
            body: newUser,
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body.error).to.eq("User not found")

        })
    })

    it('Verify unsuccessful fetching of user data when the server is down', () => {
        cy.api({
            method: 'GET',
            url: mockUrl + "/api/user/" + userId,
            body: newUser,
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(500)
            expect(response.body.error).to.be.eql("Internal server error")
        })
    })

    // PUT request

    const updateUser = createUser()

    it('Verify successful PUT Request for Updating User by ID', () => {
        cy.api({
            method: 'PUT',
            url: "http://localhost:4000/api/user/" + userId,
            body: { ...newUser, firstName: updateUser.firstName, lastName: updateUser.lastName },
            auth: authCred
        }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', userId)
            expect(response.body).to.have.property('username', newUser.username)
            expect(response.body).to.have.property('email', newUser.email)
            expect(response.body.password).to.not.equal(newUser.password);
            expect(response.body).to.have.property('firstName', updateUser.firstName)
            expect(response.body).to.have.property('lastName', updateUser.lastName)
            expect(response.body).to.have.property('accountType', 'USER')
        })
    })

    it('Verify unsuccessful overwriting of user data when there are missing required fields in the request body', () => {
        const reg_missingField = createUser()
        cy.api({
            method: 'PUT',
            url: "http://localhost:4000/api/user/" + userId,
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
    }) // 200 failed

    it('Verify unsuccessful overwriting of user data when the user id is invalid', () => {
        cy.api({
            method: 'PUT',
            url: "http://localhost:4000/api/user/" + newUser.firstName,
            body: { ...newUser, firstName: updateUser.firstName, lastName: updateUser.lastName },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("Invalid user ID")
        })
    })

    it('Verify unsuccessful overwriting of user data when the user does not exist', () => {
        cy.api({
            method: 'PUT',
            url: "http://localhost:4000/api/user/" + '30000',
            body: { ...newUser, firstName: updateUser.firstName, lastName: updateUser.lastName },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body.error).to.eq("User not found")
        })
    })

    it('Verify unsuccessful overwriting of user data when an internal server error occurs', () => {
        cy.api({
            method: 'PUT',
            url: mockUrl + "/api/user/" + userId,
            body: { ...newUser, firstName: updateUser.firstName, lastName: updateUser.lastName },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(500)
            expect(response.body.error).to.be.eql("Internal server error")

        })
    })

    // PATCH requests

    it('Verify successful PATCH request to modify user data', () => {
        cy.api({
            method: 'PATCH',
            url: "http://localhost:4000/api/user/" + userId,
            body: { firstName: 'George' },
            auth: authCred
        }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', userId)
            expect(response.body).to.have.property('firstName', 'George')
        })
    })

    it('Verify unsuccessful modification of user data when the inputted user id is non numeric', () => {
        cy.api({
            method: 'PATCH',
            url: "http://localhost:4000/api/user/" + 'userId',
            body: { lastName: 'Adams' },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("Invalid user ID")
        })
    })

    it('Verify unsuccessful modification of user data when the user does not exist', () => {
        cy.api({
            method: 'PATCH',
            url: "http://localhost:4000/api/user/" + '3000',
            body: { lastName: 'Adams' },
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body.error).to.eq("User not found")
        })
    })

    it("Verify unsuccessful modification of user data when there's an internal server error", () => {
        cy.api({
            method: 'PATCH',
            url: mockUrl + "/api/user/" + userId,
            body: { lastName: 'Adams' },
            auth: authCred,
            failOnStatusCode: false  
        }).should((response) => {
            expect(response.status).to.eq(500)
            expect(response.body.error).to.be.eql("Internal server error")
        })
    })

    // DELETE request
    it('Verify successful DELETE request to remove user data in the database', () => {
        cy.api({
            method: 'DELETE',
            url: "http://localhost:4000/api/user/" + userId,
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(204)
        })
    })

    it('Verify unsuccessful deletion of user when the user Id is non-numeric', () => {
        cy.api({
            method: 'DELETE',
            url: "http://localhost:4000/api/user/" + 'userId',
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.eq("Invalid user ID")
        })
    })

    it('Verify unsuccessful deletion of user when the user does not exist', () => {
        cy.api({
            method: 'DELETE',
            url: "http://localhost:4000/api/user/" + '30000',
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body.error).to.eq("User not found")
        })
    })

    it("Verify unsuccessful deletion of user data when there's an internal server error", () => {
        cy.api({
            method: 'DELETE',
            url: mockUrl + "/api/user/30000",
            auth: authCred,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(500)
            expect(response.body.error).to.be.eql("Internal server error")
        })
    })

})