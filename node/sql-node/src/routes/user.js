const router = require('express').Router();
const { create, list, show, update, destroy } = require('../controllers/user');

router.route('/').post(create).get(list);
router.route('/:id').get(show).put(update).delete(destroy);

module.exports = router;
