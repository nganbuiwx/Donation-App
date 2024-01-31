import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Register = () => {
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <View style={style.registerContainer}>
        <Header title={'Hello and Welcome !'} type={1}></Header>

        <Input
          title={'First & Last Name'}
          isSecureTextEntry={false}
          keyboardType={'default'}
        />

        <Input
          title={'Email'}
          isSecureTextEntry={false}
          keyboardType={'email-address'}
        />

        <Input
          title={'Password'}
          isSecureTextEntry={true}
          keyboardType={'default'}
        />

        <Button
          title={'Register'}
          onPress={() => {
            console.log('hello');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;
