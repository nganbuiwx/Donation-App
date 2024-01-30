import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';

const Register = () => {
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <View style={style.registerContainer}>
        <Header title={'Hello and Welcome !'} type={1}></Header>

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
