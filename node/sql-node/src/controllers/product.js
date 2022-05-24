const { Product, User } = require('../models');

exports.create = async (req, res) => {
  const { body } = req;

  const product = await Product.create({ name: body.name }, {
    include: User
  });

  product.setUser(body.userId)

  res.status(201).json(product)
}

exports.list = async (req, res) => {
  const products = await Product.scope({ include: [User] }).findAll();

  res.status(200).json(products)
}
