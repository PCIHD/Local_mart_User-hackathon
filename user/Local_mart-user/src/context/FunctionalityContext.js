import createDataContext from './createDataContext';
import {Auth} from 'aws-amplify';
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../navigationRef';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const functionalityReducer = (state, action) => {
  switch (action.type) {
    case 'get_location':
      return {latitude: action.latitude, longitude: action.longitude};
    //add state change actions here

    default:
      return state;
  }
};

const get_location = dispatch => {
  return async ({username, code}) => {
    //put get location code here
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        dispatch({
          type: 'get_location',
          latitude: currentLatitude,
          longitude: currentLongitude,
        });

        //Setting state Latitude to re re-render the Longitude Text
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };
};
export const {Provider, Context} = createDataContext(
  functionalityReducer,
  {get_location}, // add methods to expose to other screens
  {latitude: null, longitude: null}, // add states to expose to  other screens
);
