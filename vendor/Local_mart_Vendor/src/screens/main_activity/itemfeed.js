import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  FlatList,
  Text,
  StatusBar,

} from 'react-native';
import global_styles from '../global_styles/global_style';
import styles from './itemfeed_style';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96k-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bfghdjkd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-kjfbd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471fff-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-4ljk71f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '5869jghhgj4a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145fghf571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557afsf1e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29dasd72',
    title: 'Third Item',
  },
];

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
class Itemfeed extends Component {
  render() {
    const background_img = '../../../assets/base_theme/background.png';
    return (
      <SafeAreaView style={global_styles.base_style}>
        <StatusBar barStyle="light-content" backgroundColor="#3DBDC3" />
        <ImageBackground
          source={require(background_img)}
          style={global_styles.image}
        />
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default Itemfeed;
