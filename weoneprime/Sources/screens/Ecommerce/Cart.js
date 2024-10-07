import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, FontFamily, FontSize, normalize, wp } from '../../theme';
import { RNImage, RNStyles, RNText } from '../../common';

export default function Cart() {
  const Offers = [
    {
      id: "1",
      name: "Apple watch series 6",
      Size: "Small",
      productImage: require("../../assets/images/watch.png"),
      price: '₹35000',
      DiscountPrice: "₹35000",
      Rating: "3",
      Qty: "1",
      expected_date: 'Delivery by sep 18, Wed',
      rate: '₹40',
      free: 'FREE',
      BESTSELLER: 1
    },
    {
      id: "2",
      name: "Apple watch series 6",
      Size: "Small",
      productImage: require("../../assets/images/watch.png"),
      price: '₹35000',
      DiscountPrice: "₹35000",
      Rating: "3",
      Qty: "1",
      expected_date: 'Delivery by sep 18, Wed',
      rate: '₹40',
      free: 'FREE',
      BESTSELLER: 1
    },
  ];

  const renderCartData = ({ item }) => (
    <View style={styles.cartContainer}>
      <View style={RNStyles.flexRowBetween}>
        <RNImage source={item.productImage} style={{ width: wp(30), height: wp(30), borderRadius: normalize(4) }} />
        <View>
          <RNText style={styles.producttitle}>{item.name}</RNText>
          <RNText size={11}
            family={FontFamily.Light}
            align={"center"}
            color={Colors.Grey}
          >Size: {item.Size}</RNText>
          <RNImage source={require('../../assets/images/rate.png')} style={{ width: wp(5), height: wp(5), tintColor: '#f6a91a' }} />
          <View style={RNStyles.flexRow}>
            <RNText size={11}
              family={FontFamily.Light}
              align={"center"}
              color={Colors.Grey}
            >{item.name}</RNText>
            <RNText size={11}
              family={FontFamily.Light}
              align={"center"}
              color={Colors.Grey}
            >{item.name}</RNText>
          </View>
          <RNText>{item.name}</RNText>
        </View>
      </View>
    </View>
  )


  return (
    <View style={styles.Container}>
      <ScrollView>
        <FlatList
          data={Offers}
          renderItem={renderCartData}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: wp(3) }}
        />
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
    padding: wp(2),
  },
  producttitle: {
    fontSize: FontSize.font14
  },
});
