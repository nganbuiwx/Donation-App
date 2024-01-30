import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Home = () => {
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <View>
        <Header title={'John Doe'} type={1} />
        <Button title={'Donate'} onPress={()=>{
          console.log('heello')
        }}/>
        <Button title={'Donate'} isDisabled={true} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
