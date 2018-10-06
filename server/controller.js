const redis = require('redis');
const model = require('./model');

// --- REDIS CACHE ---
const client = redis.createClient(process.env.REDIS_PORT || 6379);

client.on('connect', () => {
  console.log('Redis client connected');
});

const cache = (req, res, next) => {
  client.get(req.params.companyAbbr, (error, data) => {
    if (error) { res.status('401').send(error); }
    if (data !== null) {
      res.send(data);
    } else {
      next();
    }
  });
};
// --- REDIS CACHE ---

const controller = {
  peopleAlsoBought: {
    get: (req, res) => {
      cache(req, res, () => model.peopleAlsoBought.get(req.params.companyAbbr)
        .then((data) => {
          client.setex(req.params.companyAbbr, 600, JSON.stringify(data));
          res.json(data);
        })
        .catch(error => res.status('400').send(error.stack)));
    },
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
    delete: (req, res) => model.company.delete(req.params.company)
      .then(() => res.send())
      .catch(error => res.status('400').send(error.stack)),
    prices: {
      post: (req, res) => model.company.prices.post(req.body)
        .then(() => res.send())
        .catch(error => res.status('400').send(error)),
    },
  },
};

module.exports = controller;
