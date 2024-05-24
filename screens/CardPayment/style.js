import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  cardPaymentContainer: {
    marginHorizontal: scale(24),
  },
  paymentButton: {
    marginHorizontal: scale(24),
    marginBottom: scale(24),
  },
  donationAmountDescription: {
    marginTop: verticalScale(12),
    fontSize: scaleFontSize(16),
  },
  cardForm: {
    height: verticalScale(300),
    marginTop: verticalScale(12),
  },
  money: {
    fontSize: scaleFontSize(16),
    fontWeight: 'bold',
  },
});

export default style;
