// modal.js
import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet, FlatList } from 'react-native';
import { RNImage, RNText, RNStyles } from '../../../common';
import { FontSize, FontFamily, wp, hp, Colors, normalize } from '../../../theme';
import Entypo from 'react-native-vector-icons/Entypo';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

// Render Item Component
export const renderItem = ({}) => {(
  <View>
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ marginRight: wp(2) }}>
          <RNImage source={item.logo} style={styles.image} resizeMode="stretch" />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: hp(1), paddingLeft: wp(2) }}
    />
  </View>
)};

// Render Category Item Component
export const RenderCategoryItem = ({ item, onCategorySelect }) => (
  <TouchableOpacity onPress={() => onCategorySelect(item)}>
    <View style={styles.categoryItem}>
      <Image source={item.logo} style={{ width: wp(8), height: wp(8) }} />
      <RNText size={FontSize.font11} family={FontFamily.Medium}>
        {item.name}
      </RNText>
    </View>
  </TouchableOpacity>
);

// Render Deal of Day Component
export const RenderDealofDay = ({ item }) => (
  <View style={{ padding: wp(5), alignItems: 'center' }}>
    <RNText size={FontSize.font13} family={FontFamily.SemiBold}>
      Deal of the Day
    </RNText>
    <RNText
      size={FontSize.font11}
      family={FontFamily.Regular}
      align="center"
      color={Colors.Grey}
    >
      {item.name}
    </RNText>
    <View style={[RNStyles.flexRow, { gap: wp(10) }]}>
      <TouchableOpacity style={styles.DealofDayIcon}>
        <Entypo name={'chevron-left'} size={15} color={Colors.DarkGrey} />
      </TouchableOpacity>
      <RNImage
        source={require('../../../assets/images/dealofday.png')}
        style={{ width: wp(50), height: hp(25) }}
      />
      <TouchableOpacity style={styles.DealofDayIcon}>
        <Entypo name={'chevron-right'} size={15} color={Colors.DarkGrey} />
      </TouchableOpacity>
    </View>
    <RNText size={FontSize.font10} family={FontFamily.SemiBold} color={Colors.Grey} letterSpacing={2}>
      {item.Product}
    </RNText>
    <RNText size={FontSize.font11} family={FontFamily.SemiBold} align="center" pHorizontal={wp(18)}>
      {item.productDesc}
    </RNText>
    <MaskedView style={{ flexDirection: 'row', height: 20 }} maskElement={
      <RNText size={FontSize.font10} family={FontFamily.SemiBold}>
        {item.price}
      </RNText>
    }>
      <LinearGradient colors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]} start={{ x: 1.2, y: 0 }} end={{ x: 0, y: 0 }} style={{ width: wp(20) }} />
    </MaskedView>
  </View>
);

// Render Offers Item Component
export const RenderOffersItem = ({ item, onCategorySelect }) => (
  <TouchableOpacity style={styles.offerContets} onPress={() => onCategorySelect(item)}>
    <View style={{ backgroundColor: item.coloCode, height: wp(20), overflow: 'hidden' }}>
      <RNImage source={require('../../../assets/images/OfferEffect.png')} style={styles.effectImage} />
    </View>
    <RNImage source={item.logo} style={{ width: wp(25), height: wp(25), position: 'absolute', top: hp(0), alignSelf: 'center' }} />
    <View style={styles.d_subContainer}>
      <RNText size={FontSize.font10} family={FontFamily.Regular}>{item.name}</RNText>
      <RNText size={FontSize.font11} family={FontFamily.SemiBold}>{item.OfferDesc}</RNText>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    ...RNStyles.flexRowBetween,
    height: hp(6),
    paddingHorizontal: wp(2),
    backgroundColor: "#F0F0F0",
  },
  inputField: {
    borderWidth: 1.5,
    borderColor: "#DADADA",
    borderRadius: normalize(12),
    height: hp(4),
    paddingHorizontal: wp(3),
  },
  categoryItem: {
    ...RNStyles.center,
    backgroundColor: Colors.LightGrey,
    paddingVertical: hp(1),
    borderRadius: normalize(4),
    marginRight: wp(5),
  },
  image: {
    width: wp(94),
    height: hp(20),
    borderRadius: normalize(10),
  },
  dotsContainer: {
    ...RNStyles.flexRowCenter,
    alignSelf: 'center',
    position: 'absolute',
    bottom: hp(.5),
    marginVertical: hp(2),
  },
  dot: {
    width: normalize(8),
    height: normalize(8),
    borderRadius: 4,  
    marginHorizontal: wp(1),
  },
  activeDot: {
    borderWidth: 1,
    borderColor: Colors.DarkGrey,
    backgroundColor: Colors.White
  },
  inactiveDot: {
    borderWidth: 1,
    borderColor: Colors.DarkGrey
  },
  offerContets: {
    height: wp(30),
    width: wp(30),
    marginRight: wp(2),
    borderRadius: normalize(10),
    overflow: 'hidden',
  },
  DealofDayIcon: { borderWidth: 1, borderColor: "#D6D6D6", borderRadius: 50, padding: wp(1) },
  d_subContainer: {
    ...RNStyles.center,
    height: wp(10),
    borderWidth: 1.5,
    borderColor: "#D6D6D6",
    borderTopWidth: 0,
    borderBottomLeftRadius: normalize(10),
    borderBottomRightRadius: normalize(10),
  },
  effectImage: {
    width: wp(45),
    height: wp(45),
    position: 'absolute',
    top: hp(-2),
    left: wp(-2),
  },
});