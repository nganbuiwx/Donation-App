import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  loginContainer: {
    margin: horizontalScale(25),
    marginTop: horizontalScale(207),
  },
  errorMessage: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginTop: verticalScale(12),
    marginBottom: verticalScale(12),
  },
});

export default style;
