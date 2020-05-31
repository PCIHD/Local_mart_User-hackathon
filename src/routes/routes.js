import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/login/login';
import Register from '../screens/register/register';

const screens = {
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
