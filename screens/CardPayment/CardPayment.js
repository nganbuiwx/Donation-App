import React, {useState} from 'react';
import {View, SafeAreaView, Text, ScrollView, Alert} from 'react-native';
import style from './style';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import globalStyle from '../../assets/styles/globalStyle';
import {useSelector} from 'react-redux';
import {
  CardForm,
  StripeProvider,
  useConfirmPayment,
} from '@stripe/stripe-react-native';
import {STRIPE_PUBLISHABLE_KEY} from '../../constants/App';

const CardPayment = ({navigation}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const [isReady, setIsReady] = useState(false);
  const {confirmPayment, loading} = useConfirmPayment();
  const user = useSelector(state => state.user);
  console.log(user.email);

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(
      'http://localhost:8080/create-payment-intent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          currency: 'usd',
          amount: donationItemInformation.price * 100,
        }),
      },
    );
    const {clientSecret} = await response.json();
    console.log(clientSecret);
    return clientSecret;
  };
  const handlePayment = async () => {
    const clientSecret = await fetchPaymentIntentClientSecret();
    const {error, paymentIntent} = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
    });
    if (error) {
      Alert.alert(
        'Error has occured with your payment',
        error.localizedMessage,
      );
    } else if (paymentIntent) {
      Alert.alert('Successful', 'The payment was confirmed successfully!');
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={globalStyle.BackButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        style={style.cardPaymentContainer}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets>
        <View>
          <Text style={globalStyle.header}>My Card Payment</Text>
          <Text style={style.donationAmountDescription}>
            You are about to donate {donationItemInformation.price}
          </Text>
          <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
            <CardForm
              style={style.cardForm}
              onFormComplete={() => {
                setIsReady(true);
              }}
            />
          </StripeProvider>
        </View>
      </ScrollView>
      <View style={style.paymentButton}>
        <Button
          title={'Payment'}
          isDisabled={!isReady || loading}
          onPress={async () => await handlePayment()}
        />
      </View>
    </SafeAreaView>
  );
};

export default CardPayment;
