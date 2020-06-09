const { getTrendingCauses, getUserPreferences } = require('../../postgres/models');

const getTrendingData = (callback) => {
  getTrendingCauses((err, trendingData) => {
    if (err) {
      callback(err);
    } else {
      callback(null, trendingData);
    }
  });
};

const getPreferencesData = (callback) => {
  getUserPreferences(1, (err, preferences) => { // HARD CODING 1 - testing for one user
    if (err) {
      callback(err);
    } else {
      callback(null, preferences);
    }
  });
};

module.exports.getTrendingData = getTrendingData;
module.exports.getPreferencesData = getPreferencesData;