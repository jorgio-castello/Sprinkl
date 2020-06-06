const express = require('express');
const app = express();
const fetch = require('node-fetch');

// db connection
const { sequelize } = require('../postgres');

const PORT = process.env.port || 8460;

app.get('/transactionData', (req, res) => {
  fetch('http://localhost:8000/transactions')
    .then(res => res.json())
    .then(data => console.log(data));
});

sequelize.sync().then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log(`Server is listening on Port ${PORT}...`);
    }
  });
});
