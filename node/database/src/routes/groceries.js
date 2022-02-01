const router = require('express').Router();
const { create, list, show, update, destroy } = require('../controllers/groceries');
const { auth } = require('../utils/auth');

// router.use(logger);
router.route('/').post(auth, create).get(list);
router.route('/:groceryId').get(show).put(auth, update).delete(auth, destroy);

module.exports = router;
