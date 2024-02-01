import React from 'react';
import {Image, Pressable, View} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

const SingleDonationItem = props => {
  return (
    <Pressable
      onPress={() => {
        props.onPress(props.donationItemId);
      }}>
      <View>
        <View>
          <View style={style.badge}>
            <Badge title={props.badgeTitle} />
          </View>
          <Image
            resizeMode={'contain'}
            source={require('../../assets/images/cactus-image.jpeg')}
            // source={{uri: props.uri}}
            style={style.image}
          />
        </View>

        <View style={style.donationInformation}>
          <Header title={props.donationTitle} type={3} color={'#0A043C'} />
          <View style={style.price}>
            <Header
              title={'$' + props.price.toFixed(2)}
              type={2}
              color={'#156CF7'}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

SingleDonationItem.defaultProps = {
  onPress: () => {},
};

SingleDonationItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default SingleDonationItem;
