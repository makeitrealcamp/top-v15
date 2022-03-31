require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { formData } = require('./utils/formData');

const port = process.env.PORT || 8000;
const app = express();

// app.use(express.json()); // Content-Type: application/json
// app.use(express.urlencoded()); // Content-Type: x-www-form-urlencoded
app.use(cors());
app.use(morgan('dev'));

app.post('/users/profile', formData, (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'OK' });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
})
