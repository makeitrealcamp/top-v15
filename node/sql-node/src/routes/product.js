const router = require('express').Router();
const { create, list } = require('../controllers/product');

router.route('/').post(create).get(list);

module.exports = router;
