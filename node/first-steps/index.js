const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

// endpoint: path + method
app.get('/', (request, response) => {
  response.status(200).send('Hola mundo');
})

app.get('/about', (req, res) => {
  console.log(req);
  res.status(200).json({ message: 'about' });
})

app.post('/', (req, res) => {
  console.log(req.body)
  const { name, password } = req.body;

  if (name !== 'Maria') {
    res.status(403).json({ message: 'invalid user' })
    return;
  }

  res.status(201).json({ message: 'user created' });
})

app.put('/', (req, res) => {
  res.status(200).json({ message: 'updated' });
})
// app.delete()

app.listen(8000, () => {
  console.log('App running at http://localhost:8000')
});

// GET + /about
// POST + /about
// PUT + /about
// DELEte + /about
