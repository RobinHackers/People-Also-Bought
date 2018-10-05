const model = require('./model');

const controller = {
  peopleAlsoBought: {
    get: (req, res) => {
      model.peopleAlsoBought.get(req.params.companyAbbreviation)
        .then(data => res.json(data))
        .catch(error => res.status('400').send(error.stack));
    },
  },
  company: {
    get: (req, res) => {
      model.company.get(req.params.companyAbbreviation)
        .then(data => res.json(data))
        .catch(error => res.status('400').send(error.stack));
    },
    // curl -d '{"companyAbbr":"ZZZZZ", "company":"Zip Zap", "percentage": 100, "alsoBought":[0,1,2,3,4,5,6,7,8,9,10,11], "currentDay":[{"currentPrice": "100.10"}]}' -H "Content-Type: application/json" -X POST http://localhost:7878/api/company/
    post: (req, res) => {
      model.company.post(req.body)
        .then(() => res.send())
        .catch(error => res.status('400').send(error.stack));
    },
    put: (req, res) => {
      model.company.put(req.body)
        .then(() => res.send())
        .catch(error => res.status('400').send(error.stack));
    },
    delete: (req, res) => {
      model.company.delete(req.params.company)
        .then(() => res.send())
        .catch(error => res.status('400').send(error.stack));
    },
    prices: {
      post: (req, res) => {
        model.company.prices.post(req.body)
          .then(() => res.send())
          .catch(error => res.status('400').send(error));
      },
    },
  },
};

module.exports = controller;
