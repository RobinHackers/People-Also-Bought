const json2csv = require('json2csv').parse;
const fs = require('fs');
const alphabet = require('./dataGeneration/alphabet');

const generateTickerSymbol = (id = 0, n = 5) => {
  const length = 10;
  let results = {};
  const uniqueTicker = (string = 'I') => {
    if (string.length === n) {
      results[`company${id % length}`] = string;
      if (id % length === 0 && id > 0) {
        const csv = `${json2csv(results, { header: false })}\n`;
        fs.appendFile('./shells.csv', csv, (err) => {
          if (err) { console.log(err); }
        });
        results = {};
      }
      id++;
      return;
    }
    alphabet.forEach(char => uniqueTicker(string + char));
  };
  uniqueTicker();
};

generateTickerSymbol();
