import React from 'react';
import {View, SafeAreaView} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/scaling';

const Register = () => {
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <View>
        <FontAwesomeIcon
          icon={faArrowLeft}
          color={'#022150'}
          size={scaleFontSize(24)}
          style={{margin: 20}}
        />
      </View>
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
