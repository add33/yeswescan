import { createStackNavigator, createAppContainer } from "react-navigation"
import { Colors } from './src/styles/colors'

import HomeScreen from './src/scenes/home'
import ProductScreen from './src/scenes/product'

let screens = {
  Home: { screen: HomeScreen },
  Product: { screen: ProductScreen }
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