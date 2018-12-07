import React from 'react';
import { Text, View, Image } from 'react-native';

import { Header } from '../components/header';
import { styles } from '../styles/main.css';
import { productStyle } from '../styles/product.css';

export default class ProductScreen extends React.Component {

  static navigationOptions = {
    headerTitle: <Header title="Fiche Produit" />,
  }

  render() {
    let p = this.props.navigation.getParam("product")
    return (
        <View style={ productStyle.container }>
            <Text style={ productStyle.title }> {p.product_name} </Text>
            <Text style={ productStyle.subTitle }> {p.generic_name_fr} </Text>
            <Image
                source={{uri:"https://static.openfoodfacts.org/images/misc/nutriscore-"+p.nutrition_grade_fr+".png"}}
                style={ productStyle.grade }
                resizeMode="contain"
            />

            <Text style={ productStyle.info }> Informations Produit</Text>

            <View style={productStyle.row}>

              <Image
                  source={{uri:p.image_front_url}}
                  style={ productStyle.imgProduct }
                  resizeMode="contain"
              />

              <View style={productStyle.infoWrap}>
                <Text style={ productStyle.bold }> Marques : </Text>
                <Text> {p.brands} </Text>

                <Text style={ productStyle.bold }> Quantité : </Text>
                <Text> {p.quantity} </Text>

                <Text style={ productStyle.bold }> Categorie : </Text>
                <Text> {p.categories} </Text>
              </View>
              
            </View>

        </View>
    )
  }
}