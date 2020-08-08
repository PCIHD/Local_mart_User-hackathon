import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  Image,
} from 'react-native';
import styles from "../screens/login/login_style";
class Facebook_Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {text, onPress} = this.props;
    return (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={style.button}>
          <Image
            source={require('../../assets/base_theme/fb_logo.png')}
            style={styles.logo_style}
          />
          <Text style={style.buttonText}>{text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
export default Facebook_Button;

const style = StyleSheet.create({
  button: {
    flexDirection: 'row',
    position: 'relative',
    borderRadius: 27,
    backgroundColor: '#3b5998',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
