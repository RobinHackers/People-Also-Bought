const fs = require('fs');
const json2csv = require('json2csv').parse;
const names = require('./createNames');

const generateRandomInt = (max, min = 0) => min + Math.floor(Math.random() * Math.floor(max - min));
const generateRandomDollars = (max, min = 0) => (
  (min + (Math.random() * Math.floor(max - min))).toFixed(2)
);

const write = (data, page, file, chunks, i = 0) => {
  const size = data.length;
  const chunkSize = Math.ceil(size / chunks);
  const chunk = data.slice(chunkSize * i, chunkSize * (i + 1));
  if (chunk.length > 0) {
    const csv = i !== 0
      ? `${json2csv(chunk, { header: false })}\n`
      : `${json2csv(chunk)}\n`;
    fs.appendFile(`./seeds/${file}_${page}.csv`, csv, (err) => {
      if (err) { console.log(err); }
      write(data, page, file, chunks, i + 1);
    });
  }
};

const createSeeds = (data) => {
  const page = data[0].id / 384616;
  const todaysPrice = [];
  const alsoBought = [];
  data = data.map((item) => {
    // Generate alsobought join information
    for (let i = 0; i < 12; i++) {
      alsoBought.push({
        companyId: item.id,
        alsoboughtId: generateRandomInt(10000016, 1),
      });
    }
    // Generate prices
    let currentPrice = generateRandomDollars(1000, 1);
    for (let i = 0; i < 24; i++) {
      currentPrice *= (0.984375 + Math.random() / 32);
      todaysPrice.push({
        companyId: item.id,
        currentPrice: currentPrice.toFixed(2),
      });
    }
    // Generate company information
    const company = item.companyAbbr.slice(-2).split('').map(char => names[char][generateRandomInt(names[char].length)]).join(' ');
    return {
      companyAbbr: item.companyAbbr,
      company,
      percentage: generateRandomInt(80, 10),
    };
  });
  write(data, page, 'companies', 1024);
  write(alsoBought, page, 'alsobought', 8192);
  write(todaysPrice, page, 'prices', 8192);
};

module.exports = createSeeds;
