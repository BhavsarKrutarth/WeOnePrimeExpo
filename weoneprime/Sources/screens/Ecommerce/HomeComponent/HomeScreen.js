import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import {
  RNContainer,
  RNImage,
  RNInput,
  RNStyles,
  RNText,
} from "../../../common";
import {
  Colors,
  FontFamily,
  FontSize,
  hp,
  normalize,
  wp,
} from "../../../theme";
import { Images } from "../../../constants";
import Entypo from "react-native-vector-icons/Entypo";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const slideInterval = useRef(null);

  const categories = [
    { id: "1", name: "All", logo: require("../../../assets/images/gift.png") },
    { id: "2", name: "Food", logo: require("../../../assets/images/gift.png") },
    { id: "3", name: "Fashion", logo: require("../../../assets/images/gift.png") },
    { id: "4", name: "GYM", logo: require("../../../assets/images/gift.png") },
  ];

  const Data = [
    { id: "1", image: Images.exclusive1 },
    { id: "2", image: Images.exclusive1 },
    { id: "3", image: Images.exclusive1 },
    { id: "4", image: Images.exclusive1 },
  ];

  const Offers = [
    { id: "1", name: "Titan, Casio...",OfferDesc: "Min 30% Off", logo: require("../../../assets/images/watch.png"), coloCode: '#bcdbff' },
    { id: "2", name: "Titan, Casio...",OfferDesc: "Min 30% Off", logo: require("../../../assets/images/watch.png"), coloCode: "#A3CFAA" },
    { id: "3", name: "Titan, Casio...",OfferDesc: "Min 30% Off", logo: require("../../../assets/images/watch.png"), coloCode: "#e2adc0" },
   ];

   const DealofDay = [
    { id: "1", name: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",Product: "MAMAEARTH",productDesc: "Mamaearth Vitamin C Daily Glow Face Serum", logo: require("../../../assets/images/watch.png"), price: "UNDER 299" },
    { id: "2", name: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",Product: "MAMAEARTH",productDesc: "Mamaearth Vitamin C Daily Glow Face Serum", logo: require("../../../assets/images/watch.png"), price: "UNDER 299" },
    { id: "3", name: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",Product: "MAMAEARTH",productDesc: "Mamaearth Vitamin C Daily Glow Face Serum", logo: require("../../../assets/images/watch.png"), price: "UNDER 299" },
   ];

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= Data.length) {
        nextIndex = 0;
      }
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{marginRight: wp(2)}}>
      <RNImage source={item.image} style={styles.image} resizeMode="stretch" />
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => onCategorySelect(item)}>
      <View style={styles.categoryItem}>
        <Image source={item.logo} style={{ width: wp(8), height: wp(8) }} />
        <RNText size={FontSize.font11} family={FontFamily.Medium}>
          {item.name}
        </RNText>
      </View>
    </TouchableOpacity>
  );

  const renderDealofDay = ({ item }) => {
    return (
      <View style={{ padding: wp(5), alignItems: 'center' }}>
        <RNText size={FontSize.font13} family={FontFamily.SemiBold}>
          Deal of the Day
        </RNText>
        <RNText size={FontSize.font11} family={FontFamily.Regular} align={"center"} color={Colors.Grey}>
          {item.name}
        </RNText>
        <View style={[RNStyles.flexRow, { gap: wp(10) }]}>
          <TouchableOpacity style={styles.DealofDayIcon}>
            <Entypo name={"chevron-left"} size={15} color={Colors.DarkGrey} />
          </TouchableOpacity>
          <RNImage source={require('../../../assets/images/dealofday.png')} style={{ width: wp(50), height: hp(25) }} />
          <TouchableOpacity style={styles.DealofDayIcon}>
            <Entypo name={"chevron-right"} size={15} color={Colors.DarkGrey} />
          </TouchableOpacity>
        </View>
        <RNText size={FontSize.font10} family={FontFamily.SemiBold} color={Colors.Grey} letterSpacing={2}>
          {item.Product}
        </RNText>
        <RNText size={FontSize.font11} family={FontFamily.SemiBold} align={"center"} pHorizontal={wp(18)}>
          {item.productDesc}
        </RNText>
        <MaskedView
          style={{ flexDirection: "row", height: 20 }}
          maskElement={
            <RNText size={FontSize.font10} family={FontFamily.SemiBold}>
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
  };
  

  const onCategorySelect = (item) => {
    console.log("Selected Category:", item.name);
  };

  const renderOffersItem = ({ item }) => (
    <TouchableOpacity
      style={styles.offerContets}
      onPress={() => onCategorySelect(item)}
    >
      <View style={{
        backgroundColor: item.coloCode,
        height: wp(20),
        overflow: 'hidden',
      }}>
        <RNImage
          source={require('../../../assets/images/OfferEffect.png')}
          style={styles.effectImage}
        />
      </View>
      <RNImage
        source={item.logo}
        style={{
          width: wp(25),
          height: wp(25),
          position: 'absolute',
          top: hp(0),
          alignSelf: 'center',
        }}
      />
      <View style={{
        ...RNStyles.center,
        height: wp(10),
        borderWidth: 1.5,
        borderColor: "#D6D6D6",
        borderTopWidth: 0,
        borderBottomLeftRadius: normalize(10),
        borderBottomRightRadius: normalize(10),
      }}>
        <RNText size={FontSize.font10} family={FontFamily.Regular}>
          {item.name}{" "}
        </RNText>
        <RNText size={FontSize.font11} family={FontFamily.SemiBold}>
          {item.OfferDesc}{" "}
        </RNText>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <RNContainer style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={{ width: wp(30) }}>
          <RNImage
            source={require("../../../assets/images/menu.png")}
            style={{ width: wp(4), height: wp(4) }}
          />
        </TouchableOpacity>
        <View style={{ width: wp(30) }}>
          <Image
            resizeMode="contain"
            source={Images.Weoneprime}
            style={{ width: wp(25) }}
          />
        </View>
        <View
          style={[
            RNStyles.flexRow,
            { gap: wp(2), width: wp(30), justifyContent: "flex-end" },
          ]}
        >
          <TouchableOpacity>
            <RNImage
              source={require("../../../assets/images/cart.png")}
              style={{ width: wp(5), height: wp(5) }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <RNImage
              source={require("../../../assets/images/cart.png")}
              style={{ width: wp(5), height: wp(5) }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <RNImage
              source={require("../../../assets/images/cart.png")}
              style={{ width: wp(5), height: wp(5) }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" >
        <View
          style={{
            paddingHorizontal: wp(2),
            backgroundColor: "#F0F0F0",
            borderBottomRightRadius: normalize(15),
            borderBottomLeftRadius: normalize(15),
          }}
        >
          {/* search Input */}
          <View>
            <RNInput
              containerStyle={styles.inputField}
              iconstyle={{ width: wp(3), height: wp(3), tintColor: Colors.Grey }}
              inputStyle={{borderRadius: 50, height: hp(4), borderColor: '#D6D6D6'}}
              style={{
                fontSize: FontSize.font11,
                fontFamily: FontFamily.Medium,
              }}
              Icon={Images.search}
              placeholder="Search for products, Brands and More"
              placeholderTextColor={Colors.Black}
            />
          </View>

          {/* categoryItems View */}
          <View>
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ paddingVertical: hp(1), paddingLeft: wp(2) }}
            />
          </View>
        </View>

        {/* Banner View */}
        <View style={{ paddingHorizontal: wp(3),paddingVertical: hp(1.5) }}>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            ref={flatListRef}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
           {/* Dot Indicators */}
          <View style={styles.dotsContainer}>
            {Data.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentIndex === index
                    ? styles.activeDot
                    : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>

       {/* Offer Container */}
        <View>
          <FlatList
            data={Offers}
            renderItem={renderOffersItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingHorizontal: wp(3)}}
          />
        </View>
        {/* Deal of the day */}
        <FlatList
          data={DealofDay}
          renderItem={renderDealofDay}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          style={{ paddingVertical: hp(1), paddingLeft: wp(2) }}
        />
      </ScrollView>
    </RNContainer>
  );
}

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
  effectImage: {
    width: wp(45),
    height: wp(45),
    position: 'absolute',
    top: hp(-2),
    left: wp(-2),
  },
});
