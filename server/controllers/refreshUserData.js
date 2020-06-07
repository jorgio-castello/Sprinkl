const { fetchTransactionData } = require('./helpers/refreshUserDataHelpers');

const refreshUserData = (req, res) => {
  fetchTransactionData((err, transactionData) => {
    if (err) {
      throw new Error(err);
    } else {
      res.json(transactionData);
    }
  });
};

module.exports.refreshUserData = refreshUserData;