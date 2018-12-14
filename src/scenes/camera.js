import React from 'react';
import { Text, View, Image, AsyncStorage, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

import { Header } from '../components/header';
import { cameraStyle } from '../styles/camera.css';

export default class CameraScreen extends React.Component {

  waiting = false

  static navigationOptions = {
    headerTitle: <Header title="Scanner..." />,
  };

  constructor(props) {
    super(props);
    this.state = {
      product: '',
      displayPreview: 'none',
      currentCodebar: ''
    }
  }

  fetchProduct(codebar) {
    // AsyncStorage.removeItem('products')
    if (this.waiting == false && this.state.currentCodebar != codebar.data ) {
      this.waiting = true
      fetch("https://fr.openfoodfacts.org/api/v0/product/" + codebar.data + ".json", {
          method: "GET",
          headers: {
            'Accept': 'application/json',
          }
        }
      ).then((response) => response.json()
      ).then((responseData) => {
        let p = responseData.product
        AsyncStorage.getItem( 'products', (err, result) => {

          this.waiting = false
          this.setState({
            product: p,
            displayPreview: 'flex',
            currentCodebar: codebar.data
          })

          let productsStored = (result != null) ? productsStored = JSON.parse(result) : []
          productsStored.push(p)
          AsyncStorage.setItem( 'products', JSON.stringify(productsStored) )
        })
      })
    }
  }

  onPressViewProduct(){
    let sendData = {
      'product': this.state.product,
      'save': false
    }
    this.props.navigation.navigate('Product', sendData)
  }

  render() {
    return (
      <View style={cameraStyle.cameraWrap}>
        <RNCamera
          ref={ref => { this.camera = ref }}
          style = {cameraStyle.camera}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onBarCodeRead={ (codebar) => this.fetchProduct(codebar)}
        />
        <View style={[ cameraStyle.preview, {display:this.state.displayPreview} ]}>
          <Image
            source={{uri:this.state.product.image_front_url}}
            resizeMode="contain"
            style={cameraStyle.imgProduct}
          />
          <Text style={cameraStyle.title} >{ this.state.product.product_name }</Text>
          <Image
            source={{uri:"https://static.openfoodfacts.org/images/misc/nutriscore-"+this.state.product.nutrition_grade_fr+".png"}}
            resizeMode="contain"
            style={cameraStyle.grade}
          />
          <Button
            onPress={() => this.onPressViewProduct() }
            title="Voir produit"
            accessibilityLabel="Voir produit"
          />
        </View>
      </View>
    );
  }
}