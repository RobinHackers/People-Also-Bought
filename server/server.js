const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/people-also-bought', { useNewUrlParser: true }, (err) => {
  console.log(err || 'MongoDB connected');
});

const app = express();
const router = require('./routes');

app.set('PORT', 7878);

app.use(parser.json());
app.use(morgan('dev'));

app.use('/:company', express.static('public'));

app.use('/api', router);

app.listen(app.get('PORT'), () => {
  console.log(`App is listening to ${app.get('PORT')}`);
});
