const fetch = require('node-fetch');

const fetchTransactionData = callback => {
  fetch('http://localhost:8000/transactions')
    .then(transactions => transactions.json())
    .then(data => {
      const { transactions } = data;

      const response = transactions.transactions.filter(purchase => purchase.amount >= 0).map(charitableTransaction => {
        const { transaction_id, date, name, amount } = charitableTransaction;
        return {
          transaction_id,
          date,
          name,
          amount,
          roundUp: Math.round((Math.floor(amount + 1) - amount) * 100) / 100,
        };
      });

      callback(null, response);
    })
    .catch(err => callback(err));
};

module.exports.fetchTransactionData = fetchTransactionData;
