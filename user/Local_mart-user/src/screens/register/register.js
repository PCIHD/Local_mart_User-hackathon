import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import styles from './register_style';
import global_styles from '../global_styles/global_style';
import FlatButton from '../../component/login_button';
import {Context as AuthContext} from '../../context/AuthContext';
const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone_number, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const {state, signup} = useContext(AuthContext);

  const background_img = '../../../assets/base_theme/background.png';
  return (
    <SafeAreaView style={global_styles.base_style}>
      <StatusBar barStyle="light-content" backgroundColor="#3DBDC3" />
      <ImageBackground
        source={require(background_img)}
        style={global_styles.image}>
        <Text style={[global_styles.text_style, styles.login_text]}>
          Signin
        </Text>
        <Text style={[global_styles.text_style, styles.welcome_text]}>
          Welcome to LocalMart
        </Text>
        <View style={styles.login_page}>
          <ScrollView>
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
              placeholder="Phone no"
              value={phone_number}
              onChangeText={setPhone}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
            <TextInput
              style={styles.input_style}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
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
                <Text style={{textDecorationLine: 'underline'}}>
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
              <FlatButton
                text="register"
                onPress={async () =>
                  signup({username, email, password, phone_number})
                }
              />
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
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Register;
