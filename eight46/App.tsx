import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';

// Nested Components
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
  userData: Object,
  activeNavigationTab: string,
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      trendingCauses: [],
      organizations,
      roundUps: [{date: new Date(), name: '', transaction_id: 1, amount: 0, roundUp: 1}],
      userData: {userPreferences: [''], donationsSum: 0},
      activeNavigationTab: 'Make a Donation',
    };

    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8460/refreshUserData')
      .then(res => res.json())
      .then(({ trendingCauses, roundUps, userData }) => {
        this.setState({ trendingCauses, roundUps, userData });
      });
  }

  handlePress(tab) {
    this.setState({
      activeNavigationTab: tab,
    });
  }

  render() {
    const { trendingCauses, organizations, roundUps, activeNavigationTab, userData } = this.state;

    return (
      <>
        <View style={tailwind('flex-1')}>
        <View style={tailwind('bg-blue-700 mt-5 h-16 justify-center')}>
          <Text style={tailwind('text-2xl text-white font-bold font-light text-left pl-5')}>{activeNavigationTab}</Text>
        </View>
        {activeNavigationTab === 'Trending Causes' ? (
          <View>
            <TrendingCauses trendingCauses={trendingCauses} />
          </View>
        )
          : <></>
        }
        {activeNavigationTab === 'Make a Donation' ? (
          <ScrollView style={tailwind('pt-4 bg-blue-100 rounded-lg')}>
            <View style={tailwind('')}>
                <Donate userData={userData} transactionData={roundUps} />
            </View>

            <View style={tailwind('my-3')}>
              <RoundUps transactionData={roundUps}/>
            </View>
          </ScrollView>
        ) : <></>
        }

          <View style={tailwind('w-full bg-blue-700 h-20 z-10 absolute bottom-0 left-0 opacity-75 flex-row')}>
            <TouchableOpacity style={tailwind('w-1/3 h-full border border-blue-600')} onPress={() => this.handlePress('Trending Causes')}>
              <Text style={tailwind('text-white text-center content-center')}>Trending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tailwind('w-1/3 h-full border border-blue-600')} onPress={() => this.handlePress('Search Organizations')}>
              <Text style={tailwind('text-white text-center content-center')}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tailwind('w-1/3 h-full border border-blue-600')} onPress={() => this.handlePress('Make a Donation')}>
              <Text style={tailwind('text-white text-center content-center')}>Donate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
