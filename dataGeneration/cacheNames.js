const faker = require('faker');

const cache = {};

while (Object.keys(cache).length < 26) {
  for (let i = 0; i < 10; i++) {
    const company = faker.name.firstName();
    cache[company[0]] = cache[company[0]] || [];
    cache[company[0]].push(company);
  }
}

module.exports = cache;
