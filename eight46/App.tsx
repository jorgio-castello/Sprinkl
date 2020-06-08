import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

// Nested Components
import Organization from './components/Organization';
import Donate from './components/Donate';
import RoundUps from './components/RoundUps';
import TrendingCauses from './components/TrendingCauses';

// Data
import data from './sampleData/data';
import tailwind from 'tailwind-rn';
const { organizations } = data;

type AppState = {
  organizations: Array<Object>,
  roundUps: Array<Object>,
  trendingCauses: Array<Object>,
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      trendingCauses: [],
      organizations,
      roundUps: []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8460/getTrendingData')
      .then(res => res.json())
      .then(trendingCauses => {
        this.setState({ trendingCauses });
      });
  }

  render() {
    return (
      <View style={tailwind('flex-1')}>
        <View>
          <TrendingCauses trendingCauses={this.state.trendingCauses} />
        </View>
        {/* <View style={tailwind('my-10')}>
          <Text style={styles.text}> Organization Cards </Text>
          <Organization organizationData={this.state.organizations}/>
        </View>

        <View style={tailwind('')}>
        <Text style={styles.text}> Donate Component </Text>
          <Donate />
        </View>

        <View style={tailwind('my-10')}>
          <Text style={styles.text}> Transaction Cards </Text>
          <RoundUps transactionData={this.state.roundUps}/>
        </View> */}
        <View style={tailwind('w-full bg-blue-700 h-20 z-10 absolute bottom-0 left-0 opacity-75 flex-row')}>
          <View style={tailwind('w-1/3 h-full border border-blue-600')}></View>
          <View style={tailwind('w-1/3 h-full border border-blue-600')}></View>
          <View style={tailwind('w-1/3 h-full border border-blue-600')}></View>
        </View>
      </View>
    );
  }
}
