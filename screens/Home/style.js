import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  topHeaderContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
    color: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topHeaderContent: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
  searchContainer: {
    margin: horizontalScale(24),
  },
  categoryContainer: {
    marginLeft: horizontalScale(24),
    marginBottom: verticalScale(21),
  },
  categoryContent: {
    flexDirection: 'row',
    marginTop: horizontalScale(16),
    marginRight: horizontalScale(12),
  },
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  categoryHeader: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(16),
    marginTop: verticalScale(6),
  },
});

export default style;
