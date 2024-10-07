import React from "react";
import {
  TouchableOpacity,
  View,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { RNText, RNImage, RNStyles } from "../../../common";
import {
  wp,
  hp,
  normalize,
  FontSize,
  FontFamily,
  Colors,
} from "../../../theme";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

// Render Category Item
export const renderCategoryItem = ({ item, onCategorySelect }) => (
  <TouchableOpacity onPress={() => onCategorySelect(item)}>
    <View style={styles.categoryItem}>
      <Image source={item.logo} style={{ width: wp(8), height: wp(8) }} />
      <RNText size={FontSize.font11} family={FontFamily.Medium}>
        {item.name}
      </RNText>
    </View>
  </TouchableOpacity>
);

// Render Deal of the Day
export const renderDealofDay = ({ item, handlePrevious, handleNext }) => (
  <View style={{ padding: 20, alignItems: "center", width: wp(100) }}>
    <RNText size={14} family={FontFamily.SemiBold}>
      Deal of the Day{" "}
    </RNText>
    <RNText
      size={11}
      family={FontFamily.Light}
      align={"center"}
      color={Colors.Grey}
      pHorizontal={wp(5)}
    >
      {item.name}
    </RNText>
    <View style={[RNStyles.flexRow, { gap: wp(8) }]}>
      <TouchableOpacity style={styles.DealofDayIcon} onPress={handlePrevious}>
        <Entypo name={"chevron-left"} size={15} color={"#909090"} />
      </TouchableOpacity>
      <RNImage source={item.logo} style={{ width: wp(50), height: hp(30) }} />
      <TouchableOpacity style={styles.DealofDayIcon} onPress={handleNext}>
        <Entypo name={"chevron-right"} size={15} color={"#909090"} />
      </TouchableOpacity>
    </View>
    <RNText
      size={9}
      family={FontFamily.SemiBold}
      color={Colors.Grey}
      letterSpacing={2}
      pBottom={hp(0.5)}
    >
      {item.Product}
    </RNText>
    <RNText
      size={11}
      family={FontFamily.SemiBold}
      align={"center"}
      pHorizontal={wp(20)}
      pBottom={hp(0.5)}
    >
      {item.productDesc}
    </RNText>
    <MaskedView
      style={{ flexDirection: "row", height: 20 }}
      maskElement={
        <RNText size={10} family={FontFamily.SemiBold} align={"center"}>
          {item.price}
        </RNText>
      }
    >
      <LinearGradient
        colors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
        start={{ x: 1.2, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={{ width: wp(20) }}
      />
    </MaskedView>
  </View>
);

// Render Offers Item
export const renderOffersItem = ({ item, onCategorySelect }) => (
  <TouchableOpacity
    style={styles.offerContainer}
    onPress={() => onCategorySelect(item)}
  >
    <View
      style={{
        backgroundColor: item.coloCode,
        height: wp(20),
        overflow: "hidden",
      }}
    >
      <RNImage
        source={require("../../../assets/images/OfferEffect.png")}
        style={styles.effectImage}
      />
    </View>
    <RNImage
      source={item.logo}
      style={styles.logoContent}
    />
    <View
      style={styles.OfferContents}
    >
      <RNText size={FontSize.font10} family={FontFamily.Regular}>
        {item.name}{" "}
      </RNText>
      <RNText size={FontSize.font11} family={FontFamily.SemiBold}>
        {item.OfferDesc}{" "}
      </RNText>
    </View>
  </TouchableOpacity>
);

// Steal Deals: Limited Units Only
export const renderDealsItem = ({ item }) => (
  <View style={{ width: wp(45.5), gap: hp(0.5), paddingTop: hp(1) }}>
    <View
      style={styles.limitedContents}
    >
      <RNImage source={item.image} style={{ width: wp(40), height: wp(40) }} />
      <TouchableOpacity
        style={styles.likeButton}
        onPress={() => onLikeButtonPress(index)}
      >
        <AntDesign
          name={"hearto"}
          style={{
            fontSize: FontSize.font12,
            color: Colors.White,
          }}
        />
      </TouchableOpacity>
    </View>
    <RNText
      size={FontSize.font10}
      family={FontFamily.Light}
      color={Colors.Grey}
    >
      {item.productDesc}
    </RNText>
    <RNText size={FontSize.font11} family={FontFamily.SemiBold}>
      {item.Product}
    </RNText>
    <View style={[RNStyles.flexRow, { gap: wp(3) }]}>
      <RNText size={FontSize.font11} family={FontFamily.SemiBold}>
        {item.DiscPrice}
      </RNText>
      <RNText
        size={FontSize.font11}
        family={FontFamily.SemiBold}
        color={Colors.Grey}
        line={"line-through"}
      >
        ₹{item.price}
      </RNText>
      <RNText
        size={FontSize.font11}
        family={FontFamily.SemiBold}
        color={"#FF696C"}
      >
        ₹{item.OfferRate}
      </RNText>
    </View>
  </View>
);

// Today's edit
export const renderTodayEdit = ({ item }) => (
  <View
    style={styles.t_editContents}
  >
    <View
      style={{
        ...RNStyles.center,
        borderBottomWidth: 2,
        borderBottomColor: Colors.D9D9D9,
      }}
    >
      <View
        style={styles.t_subcontainer}
      >
        <RNText
          size={FontSize.font12}
          family={FontFamily.SemiBold}
          color={Colors.White}
          Padding={wp(1)}
        >
          IN SPOTLIGHT{" "}
        </RNText>
      </View>
      <Image source={item.image} style={{ width: wp(50), height: wp(45) }} />
    </View>
    <RNText
      size={FontSize.font10}
      family={FontFamily.Light}
      color={Colors.Grey}
    >
      {item.productDesc}
    </RNText>
    <RNText size={FontSize.font11} family={FontFamily.SemiBold}>
      {item.Product}
    </RNText>
    <View style={[RNStyles.flexRow, { gap: wp(3) }]}>
      <RNText size={FontSize.font11} family={FontFamily.SemiBold}>
        {item.DiscPrice}
      </RNText>
      <RNText
        size={FontSize.font11}
        family={FontFamily.SemiBold}
        color={Colors.Grey}
        line={"line-through"}
      >
        ₹{item.price}
      </RNText>
      <RNText
        size={FontSize.font11}
        family={FontFamily.SemiBold}
        color={"#FF696C"}
      >
        ₹{item.OfferRate}
      </RNText>
    </View>
  </View>
);

// Exclusive
export const renderExclusive = ({ item, separators }) => (
  <View style={{ marginRight: wp(5) }}>
    <RNImage source={item.image} style={{ width: wp(15), height: wp(15) }} />
  </View>
);

export const renderSuggestedItem = ({ item }) => (
  <View style={styles.cartContents}>
    <RNImage source={item.image} style={{ width: wp(45.5),height: hp(25) }} />
    <View style={{ paddingHorizontal: wp(1.8), borderTopWidth: 1, borderTopColor: Colors.D9D9D9, gap: hp(1), paddingTop: hp(1) }}>
      <RNText size={FontSize.font12} family={FontFamily.SemiBold} >
        {item.Product}
      </RNText>
      <View style={[RNStyles.flexRow, { gap: wp(12) }]}>
        <View style={[RNStyles.flexRow,  { gap: wp(1) }]}>
          <RNText size={FontSize.font11} family={FontFamily.SemiBold}>
            {item.DiscPrice}
          </RNText>
          <RNText
            size={FontSize.font11}
            family={FontFamily.SemiBold}
            color={Colors.Grey}
            line={"line-through"}
          >
            ₹{item.price}
          </RNText>
        </View>
        <RNText
          size={FontSize.font11}
          family={FontFamily.SemiBold}
          color={"#FF696C"}
        >
          ₹{item.OfferRate}
        </RNText>
      </View>
      <TouchableOpacity style={{ borderWidth: 1, borderColor: Colors.D9D9D9, padding: hp(.8), borderRadius: normalize(7) }}>
        <RNText
          size={16}
          family={FontFamily.SemiBold}
          color={Colors.Black}
          align={"center"}
        >
          Place Order
        </RNText>
      </TouchableOpacity>
    </View>
  </View>
);

export const onCategorySelect = (item) => {
  console.log("Selected Category:", item.name);
};

const styles = StyleSheet.create({
  categoryItem: {
    ...RNStyles.center,
    backgroundColor: Colors.LightGrey,
    paddingVertical: hp(2),
    paddingLeft: wp(2),
    borderRadius: normalize(4),
    marginRight: wp(5),
  },
  DealofDayIcon: {
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 50,
    padding: wp(2),
  },
  offerContainer: {
    height: wp(30),
    width: wp(30),
    marginRight: wp(2),
    borderRadius: normalize(10),
    overflow: "hidden",
  },
  OfferContents: {
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
    position: "absolute",
    top: hp(-2),
    left: wp(-2),
  },
  likeButton: {
    ...RNStyles.center,
    height: wp(7),
    width: wp(7),
    backgroundColor: "rgb(0, 0, 0)",
    position: "absolute",
    top: hp(1),
    borderRadius: 50,
    right: wp(2),
  },
  t_editContents: {
    width: wp(60),
    height: wp(70),
    gap: hp(0.5),
    paddingTop: hp(1),
    borderWidth: 1.5,
    borderColor: Colors.D9D9D9,
    marginBottom: 20,
  },
  t_subcontainer: {
    position: "absolute",
    backgroundColor: Colors.Black,
    top: 0,
    left: 0,
  },
  limitedContents: {
    width: wp(45.5),
    height: hp(28),
    borderWidth: 2,
    borderColor: Colors.D9D9D9,
    ...RNStyles.center,
  },
  logoContent: {
    width: wp(25),
    height: wp(25),
    position: "absolute",
    top: hp(0),
    alignSelf: "center",
  },
  cartContents: {
    width: wp(45.5),
    height: hp(40),
    borderWidth: 2,
    borderColor: Colors.D9D9D9,
  }
});
