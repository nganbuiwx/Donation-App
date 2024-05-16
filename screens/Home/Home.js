import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Pressable,
  Dimensions,
  Text,
} from 'react-native';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';
import Search from '../../components/Search/Search';
import {Routes} from '../../navigation/Routes';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {resetToInitialState} from '../../redux/reducers/User';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import {updateSelectedDonationId} from '../../redux/reducers/Donations';
import {logOut} from '../../api/user';
import {FONTSIZE} from '../../utils/theme';

const Home = ({navigation}) => {
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  // dispatch(resetToInitialState());

  const [donationItems, setDonationItems] = useState([]);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  // dispatch(resetDonations());
  useEffect(() => {
    const items = donations.donations.filter(value =>
      value.categoryIds.includes(categories.selectedCategory),
    );
    setDonationItems(items);
  }, [categories.selectedCategory]);

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
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* Header */}
          <View style={style.topHeaderContainer}>
            <View style={style.topHeaderContent}>
              <Text style={globalStyle.header}>Hello, </Text>
              <Text style={globalStyle.title}>{user.displayName + ' 👋'}</Text>
            </View>
            <View>
              <Image source={require('../../assets/images/user.png')} />
              <Pressable
                onPress={async () => {
                  dispatch(resetToInitialState());
                  await logOut();
                }}>
                <Header type={3} title={'Logout'} color={'gray'} />
              </Pressable>
            </View>
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
          {/* Highlighted Image */}
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
          {/* Donation Item */}
          {donationItems.length > 0 && (
            <View style={style.donationContainer}>
              {donationItems.map(value => {
                const categoryInformation = categories.categories.find(
                  val => val.categoryId === categories.selectedCategory,
                );
                return (
                  <View
                    key={value.donationItemId}
                    style={style.SingleDonationItem}>
                    <SingleDonationItem
                      uri={value.image}
                      donationTitle={value.name}
                      badgeTitle={categoryInformation.name}
                      key={value.donationItemId}
                      price={parseFloat(value.price)}
                      donationItemId={value.donationItemId}
                      onPress={selectedDonationId => {
                        dispatch(updateSelectedDonationId(selectedDonationId));
                        navigation.navigate(Routes.Detail, {
                          categoryInformation,
                        });
                      }}
                    />
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
