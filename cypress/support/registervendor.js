import { faker } from '@faker-js/faker';

export function vendorRegister() {

    return {
        // id: faker.number.int({ min: 1, max: 1000 }),
        FirstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        username: faker.person.firstName(),
        password: "password123",    


    };
}