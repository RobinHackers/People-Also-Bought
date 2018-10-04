const { Pool, Client } = require('pg');

// const pool = new Pool({
//   user: 'eddielo',
//   host: 'localhost',
//   database: 'alsoBought',
// });

const client = new Client({
  user: 'eddielo',
  host: 'localhost',
  database: 'robinhood',
});

const query1 = 'GHFDD';
const query2 = 'FDGFD';

client.connect();
console.time('query1');
client.query(`select companies.*, prices.current_price from companies, alsobought, prices
              where alsobought.company_id = (
                select id from companies where company_abbr = '${query1}'
              ) and companies.id = alsobought.alsobought_id
              and companies.id = prices.company_id;`)
  .then(() => console.timeEnd('query1'))
  .catch(e => console.error(e.stack));

console.time('query2');
client.query(`select companies.* from companies, alsobought 
              where alsobought.company_id = (
                select id from companies where company_abbr = '${query2}'
              ) and companies.id = alsobought.alsobought_id;`)
  .then((res) => {
    const ids = [];
    res.rows.forEach(row => ids.push(row.id));
    client.query(`select * from prices
                  where company_id in (${ids.join(',')});`)
      .then(() => console.timeEnd('query2'))
      .then(() => client.end())
      .catch(e => console.error(e.stack));
  })
  .catch(e => console.error(e.stack));
