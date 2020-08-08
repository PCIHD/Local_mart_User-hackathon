import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

const Review_stars = ({no_stars}) => {
  var list = [];
  var i=0;

  for ( i = 0; i < no_stars; i++) {
    list.push(<Image source={require('../../assets/base_theme/orange_star.png')} key={i}  />);
  }
    for ( i; i < 5; i++) {
    list.push(<Image source={require('../../assets/base_theme/Star.png')} key={i}/>);
    }
  return list;
};

export default Review_stars;

const styles = StyleSheet.create({

});
