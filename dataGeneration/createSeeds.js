const fs = require('fs');
const cache = require('./cacheNames');

const generateRandomInt = (max, min = 0) => min + Math.floor(Math.random() * Math.floor(max - min));
const generateRandomDollars = (max, min = 0) => (
  (min + (Math.random() * Math.floor(max - min))).toFixed(2)
);

const createSeeds = (data) => {
  const page = data[0].id;
  const alsoBought = [];
  const todaysPrice = [];
  for (let i = 0; i < 12; i++) {
    alsoBought.push(generateRandomInt(10000000));
  }
  todaysPrice.push({ currentPrice: generateRandomDollars(1000, 1) });
  let { currentPrice } = todaysPrice[0];
  for (let i = 1; i < 24; i++) {
    currentPrice *= (0.984375 + Math.random() / 32);
    todaysPrice.push({ currentPrice: currentPrice.toFixed(2) });
  }
  data.map((item) => {
    const company = item.companyAbbr.slice(-2).split('').map(char => cache[char][generateRandomInt(cache[char].length)]).join(' ');
    return Object.assign(item, {
      company,
      percentage: generateRandomInt(65, 10),
      alsoBought,
      currentDay: todaysPrice,
    });
  });
  const dataSize = data.length;
  const chunks = 256;
  const chunkSize = Math.ceil(dataSize / chunks);
  for (let i = 0; i < chunks; i++) {
    let chunk = data.slice(chunkSize * i, chunkSize * (i + 1));
    if (chunk.length > 0) {
      chunk = JSON.stringify(chunk);
      if (JSON.parse(chunk).length === chunkSize) { chunk = chunk.replace(/]$/, ','); }
      if (i !== 0) { chunk = chunk.slice(1); }
      fs.appendFile(`./seeds/companies_${page}.json`, chunk, (err) => {
        if (err) { console.log(err); }
      });
    }
  }
};

module.exports = createSeeds;
