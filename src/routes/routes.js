import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/login/login';
import Register from '../screens/register/register';

const screens = {
    Login: {
        screen: Login
    },
    Register:{
        screen: Register
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
