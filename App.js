import { createStackNavigator, createAppContainer } from "react-navigation"
import { Colors } from './src/styles/colors'

import HomeScreen from './src/scenes/home'
import ProductScreen from './src/scenes/product'
import HistoryScreen from './src/scenes/history'

let screens = {
  Home: { screen: HomeScreen },
  Product: { screen: ProductScreen },
  History: { screen: HistoryScreen }
}

let options = {
  defaultNavigationOptions: {
    initialRouteName: 'Home',
    headerStyle: {
      backgroundColor: Colors.blue
    }
  }
}

const AppNavigator = createStackNavigator(screens, options);

export default createAppContainer(AppNavigator);