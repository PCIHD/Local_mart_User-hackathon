import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

const ADDButton = ({onPress, noPeople}) => {
  if (noPeople < 7) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.button}
          source={require('../../assets/base_theme/add.png')}
        />
      </TouchableOpacity>
    );
  } else {
    return (
      <Image
        style={styles.button}
        source={require('../../assets/base_theme/greyed_add.png')}
      />
    );
  }
};

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
