const fs = require('fs');
const alphabet = require('./alphabet');

alphabet.forEach((char, i) => {
  const data = `const seed = require('./mainSeed'); seed(384616 * ${i}, 384616 * ${i + 1});`;
  fs.writeFile(`./dataGeneration/seed_${i}.js`, data, (err) => {
    if (err) { console.log(err); }
  });
});
