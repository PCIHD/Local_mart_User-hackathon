import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

class ADDButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.button}
          source={require('../../assets/base_theme/add.png')}
        />
      </TouchableOpacity>
    );
  }
}
export default ADDButton;

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    borderRadius: 27,
    backgroundColor: '#27bac4',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
