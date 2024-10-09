import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors, FontFamily, FontSize, hp, normalize, wp } from '../../theme';
import { RNImage, RNStyles, RNText } from '../../common';
import Fontisto from "react-native-vector-icons/Fontisto";
import { renderSuggestedItem } from './HomeComponent/modal';

export default function Cart() {
  const Offers = [
    {
      id: "1",
      name: "Apple watch series 6",
      Size: "Small",
      productImage: require("../../assets/images/exploreimg.png"),
      price: '₹35000',
      DiscountPrice: "₹35000",
      Rating: "3",
      Qty: "1",
      expected_date: 'Delivery by sep 18, Wed',
      rate: '₹40',
      free: 'FREE',
      BESTSELLER: 1,
      offer: '₹175 With top offers'
    },
    {
      id: "2",
      name: "Apple watch series 6",
      Size: "Small",
      productImage: require("../../assets/images/exploreimg.png"),
      price: '₹35000',
      DiscountPrice: "₹35000",
      Rating: "3",
      Qty: "1",
      expected_date: 'Delivery by sep 18, Wed',
      rate: '₹40',
      free: 'FREE',
      BESTSELLER: 1,
      offer: '₹175 With top offers'
    },
  ];

  const DealsItem = [
    {
      id: "1",
      productDesc: "Blue, Fast Charging for Mobile",
      Product: "SmartBuy 10000 mAh 12 W Power bank",
      image: require("../../assets/images/proimage.png"),
      price: "1599",
      DiscPrice: "999",
      OfferRate: "53% Off",
    },
    {
      id: "2",
      productDesc: "Blue, Fast Charging for Mobile",
      Product: "SmartBuy 10000 mAh 12 W Power bank",
      image: require("../../assets/images/proimage.png"),
      price: "1599",
      DiscPrice: "999",
      OfferRate: "53% Off",
    },
    {
      id: "3",
      productDesc: "Blue, Fast Charging for Mobile",
      Product: "SmartBuy 10000 mAh 12 W Power bank",
      image: require("../../assets/images/proimage.png"),
      price: "1599",
      DiscPrice: "999",
      OfferRate: "53% Off",
    },
  ];

  const renderCartData = ({ item }) => (
    <View style={styles.cartContainer}>
      <View style={[RNStyles.flexRow, { gap: wp(2) }]}>
        <RNImage source={item.productImage} style={{ width: wp(30), height: hp(18), borderRadius: normalize(4) }} />
        <View style={{ gap: hp(.3) }}>
          <RNText style={styles.producttitle}>{item.name}</RNText>
          <RNText style={styles.p_subtitle}>Size: {item.Size}</RNText>
          <RNImage source={require('../../assets/images/rate.png')} style={styles.productImage} />
          <View style={[RNStyles.flexRow, { gap: wp(1) }]}>
            <RNText style={styles.producttitle}>{item.price}</RNText>
            <RNText style={styles.p_subtitle}
              line={"line-through"}
            >{item.DiscountPrice}</RNText>
          </View>
          <RNText size={11}
            family={FontFamily.Light}
            color={'#FF696C'}
          >{item.offer}</RNText>
        </View>
      </View>
      <View style={{ gap: hp(.5) }}>
        <TouchableOpacity style={styles.QtyButton}>
          <RNText style={styles.producttitle}>Qty: 1</RNText>
          <Fontisto name={"caret-down"} size={15} color={Colors.DarkGrey} />
        </TouchableOpacity>
        <RNText style={[styles.producttitle, { fontFamily: FontFamily.Light }]}>{item.expected_date} • <RNText style={styles.p_subtitle}
          line={"line-through"}
          size={15}
        >{item.DiscountPrice}</RNText>{" "}<RNText style={[styles.producttitle, { fontFamily: FontFamily.Light, color: '#00A098' }]}>FREE</RNText></RNText>
      </View>
      <View style={[RNStyles.flexRow, { gap: wp(2) }]}>
        <TouchableOpacity style={styles.button}>
          <RNImage source={require('../../assets/images/save.png')} style={{ width: wp(5), height: wp(5) }} />
          <RNText style={styles.buttonText}>Save for later</RNText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <RNImage source={require('../../assets/images/delete.png')} style={{ width: wp(5), height: wp(5) }} />
          <RNText style={styles.buttonText}>Remove Item</RNText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <RNImage source={require('../../assets/images/cart.png')} style={{ width: wp(5), height: wp(5) }} />
          <RNText style={styles.buttonText}>Buy this  now{" "}</RNText>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={Offers}
          renderItem={renderCartData}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={{ paddingHorizontal: wp(3) }}
          ItemSeparatorComponent={(props) => (
            <View
              style={{
                height: normalize(5),
                backgroundColor: Colors.D9D9D9
              }}
            />
          )}
        />

        <View style={{ padding: wp(3), gap: hp(1) }}>
          <RNText style={[styles.producttitle, { marginBottom: hp(2), fontSize: FontSize.font13 }]}>Price Details</RNText>
          <View style={RNStyles.flexRowBetween}>
            <RNText style={styles.buttonText}>Price ( 2 Items )</RNText>
            <RNText style={styles.buttonText}>₹2,048</RNText>
          </View>
          <View style={RNStyles.flexRowBetween}>
            <RNText style={styles.buttonText}>Discount</RNText>
            <RNText style={[styles.buttonText, { color: Colors.Green }]}>-₹1,100</RNText>
          </View>
          <View style={RNStyles.flexRowBetween}>
            <RNText style={styles.buttonText}>Platform Fee</RNText>
            <RNText style={[styles.buttonText, { color: Colors.Grey }]}>-₹5</RNText>
          </View>
          <View style={RNStyles.flexRowBetween}>
            <RNText style={styles.buttonText}>Coupons for you</RNText>
            <RNText style={styles.buttonText}>₹3</RNText>
          </View>
          <View style={RNStyles.flexRowBetween}>
            <RNText style={styles.buttonText}>Delivery Charges</RNText>
            <RNText style={[styles.buttonText, { color: Colors.Grey }]}>₹80 <RNText style={[styles.buttonText, { color: Colors.Green }]}>Free Delivery</RNText></RNText>
          </View>
          <View style={[RNStyles.flexRowBetween, { marginTop: hp(2) }]}>
            <RNText style={[styles.producttitle, { fontSize: FontSize.font13 }]}>Total Amount</RNText>
            <RNText style={styles.producttitle}>₹35000</RNText>
          </View>
          <View
            style={{
              height: normalize(2.5),
              backgroundColor: "#D9D9D9",
            }}
          />
          <RNText style={[styles.producttitle, { fontSize: FontSize.font13, color: Colors.Green }]}>You will save ₹1,152 on this order</RNText>
        </View>

        <View style={[RNStyles.flexRowBetween, {padding: wp(3)}]}>
          <View style={RNStyles.flexRow}>
            <RNText style={styles.producttitle}>₹896{" "}</RNText>
            <RNText style={styles.p_subtitle}
              line={"line-through"}>₹2048</RNText>
          </View>
          <TouchableOpacity style={{backgroundColor: '#f9a126',width: wp(50),borderRadius: normalize(7),paddingVertical: hp(1)}}>
            <RNText size={17} color={Colors.White} family={FontFamily.SemiBold} align={"center"}>Place Order{" "}</RNText>
          </TouchableOpacity>
        </View>

        <View style={{ padding: wp(3) }}>
          <RNText size={FontSize.font13} family={FontFamily.SemiBold}>
          Suggested for you
          </RNText>
          <RNText
            pBottom={hp(1)}
            size={FontSize.font11}
            family={FontFamily.Light}
            color={Colors.Grey}
          >
            Based on your activity
          </RNText>
          <FlatList
            data={DealsItem}
            renderItem={({ item }) => renderSuggestedItem({ item })}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              ...RNStyles.flexWrapHorizontal,
              gap: wp(2.5),
              paddingBottom: hp(4),
            }}
          />
          <TouchableOpacity style={styles.orderButton}>
            <RNText
              size={FontSize.font11}
              family={FontFamily.SemiBold}
              color={Colors.White}
              align={"center"}
            >
              Place Order
            </RNText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.White
  },
  cartContainer: {
    padding: wp(3),
    gap: hp(2)
  },
  producttitle: {
    fontSize: FontSize.font15,
    fontFamily: FontFamily.SemiBold
  },
  p_subtitle: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Light,
    color: Colors.Grey
  },
  productImage: {
    width: wp(5),
    height: wp(5),
    tintColor: '#f6a91a',
    marginBottom: hp(1.5)
  },
  QtyButton: {
    ...RNStyles.flexRowCenter,
    borderWidth: 1,
    borderColor: Colors.D9D9D9,
    borderRadius: normalize(4),
    width: wp(30),
    paddingHorizontal: wp(3),
    paddingVertical: wp(1),
    gap: wp(2),
  },
  button: {
    ...RNStyles.flexRowCenter,
    borderWidth: 1,
    borderColor: Colors.D9D9D9,
    width: wp(30),
    paddingHorizontal: wp(5),
    paddingVertical: wp(2),
    gap: wp(3),
  },
  buttonText: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Regular
  },
});
