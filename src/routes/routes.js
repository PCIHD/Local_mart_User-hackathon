import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/login/login';
import Register from '../screens/register/register';
import Login_options from '../screens/login/login_options';

const screens = {
  Login_options: {
    screen: Login_options,
    navigationOptions: {
      headerShown: false,
      headerStatusBarHeight: 0,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
      headerStatusBarHeight: 0,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
