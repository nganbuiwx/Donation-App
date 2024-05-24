import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';

const Loading = () => {
  const navigation = useNavigation();

  // Optional: Automatically navigate back after a certain time
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.goBack();
    }, 5000); // Auto navigate back after 5 seconds, adjust as needed

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/images/loadingAnimated.json')}
        style={styles.animation}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  animation: {
    width: scale(300),
    height: scale(250),
  },
});

export default Loading;
