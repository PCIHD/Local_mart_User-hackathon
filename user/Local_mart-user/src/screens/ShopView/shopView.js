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
  StyleSheet,
  Image,
} from 'react-native';

import global_styles from '../global_styles/global_style';
import ADDButton from '../../component/add_button';
import {Context as AuthContext} from '../../context/AuthContext';
import Slots from '../../component/slots';
const ShopView = ({navigation}) => {
  const {state, signup} = useContext(AuthContext);
  const phoneNo = '90324124';

  const background_img = '../../../assets/base_theme/background.png';
  return (
    <SafeAreaView style={global_styles.base_style}>
      <StatusBar barStyle="light-content" backgroundColor="#3DBDC3" />
      <ImageBackground
        source={require(background_img)}
        style={global_styles.image}
      />
      <ScrollView

        >
        <View style={styles.cardStyle}>
          <Image
            source={require('../../../assets/shop_image/shop-640-x-410.png')}
            style={styles.shopImage}
          />
          <Text style={styles.textTitle}>The Good Store</Text>

          <View  style={styles.titleCardslots} >
            <Text style={styles.slotTextStyle}>Slots Next Hour</Text>
            <ADDButton/>

          </View>
          <Slots no_people={5}/>
        </View>
        <View style={styles.cardStyle}>

          <Text style={styles.textTitle}>Contact No:{phoneNo}</Text>

          <View  style={styles.titleCardslots} >



          </View>
        </View>
        <View style={styles.cardStyle}>

          <Text style={styles.textTitle}>Reviews</Text>

          <View  style={styles.titleCardslots} >



          </View>
        </View>



      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopView;
const styles = StyleSheet.create({
  shopImage: {
    height: 250,
    width: 400,

  },
  cardStyle: {
    height: 400,
    width: 400,
    alignContent:'center',
    paddingVertical:20
  },
  textTitle: {

    fontSize: 30,
    fontWeight:'bold',
  },
  listStyle: {
    opacity: 100,
  },

  titleCardslots:{
    flexDirection:'row'


  },
  slotTextStyle:{fontSize:14, padding:10,paddingRight:200,color:'#949494' }
});
