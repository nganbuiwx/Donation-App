import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {FONTSIZE} from '../../utils/theme';
import Colors from '../../utils/color';

const style = StyleSheet.create({
  loginContainer: {
    margin: scale(20),
    flex: 1,
  },
  errorMessage: {
    fontFamily: 'Inter',
    fontSize: FONTSIZE.size_16,
    color: Colors.Red,
    marginTop: scale(12),
    marginBottom: scale(12),
  },
  logo: {
    width: scale(100),
    height: scale(100),
    marginBottom: scale(30),
  },
});

export default style;
