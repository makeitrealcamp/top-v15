const router = require('express').Router();
const { create } = require('../controllers/users');

router.route('/').post(create);

module.exports = router;
