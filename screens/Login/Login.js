import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {Routes} from '../../navigation/Routes';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <View style={style.loginContainer}>
        <Header title={'Welcome Back'} type={1}></Header>

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
          title={'Login'}
          onPress={() => {
            // console.log(email, password);
            navigation.navigate(Routes.Home);
          }}
        />
        <View style={{alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Routes.Register);
            }}>
            <Header
              title={'Don’t have an account?'}
              type={3}
              color={'#156CF7'}></Header>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
