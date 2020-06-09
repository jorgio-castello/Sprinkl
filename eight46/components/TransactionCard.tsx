import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import tailwind from 'tailwind-rn';
import moment from 'moment';

interface Transaction {
  transaction_id: string,
  date: string,
  name: string,
  amount: number,
  roundUp: number,
}

type TransactionCardProps = {
  transactionData: Transaction,
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transactionData }) => {
  const { transaction_id, date, name, amount, roundUp } = transactionData;

  const formattedDate = moment(date).format('MM/DD/YYYY');
  const formattedAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  const formattedRoundUp = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(roundUp);
  let formattedName = name;
  if (formattedName.length > 2) {
    formattedName = `${formattedName.slice(0, 2)}*****`;
  }

  return (
    <>
    <View key={transaction_id} style={tailwind('w-11/12 h-10 flex-row bg-white border border-gray-300 rounded-md mx-4 mt-2 justify-around')}>
      <View style={tailwind('w-1/4 pl-2')}>
        <Text style={tailwind('font-light text-xs leading-9 text-left')}>{formattedDate}</Text>
      </View>
      <View style={tailwind('w-1/4 pl-5')}>
        <Text style={tailwind('font-light text-xs leading-9 text-left')}>{formattedName}</Text>
      </View>
      <View style={tailwind('w-1/4 pr-3')}>
        <Text style={tailwind('font-light text-xs leading-9 text-right')}>{formattedAmount}</Text>
      </View>
      <View style={tailwind('w-1/4 pr-2')}>
        <Text style={tailwind('font-light text-xs font-semibold leading-9 text-teal-500 text-right')}>{`+${formattedRoundUp}`}</Text>
      </View>
    </View>
    </>
  );
};

export default TransactionCard;