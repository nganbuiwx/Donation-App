import React from 'react';
import {View, SafeAreaView, Image, Text} from 'react-native';
import style from './style';
import Button from '../../components/Button/Button';
import Badge from '../../components/Badge/Badge';
import {Routes} from '../../navigation/Routes';
import {useSelector} from 'react-redux';
import globalStyle from '../../assets/styles/globalStyle';
import {ScrollView} from 'react-native-gesture-handler';
import BackButton from '../../components/BackButton/BackButton';

const Detail = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyle.BackButton}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={style.detailContainer}>
          <Image
            // source={require('../../assets/images/cactus-image.jpeg')}
            source={{uri: donationItemInformation.image}}
            style={style.image}
          />
          {/* category name */}
          <Badge title={categoryInformation.name} />

          <View style={style.contentContainer}>
            <Text style={globalStyle.header}>
              {donationItemInformation.name}
            </Text>

            <Text style={style.description}>
              {donationItemInformation.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={style.donateButton}>
        <Button
          title={'Donate'}
          onPress={() => {
            navigation.navigate(Routes.CardPayment);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Detail;
