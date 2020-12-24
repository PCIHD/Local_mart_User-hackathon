import createDataContext from './createDataContext';
import {Auth} from 'aws-amplify';
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {errorMessage: '', username: action.payload,token:action.user};

    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({username, email, password, phone_number}) => {
    //make api request for signup
    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number,
        },
      });
      await AsyncStorage.setItem('token', user.userSub);

      dispatch({type: 'signup', payload: username, token:user.userSub});
      navigate('verify');
    } catch (error) {
      console.log('error signing up:', error);
    }
  };
};
const verify = dispatch => {
  return async ({username, code}) => {
    try {
      const user = await Auth.confirmSignUp(username, code);
      console.log('code resent successfully', user);
      navigate('ShopView');
    } catch (e) {
      console.log('error verifying', e);
    }
  };
};
const signin = dispatch => {
  return async ({username, password}) => {
    try {
      const user = await Auth.signIn(username, password);
      await AsyncStorage.setItem('token',user.attributes.sub);

      dispatch({type: 'signup', payload: username, token: user.userSub});
      navigate('ShopView');

    } catch (error) {
      console.log('error signing in', error);
    }
  };
};

const signout = dispatch => {
  return async () => {
    try {
      await Auth.signOut();
      navigate('Login_options');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup,verify},
  {token: null, errorMessage: '',username: ''},
);
