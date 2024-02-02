import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {Routes} from '../../navigation/Routes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {loginUser} from '../../api/user';
import {useDispatch} from 'react-redux';
import {resetToInitialState, logIn} from '../../redux/reducers/User';

const Login = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (route?.params?.email && route?.params?.password) {
      setEmail(route.params.email);
      setPassword(route.params.password);
    }
  }, [route.params]);

  // dispatch(resetToInitialState());

  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.loginContainer}>
          <Header title={'Welcome Back'} type={1}></Header>

          <Input
            title={'Email'}
            isSecureTextEntry={false}
            value={email}
            keyboardType={'email-address'}
            onChangeText={value => setEmail(value)}
            placeHolder={'Enter your email'}
          />
          <Input
            title={'Password'}
            isSecureTextEntry={true}
            value={password}
            keyboardType={'default'}
            onChangeText={value => setPassword(value)}
            placeHolder={'*********'}
          />

          {/* Notification */}
          {error.length > 0 && <Text style={style.errorMessage}>{error}</Text>}

          {/* Login button */}
          <Button
            title={'Login'}
            isDisabled={email.length < 5 || password.length < 6}
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(logIn(user.data));
                navigation.navigate(Routes.Home);
              }
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
