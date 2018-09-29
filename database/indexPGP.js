// const pgp = require('pg-promise')({ capSQL: true });
// const fs = require('fs');

// const db = pgp({
//   user: 'eddielo',
//   host: 'localhost',
//   database: 'robinhood',
// });

// const cs1 = new pgp.helpers.ColumnSet([
//   'id',
//   'company',
//   { name: 'company_abbr', prop: 'companyAbbr' },
//   'percentage',
//   // { name: 'also_bought', prop: 'alsoBought' },
//   { name: 'current_day', prop: 'currentDay', cast: 'JSON[]' },
// ],
// { table: 'companies' });

// const cs2 = new pgp.helpers.ColumnSet([
//   { name: 'company_id', prop: 'id' },
//   'alsobought_id',
// ],
// { table: 'alsobought' });

// console.time('total');
// const readJSON = (i = 0) => {
//   console.time(`file ${i}`);
//   if (i < 26) {
//     fs.readFile(`./seeds/companies_${384616 * i}.json`, (err, data) => {
//       if (err) { console.log(err); }
//       data = JSON.parse(data);
//       const insertIntoDB = (j = 0) => {
//         const dataSize = data.length;
//         const chunks = 512;
//         const chunkSize = Math.ceil(dataSize / chunks);
//         const chunk = data.slice(j * chunkSize, (j + 1) * chunkSize);
//         if (chunk.length > 0) {
//           const alsoBought = [];
//           chunk.forEach(company => company.alsoBought.forEach((alsoboughtId) => {
//             alsoBought.push({
//               id: company.id,
//               alsobought_id: alsoboughtId,
//             });
//           }));
//           const query1 = pgp.helpers.insert(chunk, cs1);
//           const query2 = pgp.helpers.insert(alsoBought, cs2);
//           db.none(query1)
//             .then(() => db.none(query2)
//               .then(() => {
//                 insertIntoDB(j + 1);
//                 if (j === chunks / 3) { readJSON(i + 1); }
//                 if (j + 1 === chunks) { console.timeEnd(`file ${i}`); }
//               })
//               .catch(error => console.log(error)))
//             .catch(error => console.log(error));
//         }
//       };
//       insertIntoDB();
//     });
//   } else {
//     console.timeEnd('total');
//   }
// };
// readJSON();

// // db.query('SELECT * FROM companies')
// //   .then(data => console.log(typeof data[0].currentDay[0]))
// //   .catch(err => console.log(err));
