import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  topHeaderContainer: {
    marginLeft: horizontalScale(24),
    marginRight: horizontalScale(24),
    marginTop: verticalScale(14),
    width: horizontalScale(375),
    color: '#FFFFFF',
    flexDirection: 'row',
  },
  topHeaderContent: {
    width: horizontalScale(250),
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
});

export default style;
