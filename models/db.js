const faker = require('../node_modules/faker');

const data = [];

for (let i=0; i<20; i++) {
  data.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    company: faker.company.companyName()
  });
}

module.exports = data;
