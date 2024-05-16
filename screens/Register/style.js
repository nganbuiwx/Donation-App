import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {scale} from 'react-native-size-matters';

const style = StyleSheet.create({
  registerContainer: {
    margin: horizontalScale(20),
  },
  errorMessage: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginTop: verticalScale(12),
    marginBottom: verticalScale(12),
  },
  successMessage: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    color: '#28a745',
    marginTop: verticalScale(12),
    marginBottom: verticalScale(12),
  },
  logo: {
    width: scale(100),
    height: scale(100),
    marginBottom: scale(30),
  },
});

export default style;
