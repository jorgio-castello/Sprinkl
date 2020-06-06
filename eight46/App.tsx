import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

// Nested Components
import Organization from './components/Organization';
import Donate from './components/Donate';
import RoundUps from './components/RoundUps';

// Data
import data from './sampleData/data';
import tailwind from 'tailwind-rn';
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
      <View style={tailwind('border-solid border-4 border-gray-600 flex-1')}>

        <View style={tailwind('my-10')}>
          <Text style={styles.text}> Organization Cards </Text>
          <Organization organizationData={organizations}/>
        </View>

        {/* <View style={tailwind('border-solid border-4 border-gray-600')}>
          <Donate />
        </View> */}

        <View style={tailwind('my-10')}>
          <Text style={styles.text}> Transaction Cards </Text>
          <RoundUps transactionData={roundUps}/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginTop: '20%',
  // },
  text: {
    color: 'red',
  }
});
