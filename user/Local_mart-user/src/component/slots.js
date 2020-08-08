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
    list.push(<View style={styles.orangeSlot} key={i} />);

  }
  for (no_people; i < 7; i++) {
    list.push(<View style={styles.turquoiseSlot} key={i} />);
  }


  return list;
};

const Slots = ({no_people}) => {
  return <View style={styles.slotStyle}>
    {slotColors(no_people)}
  </View>;
};

export default Slots;

const styles = StyleSheet.create({
  slotStyle: {

    flexDirection:'row',
    height: 20,
    width:200,


    borderRadius:5,
    backgroundColor: '#A0E9E7'
    ,
  },
  orangeSlot:{width: 24,borderRadius:5, height: 20, backgroundColor: '#fb5b01',marginRight:5},
  turquoiseSlot:{width: 24, borderRadius:5,height: 20, backgroundColor: '#3dbdc3',marginRight: 5}
});
