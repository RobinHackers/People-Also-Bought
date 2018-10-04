const { Pool, Client } = require('pg');

const pool = new Pool({
  database: 'robinhood',
});

const client = new Client({
  database: 'robinhood',
});

module.exports = { pool, client };

const query1 = 'AAAAA';

client.connect();
console.time('query1');
client.query(`select companies.*, prices.current_price from companies, alsobought, prices
              where alsobought.company_id = (
                select id from companies where company_abbr = '${query1}'
              ) and companies.id = alsobought.alsobought_id
              and companies.id = prices.company_id;`)
  .then(({ rows }) => {
    const numOfPricePerEntry = rows.length / 12;
    const companies = rows
      .filter((_company, idx) => idx % numOfPricePerEntry === 0)
      .map(company => ({
        id: company.id,
        companyAbbr: company.company_abbr,
        company: company.company,
        percentage: company.percentage,
      }));
    const currentDay = rows.map(company => ({ currentPrice: company.current_price }));
    for (let i = 0; i < 12; i += 1) {
      companies[i].currentDay = currentDay
        .slice(numOfPricePerEntry * i, numOfPricePerEntry * (i + 1));
    }
    client.end();
  })
  .then(() => console.timeEnd('query1'))
  .catch(e => console.error(e.stack));
