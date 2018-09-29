const fs = require('fs');

for (let i = 0; i < 26; i++) {
  const data = `const seed = require('./mainSeed'); seed(384616 * ${i}, 384616 * ${i + 1});`;
  fs.writeFile(`./dataGeneration/seed_${i}.js`, data, (err) => {
    if (err) { console.log(err); }
  });
}
