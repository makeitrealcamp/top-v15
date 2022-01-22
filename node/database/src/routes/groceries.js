const router = require('express').Router();
const { create, list, show, update, destroy } = require('../controllers/groceries');

router.route('/').post(create).get(list);
router.route('/:groceryId').get(show).put(update).delete(destroy);

module.exports = router;
