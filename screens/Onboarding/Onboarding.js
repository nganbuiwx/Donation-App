import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Colors from '../../utils/color';
import {FONTSIZE} from '../../utils/theme';
import {scale} from 'react-native-size-matters';

const Skip = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: scale(20)}} {...props}>
    <Text style={{fontSize: FONTSIZE.size_16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: scale(20)}} {...props}>
    <Text style={{fontSize: FONTSIZE.size_16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: scale(20)}} {...props}>
    <Text style={{fontSize: FONTSIZE.size_16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: Colors.PinkLight,
          image: (
            <Image source={require('../../assets/images/onboarding1.png')} />
          ),
          title: 'Connect to the World',
          subtitle:
            'Your contributions directly support meaningful causes and help change lives.',
        },
        {
          backgroundColor: Colors.GreenLight,
          image: (
            <Image source={require('../../assets/images/onboarding2.png')} />
          ),
          title: 'Donation',
          subtitle:
            'Donate anytime, anywhere, with just a few taps on your phone.',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
