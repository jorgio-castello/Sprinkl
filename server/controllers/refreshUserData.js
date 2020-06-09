const { fetchTransactionData } = require('./helpers/refreshUserDataHelpers');
const { getTrendingData, getPreferencesData } = require('./getTrendingData');

const refreshUserData = (req, res) => {
  fetchTransactionData((err, roundUps) => {
    if (err) {
      throw new Error(err);
    } else {
      getTrendingData((err, trendingCauses) => {
        if (err) {
          throw new Error(err);
        } else {
          let donationsSum = roundUps.map(transaction => transaction.roundUp).reduce((a, b) => a + b);

          getPreferencesData((err, userPreferences) => {
            if (err) {
              throw new Error(err);
            } else {
              const userData = { donationsSum, userPreferences };
              res.json({ roundUps, trendingCauses, userData });
            }
          });

        }
      });
    }
  });
};

module.exports.refreshUserData = refreshUserData;