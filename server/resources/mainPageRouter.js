const router = require('express').Router();
const mainPageController = require('./mainPageController');

router.route('/pageDetails/data')
  .get(mainPageController.loadPage)

module.exports = router;