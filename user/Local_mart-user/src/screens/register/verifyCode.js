import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,

} from 'react-native';
import styles from './register_style';
import global_styles from '../global_styles/global_style';
import FlatButton from '../../component/login_button';
import {Context as AuthContext} from '../../context/AuthContext';

const verifyCode = () => {
  const [code, setCode] = useState('');

  const {state, verify} = useContext(AuthContext);
  const username = state.username;
  console.log(state.username);


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
          <TextInput
            style={styles.input_style}
            placeholder="Code"
            value={code}
            onChangeText={setCode}
            autoCapitalize={'none'}
            autoCorrect={false}
          />

          <View style={styles.button}>
            <FlatButton
              text="Verify"
              onPress={async () =>
                verify({username,code})
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
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default verifyCode;
