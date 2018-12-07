import React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from '../styles/main.css';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    headerTitle: "Home",
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo.png')}
          style={ styles.logo }
          resizeMode= "contain"
        />
      </View>
    );
  }
}