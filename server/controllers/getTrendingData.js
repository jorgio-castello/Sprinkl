const { getTrendingCauses } = require('../../postgres/models');

const getTrendingData = (req, res) => {
  getTrendingCauses((err, trendingData) => {
    if (err) {
      throw new Error(err);
    } else {
      res.json(trendingData);
    }
  });
};

module.exports.getTrendingData = getTrendingData;