const User = require('../models/user')
const { welcome } = require('../utils/mailer')

module.exports = {
  async create(req, res) {
    const { body } = req

    const user = await User.create(body);
    await welcome({ email: user.email, name: user.name });

    // enviar un correo de bienvinida

    res.status(201).json(user)
  },
}
