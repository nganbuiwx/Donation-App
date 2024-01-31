import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';


const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      {/* <Stack.Screen name={Routes.Home} component={Home} /> */}
      {/* <Stack.Screen name={Routes.Login} component={Login} /> */}
      <Stack.Screen name={Routes.Register} component={Register} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
