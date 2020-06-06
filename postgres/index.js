const Sequelize = require('sequelize');

const sequelize = new Sequelize('donation', 'jorgecastello', null, {
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Postgres connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports.sequelize = sequelize;