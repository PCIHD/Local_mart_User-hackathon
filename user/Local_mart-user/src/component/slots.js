import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  Image,
} from 'react-native';
const slotColors = (no_people) => {
  var list = [];
  var i=0;
  for ( i = 0; i < no_people; i++) {
    list.push(<View style={{width: 24, height: 20, color: '#fb5b01'}} />);
    console.log("wors");
  }
  for (no_people; i < 7; i++) {
    list.push(<View style={{width: 24, height: 20, color: '#3dbdc3'}} />);
  }
  console.log(list);

  return list;
};

const Slots = ({no_people}) => {
  return ;
};

export default Slots;

const styles = StyleSheet.create({
  slotStyle: {
    height: 50,
    width: 200,
    padding: 5,
    borderWidth: 2,
    color: '#17bebb',
  },
});
