import {StyleSheet} from 'react-native';
import {FONTSIZE} from '../../utils/theme';
import {scale} from 'react-native-size-matters';
import Colors from '../../utils/color';

const style = StyleSheet.create({
  InputContainer: {
    marginTop: scale(24),
  },
  textContent: {
    color: Colors.GreySlot,
    fontFamily: 'Inter',
    fontSize: FONTSIZE.size_14,
    marginBottom: scale(10),
  },
  TextInput: {
    borderWidth: 1,
    padding: scale(20),
    fontFamily: 'Inter',
    fontSize: FONTSIZE.size_14,
    borderColor: Colors.Grey,
    backgroundColor: Colors.Background,
    borderRadius: scale(8),
  },
});

export default style;
