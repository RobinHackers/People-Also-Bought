const faker = require('faker');

const names = {};

while (Object.keys(names).length < 26) {
  for (let i = 0; i < 10; i++) {
    const company = faker.name.firstName();
    names[company[0]] = names[company[0]] || [];
    names[company[0]].push(company);
  }
}

module.exports = names;
