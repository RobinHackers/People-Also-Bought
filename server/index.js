const express = require('express');
const parser = require('body-parser');
const axios = require('axios');
const path = require('path');
const proxy = require('express-http-proxy');

require('newrelic');
const router = require('./routes');
const { cache, client } = require('./redis');

const app = express();

app.use(parser.json());
app.set('PORT', process.env.PORT || 8888);

app.use('/:companyAbbr', express.static('public'));

app.use('/api', cache, router);

// // --- Load Balancing ---
// const servers = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003'];
// let current = 0;
// const handler = (req, res, next) => {
//   const url = servers[current];
//   current = (current + 1) % servers.length;
//   app.use('/', (request, response) => {
//     if (request.method === 'GET') {
//       axios.get(url + request.url)
//         .then(({ data }) => {
//           client.setex(path.basename(request.url), 1200, JSON.stringify(data));
//           response.json(data);
//         })
//         .catch(error => res.status('402').send(error));
//     }
//   });
//   next();
// };
// app.use('/', cache, handler);
// // --- Load Balancing ---

app.listen(app.get('PORT'), () => {
  console.log(`Server is connected to ${app.get('PORT')}!`);
});
