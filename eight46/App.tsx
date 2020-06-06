import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Organization from './components/Organization';
import Donate from './components/Donate';
import RoundUps from './components/RoundUps';

// export default function App() {

// }

export default class App extends React.Component<undefined> {
  constructor(props: undefined) {
    super(props);
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8460/hello')
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <View style={styles.container}>
        <Organization />
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
  },
  text: {
    color: 'red',
  }
});
