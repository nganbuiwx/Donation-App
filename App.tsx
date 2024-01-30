import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 80, fontFamily: getFontFamily('Inter', '400')}}>
        Hello
      </Text>
    </SafeAreaView>
  );
};

export default App;
