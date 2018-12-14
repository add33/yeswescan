import React from 'react';
import { Text, View, FlatList, AsyncStorage, Image, TouchableHighlight } from 'react-native';

import { Header } from '../components/header';
import { styles } from '../styles/main.css';
import { historyStyle } from '../styles/history.css';


export default class HistoryScreen extends React.Component {

  static navigationOptions = {
    headerTitle: <Header title="Yes we Scan" />,
  }

  constructor(props) {
    super(props)
    this.state = {
        products: [1,2,3]
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
    console.log('press product', p)
        this.props.navigation.navigate('Product')
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

  render() {
    return (
        <View>
            <FlatList
              data={ this.state.products }
              renderItem={ (item) => this.renderItem(item) }
              keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
  }
}