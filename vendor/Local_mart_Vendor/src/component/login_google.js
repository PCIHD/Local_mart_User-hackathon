import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  Image,
} from 'react-native';
import styles from "../screens/login/login_style";

class Google_button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {text, onPress} = this.props;

    return (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={style.button}>
          <Image
            source={require('../../assets/base_theme/google_logo.png')}
            style={styles.logo_style}
          />
          <Text style={style.buttonText}>{text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
export default Google_button;

const style = StyleSheet.create({
  button: {
    flexDirection: 'row',
    margin: 15,
    position: 'relative',
    borderRadius: 27,
    borderWidth: 1,
    justifyContent:'space-evenly',


    borderColor: '#c4c4c4',
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 300,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
