import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RoundUps() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> RoundUp Component </Text>
      <Text>List of Recent Transactions Add / Remove</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  }
});