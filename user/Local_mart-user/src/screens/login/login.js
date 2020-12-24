import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import styles from './login_style';
import global_styles from '../global_styles/global_style';
import FlatButton from '../../component/login_button';
import {Context as AuthContext} from '../../context/AuthContext';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {state, signin} = useContext(AuthContext);
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
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize={'none'}
            autoCorrect={false}
          />

          <TextInput
            style={styles.input_style}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}
            secureTextEntry
          />
          <View
            style={{
              marginTop: 10, // 'Gap' between the content & the underline
            }}
          />
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('forget');
              }}>
              <Text style={{textDecorationLine: 'underline'}}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 25, // 'Gap' between the content & the underline
            }}
          />
          <View style={styles.button}>
            <FlatButton text="Login" style={styles.login_button} onPress={async () =>signin({username,password})}/>
          </View>
          {/*For providing space between items*/}
          <View
            style={{
              marginTop: 15, // 'Gap' between the content & the underline
            }}
          />

          <View style={{flexDirection: 'row'}}>
            <Text>Not registered yet? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={styles.not_registered_text}> Sign up!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
