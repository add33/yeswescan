import React from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';

import { Header } from '../components/header';
import { styles } from '../styles/main.css';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    headerTitle: <Header title="Yes we Scan" />,
  }

  constructor(props) {
    super(props)
    this.state = {
      // codebar: '3228881015433' 
      // codebar: '3760091720153' 
      // codebar: '5449000000996' 
      codebar: '8000500085455' 
    }
  }

  fetchProduct() {
    let url = "https://fr.openfoodfacts.org/api/v0/product/" + this.state.codebar +".json"
    fetch(url, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.product)
      let sendData = {
        'product': responseData.product
      }
      this.props.navigation.navigate('Product', sendData)
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          source={require('../../assets/logo.png')}
          style={ styles.logo }
          resizeMode= "contain"
        />

        <Text style={styles.label} >Saisir un Code-Barre</Text>
        <TextInput
          placeholder="9458259245020"
          onChangeText={(text) => this.setState({ codebar: text })}
          value={this.state.codebar}
        />
        <Button
          onPress={() => this.fetchProduct()}
          title="Chercher"
          color="#841584"
          accessibilityLabel="Chercher"
        />

        <Text style={styles.label} > OU </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Camera')}
          title="Scanner"
          color="#841584"
          accessibilityLabel="Scanner"
        />
        <Button
          onPress={() => this.props.navigation.navigate('History') }
          title="Historique"
          accessibilityLabel="Historique"
        />

      </View>
    )
  }
}