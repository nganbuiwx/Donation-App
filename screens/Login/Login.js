import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Text, Image} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {Routes} from '../../navigation/Routes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {loginUser} from '../../api/user';
import {useDispatch} from 'react-redux';
import {logIn} from '../../redux/reducers/User';
import {FONTSIZE} from '../../utils/theme';
import Colors from '../../utils/color';
import {scale} from 'react-native-size-matters';

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

  const handleLogin = async () => {
    navigation.navigate(Routes.Loading); // Navigate to LoadingScreen

    let user;
    try {
      user = await loginUser(email, password);
    } catch (e) {
      setError('Network error, please try again later');
      navigation.goBack(); // Navigate back to the login screen
      return;
    }

    if (!user.status) {
      setError(user.error);
    } else {
      setError('');
      dispatch(logIn(user.data));
      navigation.navigate(Routes.Home);
    }
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets>
        <View style={style.loginContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={style.logo}
          />
          <Text style={globalStyle.header}>Welcome Back!</Text>
          <Text style={globalStyle.descriptionText}>
            Sign in to your account.
          </Text>
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
            onPress={handleLogin}
          />
          <View style={{alignItems: 'center', marginTop: scale(20)}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(Routes.Register);
              }}>
              <Text style={{color: Colors.Blue, fontSize: FONTSIZE.size_16}}>
                Don’t have an account?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
