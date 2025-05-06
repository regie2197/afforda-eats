import { authData } from "../../support/fakerdata"

describe('AffordaEats API: Register user tests', () => {
  const data = authData()
  it('Verify successful account registration', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/register/',
      body: {
        "email": data.email,
        "username": data.username,
        "password": "pass1111",
        "firstName": "John33432",
        "lastName": "Doe4334",
        "accountType": "USER"
      },
    }).should((response) => {
      expect(response.status).to.eq(201)
    })
  })
  it('Verify successful account login', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/login/',
      body: {
        "email": "user@example.com",
        "username": "user",
        "password": "pass1111"
      },
    }).should((response) => {
      expect(response.status).to.eq(200)
    })
  })
})

describe.skip('AffordaEats API: Register user tests (Negative)', () => {
  const data = authData()
  it('Verify unsuccessful account registration - All fields are required', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/register/',
      body: {
        "username": "user",
        "password": "pass1111",
        "firstName": "John33432",
        "lastName": "Doe4334",
        "accountType": "USER"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('All fields are required.')
    })
  })
  it('Verify unsuccessful account registration - Fields must not have leading or trailing spaces', () => {
    cy.api({
      method: 'POST',  
      url: 'http://localhost:4000/api/register/',
      body: {
        "email":"email@example.com",
        "username": "data.username",
        "password": "pass1111",
        "firstName": "  John33432",
        "lastName": "Doe4334",
        "accountType": "USER"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Fields must not have leading or trailing spaces.')
    })
  })
  it('Verify unsuccessful account registration - Email must not contain spaces', () => {
    cy.api({
      method: 'POST',  
      url: 'http://localhost:4000/api/register/',
      body: {
        "email":"email @example.com",
        "username": "data.username",
        "password": "pass1111",
        "firstName": "John33432",
        "lastName": "Doe4334",
        "accountType": "USER"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Email must not contain spaces.')
    })
  })
  it('Verify unsuccessful account registration - Username must not contain spaces', () => {
    cy.api({
      method: 'POST',  
      url: 'http://localhost:4000/api/register/',
      body: {
        "email":"email@example.com",
        "username": "  data.u sername   ",
        "password": "pass1111",
        "firstName": "John33432",
        "lastName": "Doe4334",
        "accountType": "USER"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Fields must not have leading or trailing spaces.')
    })
  })
  it('Verify unsuccessful account registration - Invalid email format', () => {
    cy.api({
      method: 'POST',  
      url: 'http://localhost:4000/api/register/',
      body: {
        "email":"emailexample.com",
        "username": "data.username",
        "password": "pass1111",
        "firstName": "John33432",
        "lastName": "Doe4334",
        "accountType": "USER"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Invalid email format.')
    })
  })
  it('Verify unsuccessful account registration - Password must be at least 6 characters long', () => {
    cy.api({
      method: 'POST',  
      url: 'http://localhost:4000/api/register/',
      body: {
        "email":"email@example.com",
        "username": "data.username",
        "password": "pa111",
        "firstName": "John33432",
        "lastName": "Doe4334",
        "accountType": "USER"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Password must be at least 6 characters long.')
    })
  })
  it('Verify unsuccessful account registration - Email is already taken', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/register/',
      body: {
        "email": "user@example.com",
        "username": "hahahadata.username",
        "password": "pass1111",
        "firstName": "John33432",
        "lastName": "Doe4334",
        "accountType": "USER"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Email is already taken.')
    })
  })
  it('Verify unsuccessful account registration - Username is already taken', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/register/',
      body: {
        "email": "examples111@example.com",
        "username": "user",
        "password": "pass1111",
        "firstName": "John33432",
        "lastName": "Doe4334",
        "accountType": "USER"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Username is already taken.')
    })
  })

  it('Verify unsuccessful account login - User not found', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/login/',
      body: {
        "email": "user@RAHHHHexample.com",
        "username": data.username,
        "password": "pass1111"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(404)
    })
  })

  it('Verify unsuccessful account login - Invalid Credentials', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/login/',
      body: {
        "email": "user@example.com",
        "username": "user",
        "password": "invalidpassword"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Invalid credentials')
    })
  })

})