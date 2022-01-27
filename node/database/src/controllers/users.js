const User = require('../models/users');

exports.create = async (req, res) => {
  try {
    const { body } = req;
    const user = await User.create(body);

    res.status(201).json(user);
  } catch(e) {
    res.status(400).json({ error: e });
  }
}
