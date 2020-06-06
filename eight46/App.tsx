import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Organization from './components/organization';

export default function App() {
  return (
    <View style={styles.container}>
      <Organization />
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
