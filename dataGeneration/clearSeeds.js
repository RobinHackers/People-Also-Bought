const fs = require('fs');
const alphabet = require('./alphabet');

alphabet.forEach((char, idx) => {
  fs.writeFile(`./seeds/companies_${384616 * idx}.csv`, '', (err) => {
    if (err) { console.log(err); }
  });
  fs.writeFile(`./seeds/alsobought_${384616 * idx}.csv`, '', (err) => {
    if (err) { console.log(err); }
  });
});
