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
