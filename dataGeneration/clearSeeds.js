const fs = require('fs');

for (let i = 0; i < 26; i++) {
  fs.writeFile(`./seeds/companies_${384616 * i}.csv`, '', (err) => {
    if (err) { console.log(err); }
  });
  fs.writeFile(`./seeds/alsobought_${384616 * i}.csv`, '', (err) => {
    if (err) { console.log(err); }
  });
  fs.writeFile(`./seeds/prices_${384616 * i}.csv`, '', (err) => {
    if (err) { console.log(err); }
  });
}
