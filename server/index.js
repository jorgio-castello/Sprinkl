const express = require('express');
const app = express();

const PORT = process.env.port || 8460;

app.get('/hello', (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(PORT, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log(`Server is listening on Port ${PORT}...`);
  }
});