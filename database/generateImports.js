const fs = require('fs');

const filepath = './database/import.sh';

const append = (i, path) => {
  const headers = path === 'companies'
    ? 'id, company_abbr, company, percentage, current_day'
    : 'company_id, alsobought_id';
  const data = `cat ./seeds/${path}_${384616 * i}.csv | psql robinhood -c "COPY ${path} (${headers}) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&\n`;
  fs.appendFile(filepath, data, (error) => {
    if (error) { console.log(error); }
  });
};

fs.writeFile(filepath, 'node ./timer.js &&\npsql robinhood < schema.sql &&\n', (err) => {
  if (err) { console.log(err); }
  for (let i = 0; i < 26; i++) {
    append(i, 'companies');
  }
  for (let i = 0; i < 26; i++) {
    append(i, 'alsobought');
  }
  fs.appendFile(filepath, 'psql robinhood < index.sql &&\nnode ./timer.js', (error) => {
    if (error) { console.log(error); }
  });
});
