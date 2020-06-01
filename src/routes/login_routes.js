import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Login_options from "../screens/login/login_options";
import Login from "../screens/login/login";

const pages = {
    login_options:{
        screen: Login_options
    },
    login_form: {
        screen: Login
    }
}

const HomeStack = createStackNavigator(pages);

export default createAppContainer(HomeStack);
