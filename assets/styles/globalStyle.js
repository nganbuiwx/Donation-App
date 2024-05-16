import {StyleSheet} from 'react-native';
import {FONTSIZE} from '../../utils/theme';
import {scale} from 'react-native-size-matters';
import Colors from '../../utils/color';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: Colors.White,
  },
  flex: {
    flex: 1,
  },
  header: {
    fontSize: FONTSIZE.size_30,
    fontWeight: '800',
    marginBottom: scale(10),
  },
  descriptionText: {
    fontSize: FONTSIZE.size_16,
    color: Colors.GreyText,
  },
  BackButton: {
    marginLeft: scale(10),
    marginTop: scale(10),
  },
});

export default globalStyle;
