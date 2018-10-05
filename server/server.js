const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');

const app = express();
const router = require('./routes');

app.set('PORT', 7878);

app.use(parser.json());
app.use(morgan('dev'));

app.use('/:companyAbbreviation', express.static('public'));

app.use('/api', router);

app.listen(app.get('PORT'), () => {
  console.log(`App is listening to ${app.get('PORT')}`);
});
