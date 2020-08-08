import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import global_styles from '../global_styles/global_style';
import SearchBar from '../../component/searchBar';
const shopList = ({navigation}) => {
  const [search, setSearch] = useState('');

  const background_img = '../../../assets/base_theme/background.png';
  return (
    <SafeAreaView style={global_styles.base_style}>
      <StatusBar barStyle="light-content" backgroundColor="#3DBDC3" />
      <ImageBackground
        source={require(background_img)}
        style={global_styles.image}>
          <View style={{flex:1}}>
              <SearchBar search={search} setSearch={setSearch}/>
        <View style={styles.list_page}>
          <Text style={styles.header_style}>Shops near you</Text>

        </View>
          </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default shopList;

const styles = StyleSheet.create({
  list_page: {
      flex:1,
    position: 'absolute',
    bottom: 0,

    alignSelf: 'center',
    alignItems: 'center',

    height: '90%',
    width: '95%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

    backgroundColor: '#fef8f8',
  },
    header_style:{
      marginTop:10,
      fontSize:20,
        fontWeight:'bold',
      alignItems: 'flex-start'
    }
});
