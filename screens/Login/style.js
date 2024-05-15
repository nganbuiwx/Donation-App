import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {FONTSIZE} from '../../utils/theme';
import Colors from '../../utils/color';

const style = StyleSheet.create({
  loginContainer: {
    margin: scale(20),
    marginTop: verticalScale(150),
  },
  errorMessage: {
    fontFamily: 'Inter',
    fontSize: FONTSIZE.size_16,
    color: Colors.Red,
    marginTop: scale(12),
    marginBottom: scale(12),
  },
});

export default style;
