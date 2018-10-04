const alphabet = require('./alphabet');
const createSeeds = require('./createSeeds');

const generateTickerSymbol = (min, max, id = 0, n = 5) => {
  const results = [];
  const uniqueTicker = (string = '') => {
    if (string.length === n) {
      if (id >= max) { return; }
      if (id >= min && id <= max) {
        results.push({ id, companyAbbr: string });
      }
      if (results.length === 384616) {
        createSeeds(results);
      }
      id++;
      return;
    }
    alphabet.forEach(char => uniqueTicker(string + char));
  };
  uniqueTicker();
};

module.exports = generateTickerSymbol;
