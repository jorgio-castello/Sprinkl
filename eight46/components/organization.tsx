import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Organization() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> OrganizationCard </Text>
      <Text>Name: American Cross</Text>
      <Text>Mission Statement: The American Red Cross prevents..."</Text>
      <Text>Cause: XYZ</Text>
      <Text>Country: USA</Text>
      <Text>Website: "http://www.redcross.org/"</Text>
      <Text>Logo: logo_url</Text>
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