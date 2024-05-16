import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

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
  },
  cardForm: {
    height: verticalScale(200),
    marginTop: verticalScale(12),
  },
});

export default style;
