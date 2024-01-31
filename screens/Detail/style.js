import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({

  detailContainer: {
    margin: horizontalScale(24),
    marginTop: verticalScale(7),
  },
  image: {
    height: verticalScale(240),
    width: horizontalScale(300),
    borderRadius: 5,
    marginBottom: verticalScale(20),
  },
  content: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 14,
    letterSpacing: 0.28,
  },
  contentContainer: {
    marginTop: verticalScale(10),
  },
});

export default style;
