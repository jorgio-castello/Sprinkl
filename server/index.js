const express = require('express');
const app = express();
const cors = require('cors');

// Controllers
const { refreshUserData } = require('./controllers/refreshUserData');

// db connection
const { sequelize } = require('../postgres');

// Express configuration
app.use(cors());
app.use(express.json());

const PORT = process.env.port || 8460;

// routes
app.get('/refreshUserData', refreshUserData);

sequelize.sync().then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log(`Server is listening on Port ${PORT}...`);
    }
  });
});
