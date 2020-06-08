const { Sequelize, Model, DataTypes } = require('sequelize');

// INITIALIZE SEQUELIZE w/ POSTGRES ---------------------------------------------
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

sequelize.options.logging = false;

// -------------------------------------------------------------------------------
// INSTANTIATE CAUSE MODEL aka CATEGORY ------------------------------------------
class Cause extends Model {};
Cause.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
  },
  cause: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'cause',
  }
}, {
  modelName: 'causes',
  tableName: 'causes',
  timestamps: false,
  sequelize,
});

// -------------------------------------------------------------------------------
// INSTANTIATE ORGANIZATION MODEL aka non-profit ---------------------------------
class Organization extends Model {};
Organization.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
  },
  photoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'photolink',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name',
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'city',
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'state',
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'country',
  },
  websiteUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'websiteurl',
  },
  mission: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'mission',
  },
  causes: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'causes',
  },
}, {
  modelName: 'organization',
  tableName: 'organizations',
  timestamps: false,
  sequelize,
});

// Foreign key relationship
Organization.belongsTo(Cause, { foreignKey: 'causes_id' });

// -------------------------------------------------------------------------------
// INSTANTIATE trendingCauses MODEL  ---------------------------------------------
class TrendingCauses extends Model {};
TrendingCauses.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
  },
  cause: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'bucket',
  }
}, {
  modelName: 'trendingCauses',
  tableName: 'trendingorganizations',
  timestamps: false,
  sequelize,
});

// Foreign key relationship
TrendingCauses.belongsTo(Organization, { foreignKey: 'organization_id' });

// -------------------------------------------------------------------------------

module.exports.Cause = Cause;
module.exports.Organization = Organization;
module.exports.TrendingCauses = TrendingCauses;
module.exports.sequelize = sequelize;