import React from 'react';
import {View, TextInput,StyleSheet} from 'react-native';

const SearchBar = ({search, setSearch}) => {
    return <View style={styles.searchbarStyle}>
        <TextInput
            placeholder={'search'}
            value={search}
            onChangeText={setSearch}
        />
    </View>

}

const styles = StyleSheet.create({

    searchbarStyle:{backgroundColor: '#fef8f8',
        borderRadius:40,
        alignItems:'flex-start',
        width: '95%',
        alignSelf: 'center',



    }
});

export default  SearchBar;
