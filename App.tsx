import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './navigation/RootNavigation';
import {AppState} from 'react-native';
import {checkToken} from './api/user';

const App = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('You have come back');
          await checkToken();
        }
        appState.current = nextAppState;
      },
    );
    checkToken();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
