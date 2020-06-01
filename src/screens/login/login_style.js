import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  forgot_password: {
    textAlign: 'center',

    color: '#b0b0b0',
  },
  not_registered_text: {
    textAlign: 'center',
    bottom: 0,
    position: 'absolute',
    color: '#b0b0b0',
    left: 0,
    right: 0,
  },
  input_style: {
    margin: 15,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  input_view: {
    alignContent: 'flex-start',
    paddingTop: 15,
    paddingBottom: 15,
  },

  login_text: {
    fontSize: 35,
    position: 'absolute',
    top: '10%',
    left: '10%',
  },
  welcome_text: {
    fontSize: 18,
    position: 'absolute',
    top: '18%',
    left: '10%',
  },
  login_page: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',

    height: '70%',
    width: '95%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

    backgroundColor: '#fef8f8',
  },
  login_button: {
    width: '40%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  buttonOptions: {
    padding: 15,

    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  registered_text: {
    margin: 15,
    textAlign: 'center',

    color: '#b0b0b0',
  },
  logo_style: {
    width: 25,
    height: 25,
  },
});

export default styles;
