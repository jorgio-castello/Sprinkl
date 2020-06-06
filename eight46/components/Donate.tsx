import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Donate() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Donate Component </Text>
      <Text>Organization #1: $XX.YY - Slider Component / Allow Deletes</Text>
      <Text>Organization #2: $XX.YY - Slider Component</Text>
      <Text>Organization #3: $XX.YY - Slider Component</Text>
      <Text>Total: $XX.YY - Slider Component</Text>
      <Text>Remaining Donations ($): $XX.YY - Slider Component</Text>
      <Text>Donate</Text>
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