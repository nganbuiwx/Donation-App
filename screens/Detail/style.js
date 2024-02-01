import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  detailContainer: {
    margin: horizontalScale(24),
    marginTop: verticalScale(7),
  },
  image: {
    height: verticalScale(240),
    width: '100%',
    borderRadius: horizontalScale(5),
    marginBottom: verticalScale(25),
    marginTop: verticalScale(12),
  },
  description: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '400',
    lineHeight: scaleFontSize(29),
    letterSpacing: 0.28,
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    marginBottom: verticalScale(10),
  },
  contentContainer: {
    marginTop: verticalScale(10),
  },
  donateButton: {
    marginHorizontal: horizontalScale(20),
  },
});

export default style;
