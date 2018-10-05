const model = require('./model');

const controller = {
  peopleAlsoBought: {
    get: (req, res) => {
      model.peopleAlsoBought.get(req.params.companyAbbreviation)
        .then(data => res.json(data))
        .catch(error => res.status('400').send(error));
    },
  },
  company: {
    get: (req, res) => {
      model.company.get(req.params.companyAbbreviation)
        .then(data => res.json(data))
        .catch(error => res.status('400').send(error));
    },
    post: (req, res) => {
      model.company.post(req.body)
        .then(() => res.send())
        .catch(error => res.status('400').send(error));
    },
    put: (req, res) => {
      model.company.put(req.body)
        .then(() => res.send())
        .catch(error => res.status('400').send(error));
    },
    delete: (req, res) => {
      model.company.delete(req.params.company)
        .then(() => res.send())
        .catch(error => res.status('400').send(error));
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
