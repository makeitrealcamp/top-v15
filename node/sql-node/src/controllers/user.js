const { User } = require('../models');

exports.create = async (req, res) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    res.status(201).json(user);
  } catch(e) {
    res.status(400).json(e.message);
  }
}

exports.list = async (req, res) => {
  const users = await User.findAll();

  res.status(200).json(users);
}

exports.show = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  res.status(200).json(user)
}

exports.update = async (req, res) => {
  const { body, params: { id } } = req;

  let user = await User.findByPk(id);
  user = await user.update(body);

  // const user = await User.update(body, {
  //   where: {
  //     id,
  //   },
  // });

  res.status(200).json(user);
}

exports.destroy = async (req, res) => {
  const { id } = req.params;

  // const user = await User.findByPk(id);
  // await user.destroy();

  const user = await User.destroy({
    where: {
      id,
    },
  });

  res.status(200).json(user)
}
