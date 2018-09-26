const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/people-also-bought', { useNewUrlParser: true }, (err) => {
  console.log(err || 'MongoDB connected');
});

const companySchema = new mongoose.Schema({
  _id: Number,
  company: String,
  companyAbbr: String,
  percentage: Number,
  group: Number,
  currentDay: Array,
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
