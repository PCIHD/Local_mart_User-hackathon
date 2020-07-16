import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styles from './login_style';
import global_styles from '../global_styles/global_style';
import FlatButton from '../../component/login_button';

const Login = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const background_img = '../../../assets/base_theme/background.png';
  return (
    <SafeAreaView style={global_styles.base_style}>
      <StatusBar barStyle="light-content" backgroundColor="#3DBDC3" />
      <ImageBackground
        source={require(background_img)}
        style={global_styles.image}>
        <Text style={[global_styles.text_style, styles.login_text]}>Login</Text>
        <Text style={[global_styles.text_style, styles.welcome_text]}>
          Welcome back
        </Text>
        <View style={styles.login_page}>
          <TextInput
            style={styles.input_style}
            placeholder="Email"
            value={Email}
            onChangeText={setEmail}
            autoCapitalize={'none'}
            autoCorrect={false}


          />

          <TextInput
            style={styles.input_style}
            placeholder="Password"
            value={Password}
            onChangeText={setPassword}
            autoCorrect={false}
            secureTextEntry
          />

          <View style={styles.button}>
            <FlatButton text="Login" style={styles.login_button} />
          </View>
          <Text style={styles.forgot_password}>Forgot Password?</Text>

          <Text
            style={styles.not_registered_text}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            not registered yet?
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
