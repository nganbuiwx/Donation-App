import React from 'react';
import {View, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize, verticalScale} from '../../assets/styles/scaling';
import Badge from '../../components/Badge/Badge';
import {Routes} from '../../navigation/Routes';
import {useSelector} from 'react-redux';
import globalStyle from '../../assets/styles/globalStyle';
import {ScrollView} from 'react-native-gesture-handler';
import BackButton from '../../components/BackButton/BackButton';

const Detail = ({navigation}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate(Routes.Home);
            }}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              color={'#022150'}
              size={scaleFontSize(24)}
              style={{margin: 20}}
            />
          </TouchableOpacity> */}
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={style.detailContainer}>
          <Image
            source={require('../../assets/images/cactus-image.jpeg')}
            style={style.image}
          />

          <Badge title={'Environment'} />
          <View style={style.contentContainer}>
            <Header title={'Tree Cactus Imitatition'} type={1} />
            <Text style={style.content}>
              Donating to a cause you care about can make a positive impact on
              the world. Whether it's a monetary gift, time or resources, every
              donation can help make a difference. Charitable organizations rely
              on the generosity of people like you to support their mission and
              provide assistance to those in need. So why not consider giving a
              gift today and feel the satisfaction of knowing you've made a
              difference in someone's life. Your donation, no matter how small,
              can help change lives for the better.
            </Text>
          </View>

          <View>
            <Button
              title={'Donate'}
              onPress={() => {
                navigation.navigate(Routes.CardPayment);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
