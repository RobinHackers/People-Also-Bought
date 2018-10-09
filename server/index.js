require('newrelic');

const express = require('express');
const parser = require('body-parser');
const compression = require('compression');
// const morgan = require('morgan');

const router = require('./routes');
const { cache } = require('./redis');

const app = express();

app.use(compression());
app.use(parser.json());
// app.use(morgan('dev'));

app.set('PORT', process.env.PORT || 8888);

app.use('/:companyAbbr', express.static('public'));

app.use('/api', cache, router);

app.listen(app.get('PORT'), () => {
  console.log(`Server is connected to ${app.get('PORT')}!`);
});
