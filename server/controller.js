const model = require('./model');

const controller = {
  peopleAlsoBought: {
    get: (req, res) => {
      model.peopleAlsoBought.get(req.params.company, (err, data) => {
        if (err) { res.status('400').send(err); }
        res.json(data);
      });
    },
  },
  company: {
    get: (req, res) => {
      model.company.get(req.params.company, (err, data) => {
        if (err) { res.status('400').send(err); }
        res.json(data);
      });
    },
    post: (req, res) => {
      model.company.post(req.body, (err) => {
        if (err) { res.status('400').send(err); }
        res.send();
      });
    },
    put: (req, res) => {
      model.company.put(req.body, (err) => {
        if (err) { res.status('400').send(err); }
        res.send();
      });
    },
    delete: (req, res) => {
      model.company.delete(req.params.company, (err) => {
        if (err) { res.status('400').send(err); }
        res.send();
      });
    },
  },
};

module.exports = controller;
