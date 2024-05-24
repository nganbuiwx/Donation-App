import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import CardPayment from '../screens/CardPayment/CardPayment';
import Detail from '../screens/Detail/Detail';
import Onboarding from '../screens/Onboarding/Onboarding';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../screens/Loading/Loading';
// import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';

// const Tab = createMaterialBottomTabNavigator();

// export const TabNavigation = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName={Routes.Home}
//       activeColor="#e91e63"
//       barStyle={{backgroundColor: 'tomato'}}>
//       <Tab.Screen name={Routes.Home} component={Home} />
//       <Tab.Screen name={Routes.Detail} component={Detail} />
//     </Tab.Navigator>
//   );
// };

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);
  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.Register} component={Register} />
        <Stack.Screen name={Routes.Loading} component={Loading} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
        <Stack.Screen name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.Register} component={Register} />
        <Stack.Screen name={Routes.Loading} component={Loading} />
      </Stack.Navigator>
    );
  }
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      {/* <Stack.Screen name={Routes.Loading} component={Loading} /> */}
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Detail} component={Detail} />
      <Stack.Screen name={Routes.CardPayment} component={CardPayment} />
    </Stack.Navigator>
  );
};
