const Grocery = require('../models/groceries');

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
    const { body } = req;

    const grocery = await Grocery.create(body);
    res.status(201).json({ message: 'Producto creado', grocery });
  } catch(e) {
    res.status(400).json({ message: e.messsage });
  }
};

exports.list = async (req, res) => {
  try {
    const groceries = await Grocery.find()
    res.status(200).json({ message: `${groceries.length} productos encontrados`, groceries })
  } catch(e) {
    res.status(500).json({ message: 'Algo salió mal' })
  }
};

exports.show = async (req, res) => {
  const { groceryId } = req.params;
  try {
    const grocery = await Grocery.findById(groceryId);

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
  const { body, params: { groceryId } } = req;
  try {
    const grocery = await Grocery.findByIdAndUpdate(groceryId, body, { new: true });
    res.status(200).json({ message: 'Producto actualizado', grocery });
  } catch(e) {
    res.status(400).json({ message: 'El producto no pudo ser actualizado' });
  }
};

exports.destroy = async (req, res) => {
  const { groceryId } = req.params;

  try {
    const grocery = await Grocery.findByIdAndDelete(groceryId);

    res.status(200).json({ message: 'El producto fue borrado', grocery });
  } catch(e) {
    res.status(400).json({ message: 'El producto no pudo ser borrado' });
  }
};
