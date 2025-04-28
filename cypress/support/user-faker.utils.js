import { faker } from '@faker-js/faker';

export default function createUser(){
    return {
        "email": faker.internet.email(),
        "username": faker.internet.username(),
        "password": faker.internet.password(),
        "firstName": faker.person.firstName(),
        "lastName": faker.person.lastName(),
        "accountType": "USER"
    }
}