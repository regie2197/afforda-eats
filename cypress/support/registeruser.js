import { faker } from '@faker-js/faker';

export function userRegister() {

    return {
        // id: faker.number.int({ min: 1, max: 1000 }),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        username: faker.person.firstName(),
        password: "password123",    


    };
}