import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {scaleFontSize, verticalScale} from '../../assets/styles/scaling';
import {Routes} from '../../navigation/Routes';
import BackButton from '../../components/BackButton/BackButton';

const CardPayment = ({navigation}) => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiredDate, setExpiredDate] = useState('');
  const [CVV, setCVV] = useState('');

  return (
    <SafeAreaView>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={style.cardPaymentContainer}>
        <Header title={'My Card Payment'} type={1}></Header>

        <Input
          title={'Card Holder Name'}
          isSecureTextEntry={false}
          keyboardType={'default'}
          value={name}
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
          <Input
            title={'Expired Date'}
            isSecureTextEntry={false}
            keyboardType={'numeric'}
            placeHolder={'ex. 06/24'}
            style={{flex: 1}}
            value={expiredDate}
            onChangeText={value => setExpiredDate(value)}
          />
          <Input
            title={'CVV'}
            isSecureTextEntry={false}
            keyboardType={'numeric'}
            placeHolder={'ex. 599'}
            value={CVV}
            style={{flex: 1}}
            onChangeText={value => setCVV(value)}
          />
        </View>
        <View style={{marginTop: verticalScale(219)}}>
          <Button
            title={'Confirm Payment'}
            onPress={() => {
              // console.log(CVV, name, cardNumber, expiredDate);
              navigation.navigate(Routes.Home);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardPayment;
