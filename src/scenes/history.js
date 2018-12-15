import React from 'react';
import { Text, View, AsyncStorage, Image, TouchableHighlight } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import { Header } from '../components/header';
import { styles } from '../styles/main.css';
import { Colors } from '../styles/colors';
import { historyStyle } from '../styles/history.css';


export default class HistoryScreen extends React.Component {

  static navigationOptions = {
    headerTitle: <Header title="Yes we Scan" />,
  }

  constructor(props) {
    super(props)
    this.state = {
        products: []
    }
  }

  componentDidMount(){
    AsyncStorage.getItem( 'products',  (err, result) => {
        let tab = JSON.parse(result)
        tab.reverse()
        this.setState({
            products: tab
        })
    })
  }

  onPressProduct(p){
    let sendData = {
      'product': p,
      'save': false
    }
    this.props.navigation.navigate('Product', sendData)
  }

  renderItem(item){
    let p = item.item
    return (
        <TouchableHighlight onPress={() => this.onPressProduct(p)} underlayColor='transparent'>
            <View style={[historyStyle.item, historyStyle.row]}>
                <Image
                    source={{uri:p.image_front_url}}
                    resizeMode="contain"
                    style={historyStyle.imgProduct}
                />
                <Text style={historyStyle.imgProduct} >{ p.product_name }</Text>
                <Image
                    source={{uri:"https://static.openfoodfacts.org/images/misc/nutriscore-"+p.nutrition_grade_fr+".png"}}
                    resizeMode="contain"
                    style={historyStyle.grade}
                />
            </View>
        </TouchableHighlight>
    )
  }

  deleteProduct(data, rowMap) {
    products = this.state.products
    products.splice(data.index, 1)
    this.setState({
        products: products
    })
    AsyncStorage.setItem('products', JSON.stringify(products))
    rowMap[data.index].closeRow()
  }

  renderHiddenItem(data, rowMap){
    return (
        <View style={styles.rowBack}>
            <TouchableHighlight 
                onPress={() => this.deleteProduct(data, rowMap)} 
                underlayColor={Colors.platinum}
                style={[historyStyle.btnSupp]}
            >
                <Text style={historyStyle.btnValue} >Supprimer</Text>
            </TouchableHighlight>
        </View>
    )
  }

  render() {
    return (
        <View>
            <SwipeListView
              useFlatList
              data={ this.state.products }
              renderItem={ (item) => this.renderItem(item) }
              keyExtractor={(item, index) => index.toString()}
              renderHiddenItem={ (data, rowMap) => this.renderHiddenItem(data, rowMap) }
              rightOpenValue={-120}
            />
        </View>
    )
  }
}