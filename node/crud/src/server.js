const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
}));
// Cross Origin Resources Sharing
// OPTION - Preflight request - handshake
// Access-Control-Allow-Origin: *
// Access-Control-Request-Methods: GET, PUT
// Access-Control-Request-Headers: HTTP_CUSTOM_MY_HEADER
// Access-Control-Max-Age: 1000 * 60 * 60

let groceries = [];
// grocery = { id: 0, name: 'banana' }
// endpoints => controlador
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Bienvenid@s' });
});

// CREATE
app.post('/groceries', (req, res) => {
  const { name } = req.body;

  const grocery = { id: uuidv4(), name };

  groceries = groceries.concat(grocery);

  res.status(201).json({ grocery, message: 'Producto creado' });
});

// READ - ALL, DETAILS
app.get('/groceries', (req, res) => {
  res.status(200).json({ groceries, message: `Se encontraron ${groceries.length} productos` });
});

app.get('/groceries/:groceryId', (req, res) => {
  const { groceryId } = req.params;

  const grocery = groceries.filter((grocery) => grocery.id === groceryId)[0];

  res.status(200).json({ grocery, message: 'Producto encontrado' });
});

// UPDATE
app.put('/groceries/:groceryId', (req, res) => {
  const { groceryId } = req.params;
  const { name } = req.body;

  let i = -1;
  let grocery = groceries.filter((grocery, index) => {
    if(grocery.id === groceryId) {
      i = index;
      return true;
    }
    return false;
  })[0];
  grocery = { ...grocery, name };
  groceries = groceries.slice(0, i).concat(grocery).concat(groceries.slice(i + 1));

  res.status(200).json({ grocery, message: 'Producto actualizado' });
});

// DELETE
app.delete('/groceries/:groceryId', (req, res) => {
  const { groceryId } = req.params;

  groceries = groceries.filter(grocery => grocery.id !== groceryId);

  res.status(200).json({ grocery: groceryId, message: 'Producto eliminado' });
});

app.get('*', (req, res) => {
  res.status(404).json({ message: 'página no encontrada' });
});

app.listen(8000, () => {
  console.log('App running at http://localhost:8000');
});
