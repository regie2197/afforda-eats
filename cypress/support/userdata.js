import { faker } from '@faker-js/faker';

export function userData() {

    return {
        // id: faker.number.int({ min: 1, max: 1000 }),
        email: faker.internet.email(),
        username: faker.person.firstName(),
        password: "password123",
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        accountType: "USER"


    };
}