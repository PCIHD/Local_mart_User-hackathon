/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import Login_options from './src/screens/login/login_options';
import Login from './src/screens/login/login';
import Register from './src/screens/register/register';
import Itemfeed from './src/screens/main_activity/itemfeed';
import ShopView from './src/component/shopView';
import {createAppContainer} from 'react-navigation';
const HomeStack = createStackNavigator(
  {
    Login_options: Login_options,

    Login: Login,

    Register: Register,

    ItemFeed: Itemfeed,

    ShopView: ShopView,
  },
  {
    initialRouteName: 'Login_options',
  },
);
const App = createAppContainer(HomeStack);
export default App;
