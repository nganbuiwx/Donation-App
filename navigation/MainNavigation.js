import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import CardPayment from '../screens/CardPayment/CardPayment';
import Detail from '../screens/Detail/Detail';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Register} component={Register} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Detail} component={Detail} />
      <Stack.Screen name={Routes.CardPayment} component={CardPayment} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
