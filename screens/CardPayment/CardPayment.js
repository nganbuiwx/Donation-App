import React from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize, verticalScale} from '../../assets/styles/scaling';
import {Routes} from '../../navigation/Routes';

const CardPayment = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Routes.Login);
          }}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            color={'#022150'}
            size={scaleFontSize(24)}
            style={{margin: 20}}
          />
        </TouchableOpacity>
      </View>
      <View style={style.cardPaymentContainer}>
        <Header title={'My Card Payment'} type={1}></Header>

        <Input
          title={'Card Holder Name'}
          isSecureTextEntry={false}
          keyboardType={'default'}
        />

        <Input
          title={'Card Number'}
          isSecureTextEntry={false}
          keyboardType={'numeric'}
          placeHolder={'e.g 2524 1950 5100'}
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
            style={{padding: '50px'}}
          />
          <Input
            title={'CVV'}
            isSecureTextEntry={false}
            keyboardType={'numeric'}
            placeHolder={'ex. 599'}
          />
        </View>
        <View style={{marginTop: verticalScale(219)}}>
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
