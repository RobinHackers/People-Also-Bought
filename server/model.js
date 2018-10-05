const queries = require('../database');

const model = {
  peopleAlsoBought: {
    get: companyAbbreviation => queries.getAlsoBoughtByAbbreviation(companyAbbreviation)
      .then((data) => {
        const numOfPricePerEntry = data.length / 12;
        const companies = data
          .filter((_company, idx) => idx % numOfPricePerEntry === 0)
          .map(company => ({
            id: company.id,
            companyAbbr: company.company_abbr,
            company: company.company,
            percentage: company.percentage,
          }));
        const prices = data.map(company => ({
          currentPrice: Number(company.current_price.slice(1)),
        }));
        for (let i = 0; i < 12; i += 1) {
          companies[i].currentDay = prices
            .slice(numOfPricePerEntry * i, numOfPricePerEntry * (i + 1));
        }
        return companies;
      })
      .catch(error => console.log(error)),
  },
  company: {
    get: (companyAbbreviation, cb) => {
    },
    post: (body, cb) => {
    },
    put: (body, cb) => {
    },
    delete: (companyAbbreviation, cb) => {
    },
    prices: {
      post: (body, cb) => {
      },
    },
  },
};

module.exports = model;
