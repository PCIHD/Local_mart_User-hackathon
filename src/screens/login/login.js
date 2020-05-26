import React , {Component} from 'react';
import {View,Text} from "react-native";
import styles from "./login_style";
import global_styles from "../global_styles/global_style";





function Login({navigation}){
    const not_registered_handler = () =>{
        navigation.navigate('Register');
        console.log('clicked');
    }

        return(
            <View style = {global_styles.base_style}>
                <Text>LoginPage</Text>
                <Text style = {styles.not_registered_text} onPress = {not_registered_handler} >not registered yet?</Text>
            </View>

        );


}

export default Login;
