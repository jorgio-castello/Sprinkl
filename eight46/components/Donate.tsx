import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

export default function Donate() {
  return (
    <View style={tailwind('border-solid border-4 border-gray-600')}>
      <Text>Red Cross $0.80</Text>
      <Text>Black Lives Matter $0.79</Text>
      <Text>Total: $1.59</Text>
      <Text>Remaining Donations ($): $0.00</Text>
      <Text>Donate Now</Text>
    </View>
  );
}