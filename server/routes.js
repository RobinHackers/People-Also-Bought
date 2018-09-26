const router = require('express').Router();
const controller = require('./controller');

router.route('/people-also-bought/:company')
  .get(controller.peopleAlsoBought.get);

router.route('/company')
  .post(controller.company.post)
  .put(controller.company.put);

router.route('/company/:company')
  .get(controller.company.get)
  .delete(controller.company.delete);

module.exports = router;
