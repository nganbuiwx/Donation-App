import React from 'react';
import {View, SafeAreaView} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Login = () => {
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <View style={style.loginContainer}>
        <Header title={'Welcome Back'} type={1}></Header>

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
          title={'Login'}
          onPress={() => {
            console.log('hello');
          }}
        />
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Header
            title={'Don’t have an account?'}
            type={3}
            color={'#156CF7'}></Header>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
