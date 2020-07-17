import createDataContext from './createDataContext';
import trackerApi from '../api/api';
//import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {errorMessage: '', token: action.payload};
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({email, password}) => {
    //make api request for signup
  };
};
const signin = dispatch => {
  return ({email, password}) => {
    //make api request for signin
  };
};

const signout = dispatch => {
  return () => {
    //make api request for signout
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {token: null, errorMessage: ''},
);
