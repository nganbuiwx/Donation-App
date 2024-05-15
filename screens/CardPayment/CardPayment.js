import React, {useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import style from './style';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {Routes} from '../../navigation/Routes';
import BackButton from '../../components/BackButton/BackButton';
import globalStyle from '../../assets/styles/globalStyle';
import {scale} from 'react-native-size-matters';

const CardPayment = ({navigation}) => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiredDate, setExpiredDate] = useState('');
  const [CVV, setCVV] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={globalStyle.BackButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={style.cardPaymentContainer}>
        <Text style={globalStyle.header}>My Card Payment</Text>
        <Input
          title={'Card Holder Name'}
          isSecureTextEntry={false}
          keyboardType={'default'}
          value={name}
          placeHolder={'Enter your card holder name'}
          onChangeText={value => setName(value)}
        />

        <Input
          title={'Card Number'}
          isSecureTextEntry={false}
          keyboardType={'numeric'}
          placeHolder={'e.g 2524 1950 5100'}
          value={cardNumber}
          onChangeText={value => setCardNumber(value)}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1, marginRight: 20}}>
            <Input
              title={'Expired Date'}
              isSecureTextEntry={false}
              keyboardType={'numeric'}
              placeHolder={'ex. 06/24'}
              value={expiredDate}
              onChangeText={value => setExpiredDate(value)}
            />
          </View>
          <View style={{flex: 1}}>
            <Input
              title={'CVV'}
              isSecureTextEntry={false}
              keyboardType={'numeric'}
              placeHolder={'ex. 599'}
              value={CVV}
              onChangeText={value => setCVV(value)}
            />
          </View>
        </View>
        <View style={{justifyContent: 'flex-end', marginTop: scale(160)}}>
          <Button
            title={'Confirm Payment'}
            onPress={() => {
              navigation.navigate(Routes.Home);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardPayment;
