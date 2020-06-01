import React, {Component} from 'react';
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

class Login extends Component {
  not_registered_handler = () => {
    this.props.navigation.navigate('Register');
    console.log('clicked');
  };
  form_data = {
    user: 'Username',
    pass: 'Password',
  };
  state = {
    usr_nm: '',
    paswd: '',
  };
  setUsername = text => {
    this.setState({usr_nm: text});
    console.log(this.state);
  };
  setPassword = text => {
    this.setState({usr_nm: text});
    console.log(this.state);
  };
  //todo add login logic here
  handle_login = () => {
    console.log(this.state);
  };
  render() {
    const background_img = '../../../assets/base_theme/background.png';
    return (
      <SafeAreaView style={global_styles.base_style}>
        <StatusBar barStyle="light-content" backgroundColor="#3DBDC3" />
        <ImageBackground
          source={require(background_img)}
          style={global_styles.image}>
          <Text style={[global_styles.text_style, styles.login_text]}>
            Login
          </Text>
          <Text style={[global_styles.text_style, styles.welcome_text]}>
            Welcome back
          </Text>
          <View style={styles.login_page}>
            <TextInput
              style={styles.input_style}
              onChangeText={text => this.setState({usr_nm: text})}
              placeholder="Username"
            />

            <TextInput
              style={styles.input_style}
              onChangeText={text => this.setState({paswd: text})}
              placeholder="Password"
            />

            <View style={styles.button}>
              <FlatButton
                text="Login"
                style={styles.login_button}
                onPress={this.handle_login}
              />
            </View>
            <Text style={styles.forgot_password}>Forgot Password?</Text>
            <Text
              style={styles.not_registered_text}
              onPress={this.not_registered_handler}>
              not registered yet?
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Login;
