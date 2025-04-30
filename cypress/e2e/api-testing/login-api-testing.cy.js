import { createUser} from '../../support/user-faker.utils.js'

describe('API - REGISTRATION testing', () => {
    const newUser = createUser()

    before(() => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/register",
            body: newUser
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


    // it('DELETE request for deleting user by ID', () => {
    //     const credential = `${newUser.username}:${newUser.password}`
    //     cy.api({
    //         method: 'DELETE',
    //         url: "http://localhost:4000/api/user/" + userId,
    //         headers: {
    //             Authorization: 'Basic ' + btoa(credential),
    //         }
    //     }).should((response) => {
    //         expect(response.status).to.eq(204)
    //     })
    // })

})