const Company = require('../database');

const addToDb = (entry, cb) => {
  entry.save((err) => {
    if (err) { return cb(err); }
    return cb();
  });
};

const model = {
  peopleAlsoBought: {
    get: (company, cb) => {
      Company.find({ company }, (err1, data) => {
        if (err1) { return cb(err1); }
        let { group } = data[0];
        group = (group % 8) + 1;
        return Company.find({ group }, (err2, companies) => {
          if (err2) { return cb(err2); }
          return cb(null, companies);
        });
      });
    },
  },
  company: {
    get: (company, cb) => {
      Company.find({ company }, (err1, data) => {
        if (err1) { return cb(err1); }
        cb(null, data);
      });
    },
    post: (body, cb) => {
      Company.find({ company: body.company }, (err, data) => {
        if (err) { return cb(err); }
        if (!data) { return addToDb(new Company(body), cb); }
        if (data) { console.log('ALREADY THERE'); }
        cb();
      });
    },
    put: (body, cb) => {
      Company.findOneAndUpdate({ company: body.company }, body, (err, data) => {
        if (err) { return cb(err); }
        if (!data) { return addToDb(new Company(body), cb); }
        cb();
      });
    },
    delete: (company, cb) => {
      Company.findOneAndDelete({ company }, (err, data) => {
        if (err) { return cb(err); }
        if (!data) { console.log('DATA NOT FOUND'); }
        cb();
      });
    },
  },
};

module.exports = model;
