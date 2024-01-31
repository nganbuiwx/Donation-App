import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import Search from '../../components/Search/Search';
import {Routes} from '../../navigation/Routes';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {horizontalScale} from '../../assets/styles/scaling';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';

const Home = ({navigation}) => {
  const categories = useSelector(state => state.categories);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  // dispatch(resetToInitialState());

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* Header */}
          <View style={style.topHeaderContainer}>
            <View style={style.topHeaderContent}>
              <Header title={'Hello,'} type={2} />
              <Header
                title={user.firstName + ' ' + user.lastName[0] + '.👋'}
                type={1}
              />
            </View>
            <Image source={require('../../assets/images/user.png')} />
            {/* <Image source={user.profileImage} /> */}
          </View>
          {/* Search */}
          <View style={style.searchContainer}>
            <Search
              onSearch={value => {
                console.log(value);
              }}
            />
          </View>
          <Pressable style={style.highlightedImageContainer}>
            <Image
              style={style.highlightedImage}
              source={require('../../assets/images/highlighted_image.png')}
              resizeMode={'contain'}
            />
          </Pressable>
          {/* Category */}
          <View style={style.categoryHeader}>
            <Header title={'Select Category'} type={2} />
          </View>
          <View style={style.categoryContainer}>
            <FlatList
              onEndReachedThreshold={0.5}
              onEndReached={() => {
                if (isLoadingCategories) return;

                setIsLoadingCategories(true);
                let newData = pagination(
                  categories.categories,
                  categoryPage,
                  categoryPageSize,
                );
                if (newData.length > 0) {
                  setCategoryList(prevState => [...prevState, ...newData]);
                  setCategoryPage(prevState => prevState + 1);
                }
                setIsLoadingCategories(false);
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={categoryList}
              renderItem={({item}) => (
                <View style={style.categoryItem} key={item.categoryId}>
                  <Tab
                    tabId={item.categoryId}
                    onPress={value => dispatch(updateSelectedCategoryId(value))}
                    title={item.name}
                    isInactive={item.categoryId !== categories.selectedCategory}
                  />
                </View>
              )}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: horizontalScale(24),
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(Routes.Detail);
              }}>
              <SingleDonationItem
                uri={'../../assets/images/cactus-image.jpeg'}
                badgeTitle={'Environment'}
                donationTitle={'Tree Cactus'}
                price={44}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(Routes.Detail);
              }}>
              <SingleDonationItem
                uri={'../../assets/images/cactus-image.jpeg'}
                badgeTitle={'Education'}
                donationTitle={'Genius Rubik'}
                price={50}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: horizontalScale(24),
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(Routes.Detail);
              }}>
              <SingleDonationItem
                uri={'../../assets/images/cactus-image.jpeg'}
                badgeTitle={'Environment'}
                donationTitle={'Tree Cactus'}
                price={44}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(Routes.Detail);
              }}>
              <SingleDonationItem
                uri={'../../assets/images/cactus-image.jpeg'}
                badgeTitle={'Education'}
                donationTitle={'Genius Rubik'}
                price={50}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
