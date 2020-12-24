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

import Slots from '../../component/slots';
import Review_stars from '../../component/review_stars';

const ShopView = ({navigation}) => {
  const [no_people, set_no_people] = useState(0);
  const handle_add = () => {
    set_no_people(no_people + 1);
    console.log(no_people);
  };

  const phoneNo = '90324124';

  const background_img = '../../../assets/base_theme/background.png';
  return (
    <SafeAreaView style={global_styles.base_style}>
      <StatusBar barStyle="light-content" backgroundColor="#3DBDC3" />
      <ImageBackground
        source={require(background_img)}
        style={global_styles.image}
      />
      <ScrollView>
        <View style={styles.cardStyle}>
          <Image
            source={require('../../../assets/shop_image/shop-640-x-410.png')}
            style={styles.shopImage}
          />
          <Text style={styles.textTitle}>The Good Store</Text>

          <View style={styles.titleCardslots}>
            <Text style={styles.slotTextStyle}>Slots Next Hour</Text>
            <ADDButton onPress={handle_add} noPeople={no_people} />
          </View>
          <Slots no_people={no_people} />
        </View>
        <View style={styles.cardStyle}>
          <Text style={styles.textTitle}>Contact No:{phoneNo}</Text>

          <View style={styles.titleCardslots} />

          <View style={styles.reviewRow}>
            <Text style={styles.reviewText}>Reviews</Text>
            <Review_stars no_stars={3} />
          </View>
          <View style={styles.titleCardslots} />
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
    alignContent: 'center',
    paddingVertical: 20,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  listStyle: {
    opacity: 100,
  },

  titleCardslots: {
    flexDirection: 'row',
  },
  slotTextStyle: {
    fontSize: 14,
    padding: 10,
    paddingRight: 200,
    color: '#949494',
  },
  reviewRow: {
    flexDirection: 'row',
  },
  reviewText: {
    marginRight: 180,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
