import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles/main.css';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    headerTitle: "Home",
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}