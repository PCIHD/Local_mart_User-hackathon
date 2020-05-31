import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  not_registered_text: {
    textAlign: 'center',
    bottom: 0,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  input_style: {
    borderColor: '#E5E5E5',
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  input_view: {
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

    height: '70%',
    width: '95%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

    backgroundColor: '#fef8f8',
  },
  login_button: {
    width: '40%',
  },
});

export default styles;
