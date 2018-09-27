const fs = require('fs');

fs.readFile('./seeds/companiesA.json', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.parse(data).length);
  }
});
