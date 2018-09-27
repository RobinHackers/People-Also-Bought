const fs = require('fs');
const cache = require('./cacheNames');

const generateRandomInt = (max, min = 0) => min + Math.floor(Math.random() * Math.floor(max - min));

const createSeeds = (data) => {
  const alsoBought = [];
  for (let i = 0; i < 12; i++) {
    alsoBought.push(generateRandomInt(10000000));
  }
  data.map((item) => {
    const company = item.companyAbbr.slice(-2).split('').map(char => cache[char][generateRandomInt(cache[char].length)]).join(' ');
    return {
      id: item.id,
      companyAbbr: item.companyAbbr,
      company,
      percentage: generateRandomInt(100),
      alsoBought,
    };
  });
  for (let i = 0; i < 1024; i++) {
    let chunk = data.slice(376 * i, 376 * (i + 1));
    if (chunk.length > 0) {
      chunk = JSON.stringify(chunk);
      if (i !== 0) { chunk.slice(1); }
      if (chunk.length !== 376) { chunk.slice(-1); }
      fs.appendFile(`./seeds/companies${chunk[0].companyAbbr[0]}.json`, chunk, (err) => {
        if (err) { console.log(err); }
      });
    }
  }
};

module.exports = createSeeds;

// const writeFile = (x) => {
//   // let chunk = results.slice(375 * x, 375 * (x + 1));
//   let chunk = results.slice(2 * x, 2 * (x + 1));
//   console.log(chunk)
//   if (chunk.length > 0) {
//     chunk = JSON.stringify(chunk);
//     if (x !== 0) { chunk.slice(1); }
//     if (chunk[375 * (x + 1)]) { chunk.slice(-1); }
//     fs.appendFile(`./seeds/companies${current}.json`, chunk, (err) => {
//       if (err) { return console.log(err); }
//       writeFile(x);
//     });
//   }
// };
// writeFile(0);
