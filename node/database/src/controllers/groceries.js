const Grocery = require('../models/groceries');
const User = require('../models/users');

// async/await -> syntatic sugar
// exports.create = (req, res) => {
//   const { body } = req;

//   Grocery.create(body)
//     .then(grocery => {
//       res.status(201).json({ message: 'Producto creado', grocery });
//     })
//     .catch(() => {
//       res.status(400).json({ message: 'Algo salió mal' });
//     });
// };

exports.create = async (req, res) => {
  try {
    // const { userId } = req.params;
    // const grocery = await Grocery.create({ ...body, salesman: userId });

    const { body, userId } = req;

    // const user = await User.findByIdAndUpdate(userId, { ...rest, $push: { products: body.products } })
    const user = await User.findById(userId);

    if(!user) {
      throw new Error('Usuario inválido.')
    }

    const grocery = await Grocery.create({ ...body, salesman: userId });
    user.products.push(grocery._id);
    await user.save({ validateBeforeSave: false });

    res.status(201).json({ message: 'Producto creado', grocery });
  } catch(e) {
    res.status(400).json({ message: e.message });
  }
};

exports.list = async (req, res) => {
  try {
    const { userId } = req.query;
    const groceries = await Grocery.find({ salesman: userId }).select('name');
    res.status(200).json({ message: `${groceries.length} productos encontrados`, groceries })
  } catch(e) {
    res.status(500).json({ message: 'Algo salió mal' })
  }
};

exports.show = async (req, res) => {
  const { groceryId } = req.params;
  try {
    const grocery = await Grocery.findById(groceryId).populate({ path: 'salesman', select: 'email', populate: 'products' });

    if(!grocery) {
      throw new Error('blah blah')
    }

    res.status(200).json({ message: 'Producto encontrado', grocery });
  } catch(e) {
    // res.status(400).json({ message: `El producto con id: ${groceryId} no fue encontrado`});
    res.status(400).json({ message: e.message })
  }
};

exports.update = async (req, res) => {
  const { body, params: { groceryId }, userId } = req;
  try {
    const grocery = await Grocery.findOneAndUpdate({ _id: groceryId, salesman: userId }, body, { new: true });

    if(!grocery) {
      res.status(403).json({ message: 'El producto no pudo ser actualizado' });
      return
    }

    res.status(200).json({ message: 'Producto actualizado', grocery });
  } catch(e) {
    res.status(400).json({ message: 'El producto no pudo ser actualizado' });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { params: { groceryId }, userId } = req;
    const grocery = await Grocery.findOneAndDelete({ _id: groceryId, salesman: userId });

    if(!grocery) {
      res.status(403).json({ message: 'El producto no pudo ser eliminado' });
      return
    }

    res.status(200).json({ message: 'El producto fue borrado', grocery });
  } catch(e) {
    res.status(400).json({ message: 'El producto no pudo ser borrado' });
  }
};
