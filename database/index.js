const Promise = require('bluebird');

const initOptions = {
  promiseLib: Promise,
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
    `select companies.*, prices.current_price from companies, alsobought, prices
      where alsobought.company_id = (
        select id from companies where company_abbr = '${companyAbbreviation}'
      ) and companies.id = alsobought.alsobought_id
      and companies.id = prices.company_id;`,
  ),
  getAlsoBoughtById: companyId => db.any(
    `select companies.*, prices.current_price from companies, alsobought, prices
      where alsobought.company_id = ${companyId}
      and companies.id = alsobought.alsobought_id
      and companies.id = prices.company_id;`,
  ),
  getCompanybyAbbreviation: companyAbbreviation => db.any(
    `select * from companies where company_abbr = '${companyAbbreviation}'`,
  ),
  getCompanybyId: companyId => db.any(
    `select * from companies where id = '${companyId}'`,
  ),
  
};

module.exports = queries;
