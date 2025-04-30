import { faker } from '@faker-js/faker';

export function createUser(){
    return {
        "email": faker.internet.email(),
        "username": faker.internet.username(),
        "password": faker.internet.password(),
        "firstName": faker.person.firstName(),
        "lastName": faker.person.lastName(),
        "accountType": "USER"
    }
}

export function createVendor(){
    return {
        "email": faker.internet.email(),
        "username": faker.internet.username(),
        "password": faker.internet.password(),
        "firstName": faker.person.firstName(),
        "lastName": faker.person.lastName(),
        "accountType": "STORE_OWNER"
    }
}

export function createStore(){
    return {
        name:  faker.company.name(),
        streetNumber: faker.number.int({min: 0 , max: 9999}).toString(),
        streetName : faker.location.secondaryAddress(),
        city: faker.location.city(),
        zipcode : faker.number.int({min: 1000 , max: 9999}).toString(),
        country : faker.location.country() 
    }
}