const fs = require('fs');
const json2csv = require('json2csv').parse;
const cache = require('./cacheNames');

const generateRandomInt = (max, min = 0) => min + Math.floor(Math.random() * Math.floor(max - min));
const generateRandomDollars = (max, min = 0) => (
  (min + (Math.random() * Math.floor(max - min))).toFixed(2)
);

const write = (data, page, file, chunks) => {
  const size = data.length;
  const chunkSize = Math.ceil(size / chunks);
  const chunking = (i = 0) => {
    const chunk = data.slice(chunkSize * i, chunkSize * (i + 1));
    if (chunk.length > 0) {
      const csv = i !== 0
        ? `${json2csv(chunk, { header: false, delimiter: '|', quote: '`' })}\n`
        : `${json2csv(chunk, { delimiter: '|', quote: '`' })}\n`;
      fs.appendFile(`./seeds/${file}_${page}.csv`, csv, (err) => {
        if (err) { console.log(err); }
        chunking(i + 1);
      });
    }
  };
  chunking();
};

const createSeeds = (data) => {
  const page = data[0].id;
  const alsoBought = [];
  data.map((item) => {
    // FOR POSTGRES DATA GENERATION
    for (let i = 0; i < 12; i++) {
      alsoBought.push({
        companyId: item.id,
        alsoboughtId: generateRandomInt(10000000),
      });
    }
    // END FOR POSTGRES DATA GENERATION
    // // FOR CASSANDRA DATA GENERATION
    // const alsoBoughtIds = [];
    // for (let i = 0; i < 12; i++) {
    //   alsoBoughtIds.push(generateRandomInt(10000000));
    // }
    // alsoBought.push({
    //   companyAbbr: item.companyAbbr,
    //   alsobought: alsoBoughtIds,
    // });
    // // END FOR CASSANDRA DATA GENERATION
    const todaysPrice = [];
    todaysPrice.push({ currentPrice: generateRandomDollars(1000, 1) });
    let { currentPrice } = todaysPrice[0];
    for (let i = 1; i < 24; i++) {
      currentPrice *= (0.984375 + Math.random() / 32);
      todaysPrice.push({ currentPrice: currentPrice.toFixed(2) });
    }
    const company = item.companyAbbr.slice(-2).split('').map(char => cache[char][generateRandomInt(cache[char].length)]).join(' ');
    return Object.assign(item, {
      company,
      percentage: generateRandomInt(80, 10),
      currentDay: todaysPrice,
    });
  });
  write(data, page, 'companies', 1024);
  write(alsoBought, page, 'alsobought', 8192);
};

module.exports = createSeeds;
