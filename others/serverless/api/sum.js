// http://localhost:3000/api/sum
const sum = require('./_sum.js')

module.exports = (req, res) => {
  const { a, b } = req.body;

  const result = sum(a, b);

  res.status(200).json({ message: 'hola mundo', result });
}
