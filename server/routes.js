const router = require('express').Router();
const controller = require('./controller');

router.route('/people-also-bought/:companyAbbreviation')
  .get(controller.peopleAlsoBought.get);

router.route('/company')
  .post(controller.company.post)
  .put(controller.company.put);

router.route('/company/:companyAbbreviation')
  .get(controller.company.get)
  .delete(controller.company.delete);

router.route('/company/prices/:companyId')
  .post(controller.company.prices.post);


module.exports = router;
