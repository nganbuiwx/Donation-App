import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {Routes} from '../../navigation/Routes';
import BackButton from '../../components/BackButton/BackButton';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={style.registerContainer}>
        <Header title={'Hello and Welcome !'} type={1}></Header>

        <Input
          title={'First & Last Name'}
          isSecureTextEntry={false}
          keyboardType={'default'}
          value={name}
          onChangeText={value => setName(value)}
        />

        <Input
          title={'Email'}
          isSecureTextEntry={false}
          value={email}
          keyboardType={'email-address'}
          onChangeText={value => setEmail(value)}
        />
        <Input
          title={'Password'}
          isSecureTextEntry={true}
          value={password}
          keyboardType={'default'}
          onChangeText={value => setPassword(value)}
        />

        <Button
          title={'Register'}
          onPress={() => {
            // console.log(name, email, password);
            navigation.navigate(Routes.Login);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;
