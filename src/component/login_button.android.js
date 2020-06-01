import React, {Component} from 'react';
import {View, StyleSheet, TouchableNativeFeedback, Text} from 'react-native';

class FlatButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {text, onPress} = this.props;
    return (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
export default FlatButton;

const styles = StyleSheet.create({
  button: {

    position: 'relative',
    borderRadius: 27,
    backgroundColor: '#3DBDC3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
