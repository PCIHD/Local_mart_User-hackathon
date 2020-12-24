import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styles from './login_style';
import global_styles from '../global_styles/global_style';
import FlatButton from '../../component/login_button';
import Google_button from '../../component/login_google';
import Facebook_Button from '../../component/login_facebook';

class Login_options extends Component {
  //todo add login logic here
  handle_login_press = () => {
    this.props.navigation.navigate('Login');
  };
  componentDidMount() {
    if (this.state.logged_in === true) {
      this.props.navigation.navigate('ItemFeed');
    }
  }
  render() {
    const background_img = '../../../assets/base_theme/background.png';
    this.state = {
      logged_in: false, //todo  set to false for production
    };

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
            <Google_button
              text="Login with Google"
              style={styles.buttonOptions}
            />

            <Facebook_Button text="Login with Facebook" />
            <Text style={styles.registered_text}>Already Registered?</Text>
            <FlatButton text="Login" onPress={this.handle_login_press} />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Login_options;
