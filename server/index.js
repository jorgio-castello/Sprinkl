const express = require('express');
const app = express();

const PORT = process.env.port || 8460;

app.listen(3000, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log(`Server is listening on Port ${PORT}...`);
  }
});