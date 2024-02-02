import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  registerContainer: {
    margin: horizontalScale(24),
    marginTop: horizontalScale(112),
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
});

export default style;
