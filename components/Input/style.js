import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  InputContainer: {
    marginTop: verticalScale(24),
  },
  textContent: {
    color: '#36455A',
    fontFamily: 'Inter',
    fontSize: 12,
  },
  TextInput:{
    borderBottomWidth: 1,
    borderColor: 'rgba(167, 167, 167, 0.50)',
  },
});

export default style;
