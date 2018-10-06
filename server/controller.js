const model = require('./model');
const client = require('./index');

const controller = {
  peopleAlsoBought: {
    get: (req, res) => model.peopleAlsoBought.get(req.params.companyAbbr)
      .then((data) => {
        client.setex(req.params.companyAbbr, 1200, JSON.stringify(data));
        res.json(data);
      })
      .catch(error => res.status('400').send(error.stack)),
  },
  company: {
    get: (req, res) => model.company.get(req.params.companyAbbr)
      .then(data => res.json(data))
      .catch(error => res.status('400').send(error.stack)),
    post: (req, res) => model.company.post(req.body)
      .then(() => res.send())
      .catch(error => res.status('400').send(error.stack)),
    put: (req, res) => model.company.put(req.body)
      .then(() => res.send())
      .catch(error => res.status('400').send(error.stack)),
    delete: (req, res) => model.company.delete(req.params.companyAbbr)
      .then(() => res.send())
      .catch(error => res.status('400').send(error.stack)),
    prices: {
      post: (req, res) => model.company.prices.post(req.params.companyId, req.body)
        .then(() => res.send())
        .catch(error => res.status('400').send(error)),
      delete: (req, res) => model.company.prices.delete(req.params.companyId, req.body)
        .then(() => res.send())
        .catch(error => res.status('400').send(error)),
    },
  },
};

module.exports = controller;
