import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import tailwind from 'tailwind-rn';

import TransactionCard from './TransactionCard';

interface Transaction {
  transaction_id: string,
  date: string,
  name: string,
  amount: number,
  roundUp: number,
}

type RoundUpsProps = {
  transactionData: Array<Transaction>,
};

const RoundUps: React.FC<RoundUpsProps> = ({ transactionData }) => {
  return (
    <>
      <Text style={tailwind('ml-4 font-light')}>Recent Transactions</Text>
      { transactionData.map((transaction, index) => {
        if ( index < 3) {
          return (
            <TransactionCard transactionData={transaction} />
          );
        }
      })}
      {/* <FlatList
      style={tailwind('')}
      data={transactionData}
        renderItem={({ item }) => (
          <View style={tailwind('border-solid border-4 border-gray-600 mt-1 mb-1 flex-row justify-between')}>
                <Text>{item.date}</Text>
                <Text>{item.name}</Text>
                <Text>{item.amount}</Text>
                <Text>{item.roundUp}</Text>
            </View>
        )}
        keyExtractor={item => item.transaction_id}
      /> */}
    </>
  );
};

export default RoundUps;