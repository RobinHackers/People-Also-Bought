const fs = require('fs');

for (let i = 0; i < 26; i++) {
  fs.writeFile(`./seeds/companies_${i}.csv`, '', (err) => {
    if (err) { console.log(err); }
  });
  fs.writeFile(`./seeds/alsobought_${i}.csv`, '', (err) => {
    if (err) { console.log(err); }
  });
  fs.writeFile(`./seeds/prices_${i}.csv`, '', (err) => {
    if (err) { console.log(err); }
  });
}
