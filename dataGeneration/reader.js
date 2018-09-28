const fs = require('fs');

const filePath = './seeds/companies_0.json';

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.parse(data).length);
  }
});

// const readStream = fs.createReadStream(filePath);
// let chunks = '';
// readStream.on('error', err => console.log(err));
// readStream.on('data', (chunk) => { chunks += chunk; });
// readStream.on('close', () => console.log(JSON.parse(chunks).length));
