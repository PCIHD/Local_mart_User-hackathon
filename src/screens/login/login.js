import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import styles from './login_style';
import global_styles from '../global_styles/global_style';

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
    return (
      <View style={global_styles.base_style}>
        <View style = {styles.input_view}>
          <Text>Username</Text>
          <TextInput
            style={styles.input_style}
            onChangeText={text => this.setState({usr_nm: text})}
          />
        </View>
        <View style = {styles.input_view}>
          <Text>Password</Text>
          <TextInput
            style={styles.input_style}
            onChangeText={text => this.setState({paswd: text})}
          />
        </View>

        <Button title="login" onPress={this.handle_login} />

        <Text
          style={styles.not_registered_text}
          onPress={this.not_registered_handler}>
          not registered yet?
        </Text>
      </View>
    );
  }
}

export default Login;
