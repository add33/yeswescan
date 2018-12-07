import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { Colors } from '../styles/colors';

let dim = Dimensions.get('window')

export class Header extends React.Component {
    render() {
        return (
            <View style={ styles.header }>
                <Text style={ styles.title }> { this.props.title } </Text>
            </View>
        )
    }
}

export const styles = StyleSheet.create({
  header: {
    height: 44,
    width: dim.width,
    backgroundColor: Colors.blue,
    alignItems: 'center'
  },
  title: {
      fontSize: 28,
      color: "#FFFFFF"
  }
});