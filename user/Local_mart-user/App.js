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
import ShopView from './src/screens/ShopView/shopView';
import Forgot_Password from './src/screens/forget_password/forget_password';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import verifyCode from './src/screens/register/verifyCode';
import GeoLocation from './src/context/GeoLocation';

const HomeStack = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Login_options: Login_options,
    Login: Login,
    Register: Register,
    verify: verifyCode,
    forget: Forgot_Password,
  }),
  shop_Flow: createStackNavigator({
    ShopView: ShopView,
    Itemfeed: Itemfeed,
  }),
});

const App = createAppContainer(HomeStack);
export default () => {
  return (
    <AuthProvider>
      <App
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
