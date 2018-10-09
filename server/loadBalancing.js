require('newrelic');

const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
// const axios = require('axios');
// const path = require('path');

const router = require('./routes');
const { cache, client } = require('./redis');

const app = express();

app.use(compression());
app.use(parser.json());
app.use(morgan('dev'));

app.set('PORT', process.env.PORT || 8888);

app.use('/:companyAbbr', express.static('public'));

app.use('/api', cache, router);

// // --- Load Balancing ---
// require('./servers');

// const servers = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003'];
// let current = 0;
// const handler = (req, res, next) => {
//   const serverUrl = servers[current];
//   current = (current + 1) % 2;
//   app.post('/api/company/prices/:companyId', (request, response) => {
//     axios.post(serverUrl + request.url, request.body)
//       .then(() => response.send())
//       .catch(error => response.status('403').send(error));
//   });
//   app.get('/api/people-also-bought/:companyAbbr', (request, response) => {
//     axios.get(servers[1] + request.url)
//       .then(({ data }) => {
//         client.setex(path.basename(request.url), 1200, JSON.stringify(data));
//         response.json(data);
//       })
//       .catch(error => response.status('402').send(error));
//   });
//   app.delete('/api/company/prices/:companyId', (request, response) => {
//     axios.delete(servers[2] + request.url)
//       .then(() => response.send())
//       .catch(error => response.status('405').send(error));
//   });
//   next();
// };
// app.use('/', cache, handler);
// // --- Load Balancing ---

app.listen(app.get('PORT'), () => {
  console.log(`Server is connected to ${app.get('PORT')}!`);
});
