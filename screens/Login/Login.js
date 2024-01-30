import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Login = () => {
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <View style={style.loginContainer}>
        <Header title={'Welcome Back'} type={1}></Header>

        <Button
          title={'Login'}
          onPress={() => {
            console.log('hello');
          }}
        />

        <Header
          title={'Don’t have an account?'}
          type={3}
          color={'#156CF7'}
          ></Header>
      </View>
    </SafeAreaView>
  );
};

export default Login;