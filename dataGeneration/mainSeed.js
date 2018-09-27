const alphabet = require('./alphabet');
const createSeeds = require('./createSeeds');

const generateTickerSymbol = (id, current = '', n = 5) => {
  const results = [];
  const uniqueTicker = (string = current) => {
    if (string.length === n) {
      results.push({
        id,
        companyAbbr: string,
      });
      id++;
      if (results.length === 384616) {
        createSeeds(results);
      }
      return;
    }
    alphabet.forEach(char => uniqueTicker(string + char));
  };
  uniqueTicker();
};

module.exports = generateTickerSymbol;
