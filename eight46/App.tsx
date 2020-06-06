import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

// Nested Components
import Organization from './components/Organization';
import Donate from './components/Donate';
import RoundUps from './components/RoundUps';

// Data
import data from './sampleData/data';
const { organizations, roundUps } = data;

type AppState = {
  organizations: Array<Object>,
  roundUps: Array<Object>,
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: Object) {
    super(props);
    this.state = { organizations, roundUps };
  }

  componentDidMount() {
    // fetch('http://127.0.0.1:8460/hello')
    //   .then(res => res.json())
    //   .then(data => console.log(data));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Organization Cards </Text>
        <Organization organizationData={organizations}/>
        <Donate />
        <RoundUps />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
  },
  text: {
    color: 'red',
  }
});
