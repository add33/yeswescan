import React from 'react';
import { Text, View } from 'react-native';

import { Header } from '../components/header';
import { styles } from '../styles/main.css';

export default class HistoryScreen extends React.Component {

  static navigationOptions = {
    headerTitle: <Header title="Yes we Scan" />,
  }

  render() {
    return (
        <View>
            <Text>Hello historique</Text>
        </View>
    )
  }
}