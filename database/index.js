const Promise = require('bluebird');

const initOptions = {
  promiseLib: Promise,
  query(event) {
    console.log('QUERY:', event.query);
  },
  error(error, event) {
    if (event.cn) {
      console.log('CN:', event.cn);
      console.log('EVENT:', error.message || error);
    }
  },
};
const pgp = require('pg-promise')(initOptions);

const db = pgp({ database: 'robinhood' });

const queries = {
  getAlsoBoughtByAbbreviation: companyAbbreviation => db.any(
    `SELECT companies.*, prices.current_price FROM companies, alsobought, prices
      WHERE alsobought.company_id = (
        SELECT id FROM companies WHERE company_abbr = '${companyAbbreviation}'
      ) AND companies.id = alsobought.alsobought_id
      AND companies.id = prices.company_id;`,
  ),
  getAlsoBoughtById: companyId => db.any(
    `SELECT companies.*, prices.current_price FROM companies, alsobought, prices
      WHERE alsobought.company_id = ${companyId}
      AND companies.id = alsobought.alsobought_id
      AND companies.id = prices.company_id;`,
  ),
  getCompanyByAbbreviation: companyAbbreviation => db.any(
    `SELECT companies.*, alsobought.alsobought_id, prices.current_price 
      FROM companies, alsobought, prices
      WHERE companies.company_abbr = '${companyAbbreviation}'
      AND alsobought.company_id = companies.id
      AND prices.company_id = companies.id`,
  ),
  getCompanyById: companyId => db.any(
    `SELECT companies.*, alsobought.alsobought_id, prices.current_price 
      FROM companies, alsobought, prices
      WHERE companies.id = '${companyId}'
      AND alsobought.company_id = companies.id
      AND prices.company_id = companies.id`,
  ),
  getCurrentId: () => db.any('SELECT currval(companies_id_seq)'),
  insertCompany: ({ companyAbbr, company, percentage }) => db.any(
    `INSERT INTO companies (company_abbr, company, percentage)
      VALUES ('${companyAbbr}', '${company}', ${percentage})`,
  ),
  insertAlsoBought: (companyId, alsoBought) => Promise.all(alsoBought
    .map(alsoBoughtId => db.any(
      `INSERT INTO alsobought (company_id, alsobought_id)
      VALUES (${companyId}, ${alsoBoughtId})`,
    ))),
  insertPrices: (companyId, currentDay) => Promise.all(currentDay
    .map(currentPrice => db.any(
      `INSERT INTO alsobought (company_id, alsobought_id)
      VALUES (${companyId}, ${currentPrice})`,
    ))),
};

module.exports = queries;
