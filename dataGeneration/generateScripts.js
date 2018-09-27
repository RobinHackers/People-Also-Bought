const fs = require('fs');
const alphabet = require('./alphabet');

alphabet.forEach((char, i) => {
  const data = `const seed = require('./mainSeed'); console.time('seed${char}'); seed(384616 * ${i}, '${char}'); console.timeEnd('seed${char}');`;
  fs.writeFile(`./dataGeneration/seed${char}.js`, data, (err) => {
    if (err) { console.log(err); }
  });
});
