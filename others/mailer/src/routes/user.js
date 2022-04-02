const router = require('express').Router()
const userController = require('../controllers/user')

router.route('/signup').post(userController.create)

module.exports = router
