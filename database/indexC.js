const cassandra = require('cassandra-driver');
const Promise = require('bluebird');
const fs = require('fs');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  keyspace: 'robinhood',
  promiseFactory: Promise.fromCallback,
});

console.time('Seed C');
console.log('SEEDING CASSANDRA START');
const runSeed = (i = 0) => {
  if (i < 26) {
    fs.readFile(`./seeds/companies_${384616 * i}.csv`, (err, data) => {
      if (err) { console.log(err); }
      data = data.toString().split('\n');
      let headers = data[0].replace(/`/g, '').replace(/\|/g, ', ');
      data = data.slice(1);
      headers = headers.replace(/companyAbbr/, 'company_abbr').replace(/currentDay/, 'current_day');
      const query = `INSERT INTO robinhood.companies (${headers}) VALUES (?, ?, ?, ?, ?)`;
      const seed = (j = 0) => {
        const step = 64;
        let queries = data.slice(j * step, (j + 1) * step);
        if (queries.length > 0) {
          if (!queries[queries.length - 1]) { queries.pop(); }
          queries = queries
            .map(item => item
              .replace(/`/g, '')
              .split('|'));
          queries.forEach((params) => {
            params[0] = Number(params[0]);
            params[3] = Number(params[3]);
            params[4] = JSON.parse(params[4]);
          });
          queries = queries.map(params => (client.execute(query, params, { prepare: true })));
          Promise.all(queries)
            .then(() => seed(j + 1))
            .catch(e => console.log(e));
        } else {
          console.log('COMPLETE', i);
          runSeed(i + 1);
        }
      };
      seed();
    });
  } else {
    console.log('COMPLETE ALL');
    console.timeEnd('Seed C');
    client.shutdown();
  }
};
runSeed();
