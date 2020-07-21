import createDataContext from './createDataContext';
import {Auth} from 'aws-amplify';
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../navigationRef';

const functionalityReducer = (state, action) => {
  switch (action.type) {
    //add state change actions here

    default:
      return state;
  }
};

const get_location = dispatch => {
  return async ({username, code}) => {
    //put get location code here
  };
};
export const {Provider, Context} = createDataContext(
  functionalityReducer,
  {get_location}, // add methods to expose to other screens
  {}, // add states to expose to  other screens
);
